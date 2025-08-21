'use client'

import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query'
import { useState } from 'react'

export default function QueryProvider({ children, state = null }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={state}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
