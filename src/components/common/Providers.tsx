// app/providers.tsx
'use client'

import { ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/lib/queryClient'
import { ScriptLoader } from '@/components/common/ScriptLoader'

/**
 * 모든 클라이언트 Provider를 한 곳에서 관리
 * - React Query (데이터 페칭)
 * - 외부 스크립트 로더
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ScriptLoader />
      {children}
    </QueryClientProvider>
  )
}
