/**
 * Discovery Engine
 * Uses Google Maps Places API (Text Search + Place Details)
 * to find local businesses by niche + city and return
 * structured lead data including their website URL.
 */

export interface PlaceLead {
  name: string
  place_id: string
  address: string
  phone: string | null
  website: string | null
  rating: number | null
  review_count: number | null
  city: string
  state: string | null
  niche: string
}

const DETAILS_FIELDS = [
  'name',
  'formatted_address',
  'formatted_phone_number',
  'website',
  'rating',
  'user_ratings_total',
  'place_id',
].join(',')

async function fetchJson(url: string) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status} from ${url}`)
  return res.json()
}

/**
 * Extract city and state from a formatted address string.
 */
function parseCityState(address: string): { city: string; state: string | null } {
  // "123 Main St, Austin, TX 78701, USA"
  const parts = address.split(',').map((p) => p.trim())
  if (parts.length >= 3) {
    const city = parts[parts.length - 3] ?? parts[0]
    const stateZip = parts[parts.length - 2] ?? ''
    const state = stateZip.split(' ')[0] ?? null
    return { city, state }
  }
  return { city: address, state: null }
}

/**
 * Discover businesses using Google Maps Places Text Search + Details.
 * @param niche  e.g. "law firms", "plumbers", "dentists"
 * @param city   e.g. "Austin TX"
 * @param limit  max results to return (1-20)
 */
export async function discoverBusinesses(
  niche: string,
  city: string,
  limit = 20
): Promise<PlaceLead[]> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  if (!apiKey) throw new Error('GOOGLE_MAPS_API_KEY is not set in .env.local')

  const query = encodeURIComponent(`${niche} in ${city}`)
  const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`

  const searchData = await fetchJson(searchUrl)

  if (searchData.status !== 'OK' && searchData.status !== 'ZERO_RESULTS') {
    throw new Error(`Google Places API error: ${searchData.status} — ${searchData.error_message ?? ''}`)
  }

  const results: PlaceLead[] = []
  const places = (searchData.results ?? []).slice(0, limit)

  // Fetch detailed info for each place (website, phone, etc.)
  for (const place of places) {
    try {
      const detailUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=${DETAILS_FIELDS}&key=${apiKey}`
      const detailData = await fetchJson(detailUrl)
      const d = detailData.result ?? {}

      const { city: parsedCity, state } = parseCityState(d.formatted_address ?? place.formatted_address ?? '')

      results.push({
        name: d.name ?? place.name,
        place_id: place.place_id,
        address: d.formatted_address ?? place.formatted_address ?? '',
        phone: d.formatted_phone_number ?? null,
        website: d.website ?? null,
        rating: d.rating ?? place.rating ?? null,
        review_count: d.user_ratings_total ?? place.user_ratings_total ?? null,
        city: parsedCity,
        state,
        niche,
      })
    } catch (err) {
      console.error(`Failed to get details for ${place.name}:`, err)
    }
  }

  // Filter: only return businesses that have a website (we need it to scrape)
  return results.filter((r) => r.website)
}

/**
 * Score a lead on how likely it is to need a new website.
 * Higher = worse current web presence = better prospect.
 */
export function scoreLeadPriority(lead: PlaceLead): number {
  let score = 0

  // No website at all (shouldn't be in results but just in case)
  if (!lead.website) score += 50

  // Low rating = more room to improve overall business
  if (lead.rating !== null && lead.rating < 3.5) score += 20
  else if (lead.rating !== null && lead.rating < 4.0) score += 10

  // High review count = established business, more to gain
  if (lead.review_count !== null && lead.review_count > 100) score += 15
  else if (lead.review_count !== null && lead.review_count > 50) score += 8

  // Niches that historically have terrible websites
  const highValueNiches = ['plumber', 'electrician', 'hvac', 'roofer', 'landscap', 'pest control', 'chiropractor']
  if (highValueNiches.some((n) => lead.niche.toLowerCase().includes(n))) score += 20

  return score
}
