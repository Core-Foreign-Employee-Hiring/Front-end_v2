// hooks/usePayment.ts
'use client'

import { PaymentRequest, PaymentResponse, PaymentConfirmResponse } from '@/types/payment'
import { TOSS_PAYMENTS_CONFIG } from '@/utils/payment'
import { useMutation } from 'react-query'

/**
 * 토스페이먼츠 결제 요청 처리 훅
 *
 * 실무 사용 예시:
 * const { requestPayment, isPending } = usePayment();
 *
 * const handleClick = () => {
 *   requestPayment({
 *     orderId: 'order_123',
 *     orderName: '상품명',
 *     amount: 10000,
 *     successUrl: 'https://example.com/success',
 *     failUrl: 'https://example.com/fail'
 *   });
 * };
 */
export function usePayment() {
  // 결제 요청 (클라이언트 사이드 - 토스페이먼츠 위젯 호출)
  const requestPaymentMutation = useMutation({
    mutationFn: async (paymentRequest: PaymentRequest) => {
      return new Promise<PaymentResponse>((resolve, reject) => {
        // Toss Payments Client SDK 로드 필요
        if (!window.TossPayments) {
          reject(new Error('토스페이먼츠 스크립트를 로드해주세요'))
          return
        }

        const tossPayments = window.TossPayments(TOSS_PAYMENTS_CONFIG.clientKey)

        tossPayments.requestPayment({
          method: 'CARD', // 'CARD', 'VIRTUAL_ACCOUNT', 'TRANSFER', 'EASY_PAY'
          amount: paymentRequest.amount,
          orderId: paymentRequest.orderId,
          orderName: paymentRequest.orderName,
          customerEmail: paymentRequest.customerEmail,
          customerName: paymentRequest.customerName,
          successUrl: paymentRequest.successUrl,
          failUrl: paymentRequest.failUrl,
          // 카드 결제의 경우 추가 옵션
          card: {
            useCardPoint: true, // 카드 포인트 사용 여부
            flowMode: 'DEFAULT', // 'DEFAULT' 또는 'DIRECT'
          },
        })
      })
    },
    onError: (error) => {
      console.error('결제 요청 오류:', error)
    },
  })

  // 결제 승인 (서버 사이드 - 결제 확정)
  const confirmPaymentMutation = useMutation<
    PaymentConfirmResponse,
    Error,
    {
      paymentKey: string
      orderId: string
      amount: number
    }
  >({
    mutationFn: async ({
      paymentKey,
      orderId,
      amount,
    }: {
      paymentKey: string
      orderId: string
      amount: number
    }): Promise<PaymentConfirmResponse> => {
      const response = await fetch('/api/payment/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentKey,
          orderId,
          amount,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || '결제 승인 실패')
      }

      return response.json()
    },
    onSuccess: (data) => {
      console.log('결제 승인 성공:', data)
    },
    onError: (error) => {
      console.error('결제 승인 오류:', error)
    },
  })

  // 결제 취소
  const cancelPaymentMutation = useMutation<
    any,
    Error,
    {
      paymentKey: string
      cancelReason?: string
    }
  >({
    mutationFn: async ({ paymentKey, cancelReason }: { paymentKey: string; cancelReason?: string }) => {
      const response = await fetch('/api/payment/confirm', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentKey,
          cancelReason,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || '결제 취소 실패')
      }

      return response.json()
    },
    onSuccess: (data) => {
      console.log('결제 취소 성공:', data)
    },
    onError: (error) => {
      console.error('결제 취소 오류:', error)
    },
  })

  return {
    requestPayment: requestPaymentMutation.mutate,
    requestPaymentAsync: requestPaymentMutation.mutateAsync,
    isRequestingPayment: requestPaymentMutation.isLoading,
    requestPaymentError: requestPaymentMutation.error,

    confirmPayment: confirmPaymentMutation.mutate,
    confirmPaymentAsync: confirmPaymentMutation.mutateAsync,
    isConfirmingPayment: confirmPaymentMutation.isLoading,
    confirmPaymentError: confirmPaymentMutation.error,

    cancelPayment: cancelPaymentMutation.mutate,
    cancelPaymentAsync: cancelPaymentMutation.mutateAsync,
    isCancelingPayment: cancelPaymentMutation.isLoading,
    cancelPaymentError: cancelPaymentMutation.error,
  }
}

// 전역 타입 선언 (Toss Payments SDK)
declare global {
  interface Window {
    TossPayments: (clientKey: string) => {
      requestPayment: (options: any) => Promise<PaymentResponse>
    }
  }
}
