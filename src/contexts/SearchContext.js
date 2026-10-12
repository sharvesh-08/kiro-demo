/**
 * @file Search Context for Kiro Crash Course
 * @module contexts/SearchContext
 */

import React, { createContext, useContext, useState, useMemo, useEffect } from 'react'
import { getAllCommands, searchCommands } from '../constants/cliCommands'

const SearchContext = createContext(null)

/**
 * Search Context Provider Component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {React.ReactNode} The provider component
 */
export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  // Filter commands when search query changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    setIsSearching(true)
    const results = searchCommands(searchQuery)
    setSearchResults(results)
    setIsSearching(false)
  }, [searchQuery])

  /**
   * Handle search submission
   * @param {string} query - Search query
   */
  const handleSearch = (query) => {
    if (query.trim()) {
      setSearchQuery(query)
    }
  }

  /**
   * Clear search
   */
  const clearSearch = () => {
    setSearchQuery('')
    setSearchResults([])
  }

  /**
   * Get search history
   * @returns {string[]}
   */
  const getSearchHistory = () => {
    const history = localStorage.getItem('kiro-crash-search-history')
    return history ? JSON.parse(history) : []
  }

  const value = useMemo(() => ({
    searchQuery,
    searchResults,
    isSearching,
    setSearchQuery,
    handleSearch,
    clearSearch,
    getSearchHistory
  }), [
    searchQuery,
    searchResults,
    isSearching
  ])

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

/**
 * Hook to use search context
 * @returns {Object} Search context value
 */
export function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}

export default SearchContext
