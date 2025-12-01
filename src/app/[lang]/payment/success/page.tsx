// app/payment/success/page.tsx
'use client'

import { use, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePayment } from '@/hooks/usePayment'

interface PaymentResult {
  status: 'loading' | 'success' | 'error'
  message: string
  orderId?: string
  amount?: number
  paymentKey?: string
}

export default function PaymentSuccessPage(props: { searchParams: Promise<Record<string, string | string[]>> }) {
  // searchParams를 Promise로 받음
  const searchParams = use(props.searchParams)
  const router = useRouter()
  const [result, setResult] = useState<PaymentResult>({
    status: 'loading',
    message: '결제를 처리중입니다...',
  })

  const { confirmPaymentAsync } = usePayment()

  useEffect(() => {
    const processPayment = async () => {
      try {
        const paymentKey = searchParams?.paymentKey as string
        const orderId = searchParams?.orderId as string
        const amount = searchParams?.amount as string

        if (!paymentKey || !orderId || !amount) {
          setResult({
            status: 'error',
            message: '필수 정보가 누락되었습니다',
          })
          return
        }

        const confirmResult = await confirmPaymentAsync({
          paymentKey,
          orderId,
          amount: parseInt(amount),
        })

        setResult({
          status: 'success',
          message: '결제가 완료되었습니다',
          orderId,
          amount: parseInt(amount),
          paymentKey: confirmResult.paymentKey,
        })

        setTimeout(() => {
          router.push('/checkout/complete')
        }, 3000)
      } catch (error) {
        console.error('결제 처리 오류:', error)
        setResult({
          status: 'error',
          message: error instanceof Error ? error.message : '결제 처리 중 오류가 발생했습니다',
        })
      }
    }

    if (searchParams) {
      processPayment()
    }
  }, [searchParams, confirmPaymentAsync, router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        {result.status === 'loading' && (
          <div className="text-center">
            <div className="inline-block animate-spin">
              <div className="h-12 w-12 rounded-full border-4 border-blue-300 border-t-blue-600" />
            </div>
            <p className="mt-4 text-gray-700">{result.message}</p>
          </div>
        )}

        {result.status === 'success' && (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">결제 완료</h2>
            <p className="mb-6 text-gray-600">{result.message}</p>
            <div className="mb-6 rounded-lg bg-gray-50 p-4 text-left">
              <div className="mb-2 flex justify-between">
                <span className="text-gray-600">주문번호</span>
                <span className="font-semibold text-gray-900">{result.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">결제금액</span>
                <span className="font-semibold text-gray-900">{result.amount?.toLocaleString()}원</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">곧 완료 페이지로 이동합니다...</p>
          </div>
        )}

        {result.status === 'error' && (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">결제 실패</h2>
            <p className="mb-6 text-gray-600">{result.message}</p>
            <button
              onClick={() => router.push('/payment')}
              className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-blue-700"
            >
              다시 시도
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
