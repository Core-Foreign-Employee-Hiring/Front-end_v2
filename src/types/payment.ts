// types/payment.ts
export interface PaymentInfo {
  orderId: string
  orderName: string
  amount: number
  customerEmail?: string
  customerName?: string
}

export interface TossPaymentResult {
  paymentKey: string
  orderId: string
  amount: number
}

export interface PaymentApprovalRequest {
  paymentKey: string
  orderId: string
  amount: number
}
