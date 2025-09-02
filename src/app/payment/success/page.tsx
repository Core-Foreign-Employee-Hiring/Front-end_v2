// app/payment/success/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { approvePayment } from '@/utils/payment'

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const approvePaymentRequest = async () => {
      const paymentKey = searchParams.get('paymentKey')
      const orderId = searchParams.get('orderId')
      const amount = searchParams.get('amount')

      if (!paymentKey || !orderId || !amount) {
        setError('결제 정보가 올바르지 않습니다.')
        setIsLoading(false)
        return
      }

      try {
        const result = await approvePayment({
          paymentKey,
          orderId,
          amount: parseInt(amount),
        })

        if (result.success) {
          setIsSuccess(true)
        } else {
          setError(result.message || '결제 승인에 실패했습니다.')
        }
      } catch (error) {
        console.error('결제 승인 실패:', error)
        setError('결제 승인 중 오류가 발생했습니다.')
      } finally {
        setIsLoading(false)
      }
    }

    approvePaymentRequest()
  }, [searchParams])

  if (isLoading) {
    return (
      <main className="container mx-auto py-8 text-center">
        <h1 className="mb-4 text-2xl font-bold">결제 처리 중...</h1>
        <p>결제 승인을 처리하고 있습니다. 잠시만 기다려주세요.</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="container mx-auto py-8 text-center">
        <h1 className="mb-4 text-2xl font-bold text-red-600">결제 실패</h1>
        <p className="mb-4">{error}</p>
        <button
          onClick={() => (window.location.href = '/')}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          홈으로 돌아가기
        </button>
      </main>
    )
  }

  return (
    <main className="container mx-auto py-8 text-center">
      <h1 className="mb-4 text-2xl font-bold text-green-600">결제 성공!</h1>
      <p className="mb-4">결제가 성공적으로 완료되었습니다.</p>
      <div className="space-x-4">
        <button
          onClick={() => (window.location.href = '/')}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          홈으로 돌아가기
        </button>
        <button
          onClick={() => (window.location.href = '/orders')}
          className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          주문 내역 보기
        </button>
      </div>
    </main>
  )
}
