/**
 * @file Main application component
 * @module App
 */

import React from 'react'

/**
 * Main application component
 * @returns {React.ReactNode} The rendered App component
 */
function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-primary text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Kiro Crash Course</h1>
      </header>
      <main className="container mx-auto px-6 py-8">
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to the Kiro Crash Course
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            An interactive educational frontend introducing Kiro's agentic
            development ecosystem.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
