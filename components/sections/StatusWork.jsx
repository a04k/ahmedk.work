'use client'

import { useState } from 'react'

const Status = [
  {
    Available: {
      name: 'Open To Work',
      color: 'lime',
    },
    NotAvailable: {
      name: 'Not currently available for new projects',
      color: 'red',
    },
  },
]

export function StatusWork({ isAvailable = true, className }) {
  const [status, setStatus] = useState(
    isAvailable ? Status[0].Available : Status[0].NotAvailable
  )
  const bgColorClass =
    status === Status[0].Available ? 'bg-lime-400' : 'bg-red-600'
  return (
    <p className={className}>
      <span className="inline-flex items-center px-3 py-2 text-sm font-lightrounded-xl pointer-events-auto body-primary box-gen rounded-2xl font-fustat">
        <span className="mr-1.5 flex h-3 w-3 items-center ">
          <span
            className={`absolute inline-flex w-2 h-2 rounded-full opacity-75 animate-ping ${bgColorClass}`}
          ></span>
          <span
            className={`relative inline-flex w-2 h-2 rounded-full ${bgColorClass}`}
          ></span>
        </span>
        {status.name}
      </span>
    </p>
  )
}
