// components/PaymentButton.tsx
'use client'

import { useState } from 'react'
import { usePayment } from '@/hooks/usePayment'
import { PaymentRequest } from '@/types/payment'

interface PaymentButtonProps {
  orderId: string
  orderName: string
  amount: number
  customerEmail?: string
  customerName?: string
  onSuccess?: (orderId: string) => void
  onError?: (error: Error) => void
  disabled?: boolean
}

export function PaymentButton({
  orderId,
  orderName,
  amount,
  customerEmail,
  customerName,
  onSuccess,
  onError,
  disabled = false,
}: PaymentButtonProps) {
  const { requestPayment, isRequestingPayment } = usePayment()
  const [error, setError] = useState<string | null>(null)

  const handlePayment = () => {
    setError(null)

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    const successUrl = `${baseUrl}/payment/success`
    const failUrl = `${baseUrl}/payment/fail`

    const paymentRequest: PaymentRequest = {
      orderId,
      orderName,
      amount,
      customerEmail,
      customerName,
      successUrl,
      failUrl,
    }

    requestPayment(paymentRequest, {
      onError: (error: unknown) => {
        // unknown 타입을 Error로 처리
        const errorObj = error instanceof Error ? error : new Error(String(error))
        const errorMessage = errorObj.message || '결제 요청 실패'
        setError(errorMessage)
        onError?.(errorObj)
      },
    })
  }

  return (
    <div className="w-full">
      <button
        onClick={handlePayment}
        disabled={disabled || isRequestingPayment}
        className={`w-full rounded-lg px-4 py-3 font-semibold transition duration-200 ${
          disabled || isRequestingPayment
            ? 'cursor-not-allowed bg-gray-300 text-gray-500'
            : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
        }`}
      >
        {isRequestingPayment ? (
          <span className="flex items-center justify-center">
            <span className="mr-2 inline-block animate-spin">
              <span className="inline-block h-4 w-4 rounded-full border-2 border-white border-t-transparent" />
            </span>
            결제 처리중...
          </span>
        ) : (
          `${amount.toLocaleString()}원 결제하기`
        )}
      </button>

      {error && (
        <div className="mt-3 rounded-lg border border-red-200 bg-red-50 p-3">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </div>
  )
}
