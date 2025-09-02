// components/payment/TossPaymentWidget.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { loadPaymentWidget, PaymentWidgetInstance } from '@tosspayments/payment-widget-sdk'
import { PaymentInfo } from '@/types/payment'
import Button from '@/components/common/Button'

interface TossPaymentWidgetProps {
  paymentInfo: PaymentInfo
  onPaymentStart?: () => void
  onPaymentError?: (error: any) => void
}

export default function TossPaymentWidget({ paymentInfo, onPaymentStart, onPaymentError }: TossPaymentWidgetProps) {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null)
  const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance['renderPaymentMethods']> | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isPaymentLoading, setIsPaymentLoading] = useState(false)

  useEffect(() => {
    const initializePaymentWidget = async () => {
      try {
        const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY
        if (!clientKey) {
          throw new Error('토스 페이먼츠 클라이언트 키가 설정되지 않았습니다.')
        }

        const paymentWidget = await loadPaymentWidget(clientKey, paymentInfo.customerEmail || 'anonymous')

        paymentWidgetRef.current = paymentWidget

        paymentMethodsWidgetRef.current = paymentWidget.renderPaymentMethods(
          '#payment-methods',
          { value: paymentInfo.amount },
          { variantKey: 'DEFAULT' }
        )

        paymentWidget.renderAgreement('#agreement', { variantKey: 'AGREEMENT' })

        setIsLoading(false)
      } catch (error) {
        console.error('결제 위젯 초기화 실패:', error)
        onPaymentError?.(error)
        setIsLoading(false)
      }
    }

    initializePaymentWidget()

    return () => {
      // 클린업
      paymentMethodsWidgetRef.current = null
      paymentWidgetRef.current = null
    }
  }, [paymentInfo, onPaymentError])

  const handlePayment = async () => {
    if (!paymentWidgetRef.current) {
      alert('결제 위젯이 로드되지 않았습니다.')
      return
    }

    try {
      setIsPaymentLoading(true)
      onPaymentStart?.()

      await paymentWidgetRef.current.requestPayment({
        orderId: paymentInfo.orderId,
        orderName: paymentInfo.orderName,
        customerName: paymentInfo.customerName,
        customerEmail: paymentInfo.customerEmail,
        successUrl: `http://localhost:3000/payment/success`,
        failUrl: `http://localhost:3000/payment/fail`,
      })
    } catch (error) {
      console.error('결제 요청 실패:', error)
      onPaymentError?.(error)
    } finally {
      setIsPaymentLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p>결제 위젯을 로딩 중입니다...</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md p-4">
      <div className="mb-6 rounded-lg bg-gray-50 p-4">
        <h3 className="mb-2 text-lg font-semibold">주문 정보</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>상품명:</span>
            <span>{paymentInfo.orderName}</span>
          </div>
          <div className="flex justify-between">
            <span>결제 금액:</span>
            <span className="font-semibold">{paymentInfo.amount.toLocaleString()}원</span>
          </div>
        </div>
      </div>

      <div id="payment-methods" className="mb-4"></div>
      <div id="agreement" className="mb-6"></div>

      <Button onClick={handlePayment} disabled={isPaymentLoading} size="lg" type="active" customClassName="w-full">
        {isPaymentLoading ? '결제 처리 중...' : `${paymentInfo.amount.toLocaleString()}원 결제하기`}
      </Button>
    </div>
  )
}
