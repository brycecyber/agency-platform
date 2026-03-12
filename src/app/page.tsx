'use client'

import { useState, useEffect, useCallback } from 'react'

const NICHES = [
  'Law Firms', 'Plumbers', 'Dentists', 'HVAC', 'Roofers', 'Electricians',
  'Landscaping', 'Pest Control', 'Chiropractors', 'Accountants', 'Auto Repair',
  'Real Estate Agents', 'Insurance Agents', 'Veterinarians', 'Optometrists',
]

type BusinessStatus = 'discovered' | 'scraping' | 'scraped' | 'generating' | 'generated' | 'deployed' | 'error' | 'rejected'

interface Business {
  id: string
  name: string
  category: string
  city: string
  state: string
  phone: string
  website_url: string
  rating: number
  review_count: number
  status: BusinessStatus
  score: number
  scrape_score: number
  deploy_url: string
  generated_id: string
}

const STATUS_LABELS: Record<BusinessStatus, string> = {
  discovered: 'Discovered',
  scraping: 'Scraping...',
  scraped: 'Scraped',
  generating: 'Generating...',
  generated: 'Generated',
  deployed: 'Deployed',
  error: 'Error',
  rejected: 'Rejected',
}

export default function Dashboard() {
  const [businesses, setBusinesses] = useState<Business[]>([])
  const [loading, setLoading] = useState(false)
  const [discoverForm, setDiscoverForm] = useState({ niche: 'Plumbers', city: '' })
  const [activeTab, setActiveTab] = useState<'all' | BusinessStatus>('all')
  const [processingIds, setProcessingIds] = useState<Set<string>>(new Set())
  const [notification, setNotification] = useState<{ msg: string; type: 'success' | 'error' } | null>(null)

  const notify = (msg: string, type: 'success' | 'error' = 'success') => {
    setNotification({ msg, type })
    setTimeout(() => setNotification(null), 4000)
  }

  const fetchBusinesses = useCallback(async () => {
    const res = await fetch('/api/businesses')
    const data = await res.json()
    setBusinesses(data.businesses ?? [])
  }, [])

  useEffect(() => { fetchBusinesses() }, [fetchBusinesses])

  const discover = async () => {
    if (!discoverForm.city.trim()) { notify('Enter a city', 'error'); return }
    setLoading(true)
    try {
      const res = await fetch('/api/discover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ niche: discoverForm.niche, city: discoverForm.city, limit: 20 }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      notify(`Found ${data.total} businesses, saved ${data.saved} new leads`)
      fetchBusinesses()
    } catch (e) {
      notify(String(e), 'error')
    } finally {
      setLoading(false)
    }
  }

  const runScrape = async (id: string) => {
    setProcessingIds(prev => new Set(prev).add(id))
    try {
      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ business_id: id }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      notify('Scraped successfully')
      fetchBusinesses()
    } catch (e) {
      notify(String(e), 'error')
    } finally {
      setProcessingIds(prev => { const s = new Set(prev); s.delete(id); return s })
    }
  }

  const runGenerate = async (id: string) => {
    setProcessingIds(prev => new Set(prev).add(id + '-gen'))
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ business_id: id }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      notify('Website generated!')
      fetchBusinesses()
    } catch (e) {
      notify(String(e), 'error')
    } finally {
      setProcessingIds(prev => { const s = new Set(prev); s.delete(id + '-gen'); return s })
    }
  }

  const runDeploy = async (id: string, siteId: string) => {
    setProcessingIds(prev => new Set(prev).add(id + '-deploy'))
    try {
      const res = await fetch('/api/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ business_id: id, site_id: siteId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      notify(`Deployed to ${data.deploy_url}`)
      fetchBusinesses()
    } catch (e) {
      notify(String(e), 'error')
    } finally {
      setProcessingIds(prev => { const s = new Set(prev); s.delete(id + '-deploy'); return s })
    }
  }

  const reject = async (id: string) => {
    await fetch('/api/businesses', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: 'rejected' }),
    })
    fetchBusinesses()
  }

  const filtered = activeTab === 'all' ? businesses : businesses.filter(b => b.status === activeTab)

  const counts = businesses.reduce((acc, b) => {
    acc[b.status] = (acc[b.status] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">A</div>
            <div>
              <h1 className="font-semibold text-white text-sm">Agency Platform</h1>
              <p className="text-gray-500 text-xs">AI Website Builder</p>
            </div>
          </div>
          <div className="text-gray-400 text-xs">{businesses.length} total leads</div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Discover Panel */}
        <div className="card p-5">
          <h2 className="text-white font-semibold mb-4">Discover Local Businesses</h2>
          <div className="flex flex-wrap gap-3">
            <select
              value={discoverForm.niche}
              onChange={e => setDiscoverForm(f => ({ ...f, niche: e.target.value }))}
              className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm flex-1 min-w-[160px]"
            >
              {NICHES.map(n => <option key={n} value={n}>{n}</option>)}
            </select>
            <input
              type="text"
              placeholder="City, State (e.g. Austin TX)"
              value={discoverForm.city}
              onChange={e => setDiscoverForm(f => ({ ...f, city: e.target.value }))}
              onKeyDown={e => e.key === 'Enter' && discover()}
              className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm flex-1 min-w-[200px] placeholder-gray-500"
            />
            <button onClick={discover} disabled={loading} className="btn-primary whitespace-nowrap">
              {loading ? 'Searching...' : '🔍 Find Businesses'}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(['discovered', 'scraped', 'generated', 'deployed'] as const).map(status => (
            <div key={status} className="card p-4 cursor-pointer hover:border-indigo-800 transition-colors" onClick={() => setActiveTab(status)}>
              <div className="text-2xl font-bold text-white">{counts[status] ?? 0}</div>
              <div className="text-gray-400 text-xs capitalize mt-1">{status}</div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap">
          {(['all', 'discovered', 'scraped', 'generated', 'deployed', 'rejected'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeTab === tab ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {tab === 'all' ? `All (${businesses.length})` : `${tab} (${counts[tab] ?? 0})`}
            </button>
          ))}
        </div>

        {/* Business Table */}
        <div className="card overflow-hidden">
          {filtered.length === 0 ? (
            <div className="py-16 text-center text-gray-500">
              <div className="text-4xl mb-3">🏢</div>
              <p>No businesses yet. Use the discovery panel above to find leads.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">Business</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium hidden md:table-cell">Category</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium hidden lg:table-cell">Location</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">Status</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-medium hidden sm:table-cell">Score</th>
                    <th className="text-right px-4 py-3 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/50">
                  {filtered.map(biz => (
                    <tr key={biz.id} className="hover:bg-gray-800/30 transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-medium text-white">{biz.name}</div>
                        {biz.website_url && (
                          <a href={biz.website_url} target="_blank" rel="noopener noreferrer"
                            className="text-gray-500 text-xs hover:text-indigo-400 truncate block max-w-[200px]">
                            {biz.website_url.replace(/^https?:\/\//, '')}
                          </a>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-400 hidden md:table-cell">{biz.category}</td>
                      <td className="px-4 py-3 text-gray-400 hidden lg:table-cell">{biz.city}{biz.state ? `, ${biz.state}` : ''}</td>
                      <td className="px-4 py-3">
                        <span className={`badge badge-${biz.status}`}>{STATUS_LABELS[biz.status]}</span>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        {biz.score > 0 && (
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${Math.min(biz.score, 100)}%` }} />
                            </div>
                            <span className="text-gray-400 text-xs">{biz.score}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {/* Scrape */}
                          {(biz.status === 'discovered' || biz.status === 'scraped') && biz.website_url && (
                            <button
                              onClick={() => runScrape(biz.id)}
                              disabled={processingIds.has(biz.id)}
                              className="btn-secondary text-xs py-1"
                            >
                              {processingIds.has(biz.id) ? '...' : 'Scrape'}
                            </button>
                          )}
                          {/* Generate */}
                          {biz.status === 'scraped' && (
                            <button
                              onClick={() => runGenerate(biz.id)}
                              disabled={processingIds.has(biz.id + '-gen')}
                              className="btn-primary text-xs py-1"
                            >
                              {processingIds.has(biz.id + '-gen') ? '...' : '✨ Generate'}
                            </button>
                          )}
                          {/* Preview */}
                          {(biz.status === 'generated' || biz.status === 'deployed') && biz.generated_id && (
                            <a
                              href={`/preview/${biz.generated_id}`}
                              target="_blank"
                              className="btn-secondary text-xs py-1"
                            >
                              Preview
                            </a>
                          )}
                          {/* Deploy */}
                          {biz.status === 'generated' && biz.generated_id && (
                            <button
                              onClick={() => runDeploy(biz.id, biz.generated_id)}
                              disabled={processingIds.has(biz.id + '-deploy')}
                              className="btn-primary text-xs py-1 bg-emerald-700 hover:bg-emerald-600"
                            >
                              {processingIds.has(biz.id + '-deploy') ? '...' : '🚀 Deploy'}
                            </button>
                          )}
                          {/* Live site */}
                          {biz.status === 'deployed' && biz.deploy_url && (
                            <a href={biz.deploy_url} target="_blank" className="text-emerald-400 text-xs hover:underline">Live ↗</a>
                          )}
                          {/* Reject */}
                          {biz.status !== 'rejected' && biz.status !== 'deployed' && (
                            <button onClick={() => reject(biz.id)} className="text-gray-600 hover:text-red-400 text-xs transition-colors">✕</button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      {notification && (
        <div className={`fixed bottom-4 right-4 px-4 py-3 rounded-lg text-sm font-medium shadow-xl z-50 ${
          notification.type === 'success' ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'
        }`}>
          {notification.msg}
        </div>
      )}
    </div>
  )
}
