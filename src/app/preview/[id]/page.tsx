import { getDb } from '@/lib/db'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

export default function PreviewPage({ params }: Props) {
  const db = getDb()
  const site = db.prepare(`
    SELECT g.html, g.version, g.deploy_url, b.name, b.category, b.city
    FROM generated_sites g
    JOIN businesses b ON b.id = g.business_id
    WHERE g.id = ?
  `).get(params.id) as {
    html: string
    version: number
    deploy_url: string | null
    name: string
    category: string
    city: string
  } | undefined

  if (!site) notFound()

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Preview toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-300 text-sm font-medium">
            {site.name} — {site.city} · v{site.version}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {site.deploy_url && (
            <a
              href={site.deploy_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              View Live Site ↗
            </a>
          )}
          <a
            href={`/api/download/${params.id}`}
            className="px-3 py-1 text-xs bg-gray-600 hover:bg-gray-500 text-white rounded"
          >
            Download HTML
          </a>
          <a href="/" className="px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded">
            ← Dashboard
          </a>
        </div>
      </div>

      {/* The generated site in a full iframe */}
      <iframe
        srcDoc={site.html}
        className="flex-1 w-full border-0"
        sandbox="allow-scripts allow-same-origin"
        title={`Preview: ${site.name}`}
      />
    </div>
  )
}
