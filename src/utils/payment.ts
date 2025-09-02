// utils/payment.ts
export const generateOrderId = (): string => {
  const timestamp = Date.now()
  const randomNum = Math.floor(Math.random() * 1000)
  return `ORDER_${timestamp}_${randomNum}`
}

// lib/payment.ts
import { PaymentApprovalRequest } from '@/types/payment'

export const approvePayment = async (data: PaymentApprovalRequest) => {
  const response = await fetch('/api/payment/approve', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return await response.json()
}
