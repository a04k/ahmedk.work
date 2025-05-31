'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <p className="body-primary">
        Oh no, something went wrong... maybe you should reload the page
      </p>
    </div>
  )
}
