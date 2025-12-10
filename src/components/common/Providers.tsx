'use client'

import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { getRequestClient } from '@/app/getRequestClient'
import { ScriptLoader } from '@/components/common/ScriptLoader'

export function Providers({ children }: { children: ReactNode }) {
  const queryClient = getRequestClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ScriptLoader />
      {children}
    </QueryClientProvider>
  )
}
