import { Link, getRouteApi } from '@tanstack/react-router'
import { useState } from 'react'
import type { SearchParams } from '../-schema/SearchSchema.zod'

const searchRouteApi = getRouteApi('/(public)/search')
export const FilterPanel = () => {
  const { filter, page, sort } = searchRouteApi.useSearch()
  const [filterInput, setFilterInput] = useState(filter)
  const [pageInput, setPageInput] = useState(page.toString())
  const getSearchParams = (updates: Partial<SearchParams>) => {
    return {
      filter: updates.filter !== undefined ? updates.filter : filter,
      page: updates.page !== undefined ? updates.page : page,
      sort: updates.sort !== undefined ? updates.sort : sort,
    }
  }
  return (
    <div className="space-y-3 mb-2">
      <div className='flex items-center gap-2'>
        <label className="label">Filter</label>
        <input
          type="text"
          value={filterInput}
          className="input"
          onChange={(e) => setFilterInput(e.target.value)}
        />
        <Link
          className="outlined-button"
          to="/search"
          search={getSearchParams({ filter: filterInput })}
        >
          Apply Filter
        </Link>
      </div>
      <div className='flex gap-2 items-center'>
        <label className="label">Page</label>
        <input
          type="number"
          value={pageInput}
          className="input"
          min={1}
          onChange={(e) => setPageInput(e.target.value)}
        />
        <Link
          className="outlined-button"
          to="/search"
          search={getSearchParams({ page: parseInt(pageInput) || 1 })}
        >
          Go to page
        </Link>

        <Link
          className="outlined-button"
          to="/search"
          search={getSearchParams({ page: Math.max(1, page - 1) })}
          disabled={page <= 1}
        >
          Prev
        </Link>

        <Link
          className="outlined-button"
          to="/search"
          search={getSearchParams({ page: Math.max(page + 1) })}
        >
          Next
        </Link>
      </div>
      
    </div>
  )
}
