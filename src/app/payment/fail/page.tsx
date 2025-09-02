// app/payment/fail/page.tsx
'use client'

import { useSearchParams } from 'next/navigation'

export default function PaymentFailPage() {
  const searchParams = useSearchParams()
  const errorCode = searchParams.get('code')
  const errorMessage = searchParams.get('message')

  return (
    <main className="container mx-auto py-8 text-center">
      <h1 className="mb-4 text-2xl font-bold text-red-600">결제 실패</h1>
      <div className="mb-6 rounded border border-red-400 bg-red-100 p-4">
        <p className="font-semibold">오류 코드: {errorCode}</p>
        <p>오류 메시지: {errorMessage || '알 수 없는 오류가 발생했습니다.'}</p>
      </div>
      <div className="space-x-4">
        <button
          onClick={() => window.history.back()}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          다시 시도
        </button>
        <button
          onClick={() => (window.location.href = '/')}
          className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          홈으로 돌아가기
        </button>
      </div>
    </main>
  )
}
