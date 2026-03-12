import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const { site_id, business_id } = await req.json()
    if (!site_id || !business_id) return NextResponse.json({ error: 'site_id and business_id required' }, { status: 400 })

    const vercelToken = process.env.VERCEL_TOKEN
    if (!vercelToken) return NextResponse.json({ error: 'VERCEL_TOKEN not set in .env.local' }, { status: 400 })

    const db = getDb()
    const site = db.prepare('SELECT * FROM generated_sites WHERE id = ?').get(site_id) as { id: string; html: string } | undefined
    if (!site) return NextResponse.json({ error: 'Generated site not found' }, { status: 404 })

    const business = db.prepare('SELECT * FROM businesses WHERE id = ?').get(business_id) as { id: string; name: string } | undefined
    if (!business) return NextResponse.json({ error: 'Business not found' }, { status: 404 })

    // Sanitize project name for Vercel
    const projectName = `agency-${business.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').slice(0, 50)}-${site_id.slice(0, 8)}`

    // Deploy to Vercel via API
    const deployRes = await fetch('https://api.vercel.com/v13/deployments', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${vercelToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: projectName,
        files: [
          {
            file: 'index.html',
            data: site.html,
          },
        ],
        projectSettings: {
          framework: null,
        },
        target: 'production',
      }),
    })

    if (!deployRes.ok) {
      const errText = await deployRes.text()
      throw new Error(`Vercel deploy failed: ${deployRes.status} — ${errText}`)
    }

    const deployment = await deployRes.json()
    const deployUrl = `https://${deployment.url}`

    // Save deployment URL
    db.prepare('UPDATE generated_sites SET deploy_url = ?, vercel_project_id = ?, status = ? WHERE id = ?')
      .run(deployUrl, deployment.projectId ?? '', 'deployed', site_id)

    db.prepare("UPDATE businesses SET status = 'deployed', updated_at = datetime('now') WHERE id = ?").run(business_id)

    return NextResponse.json({ deploy_url: deployUrl, deployment_id: deployment.id })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
