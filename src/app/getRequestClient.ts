import { cache } from 'react'
import { QueryClient } from '@tanstack/react-query'

export const getRequestClient = cache(() => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 30,
      },
    },
  })
})
