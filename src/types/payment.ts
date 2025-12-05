// 결제 상태 타입
export type PaymentStatus = 'READY' | 'IN_PROGRESS' | 'SUCCESS' | 'FAILURE' | 'UNKNOWN'

// 결제 요청 데이터
export interface PaymentRequest {
  orderId: string // 고유한 주문 ID (timestamp + random)
  orderName: string // 주문명 (상품 이름)
  amount: number // 결제 금액 (숫자)
  customerEmail?: string
  customerName?: string
  successUrl: string // 성공 후 리다이렉트 URL
  failUrl: string // 실패 후 리다이렉트 URL
}

// 결제 응답 데이터
export interface PaymentResponse {
  paymentKey: string
  orderId: string
  amount: number
}

// 결제 확인 응답
export interface PaymentConfirmResponse {
  version: string
  paymentKey: string
  type: string
  orderId: string
  orderName: string
  mId: string
  currency: string
  method: string
  totalAmount: number
  balanceAmount: number
  status: string
  requestedAt: string
  approvedAt: string
  useEscrow: boolean
  cultureExpense: boolean
  card?: {
    issuerCode: string
    acquirerCode: string
    number: string
    installmentPlanMonths: number
    isInterestFree: boolean
    interestPayer: string
    approveNo: string
    useCardPoint: boolean
    cardType: string
    ownerType: string
    acquireStatus: string
    receiptUrl: string
  }
  virtualAccount?: {
    accountNumber: string
    bankCode: string
    customerName: string
    dueDate: string
    refundStatus: string
    expired: boolean
    settlementStatus: string
    refundReceiveAccount?: {
      bankCode: string
      accountNumber: string
      holderName: string
    }
  }
  transfer?: {
    bankCode: string
    status: string
  }
  receipt?: {
    url: string
  }
  checkout?: {
    url: string
  }
  easyPay?: {
    provider: string
    amount: number
    discountAmount: number
  }
  discount?: {
    amount: number
  }
  cancels?: Array<{
    cancelAmount: number
    canceledAt: string
    transactionKey: string
    receiptUrl: string
    cancelReason: string
    taxExemptionAmount: number
  }>
  secret: string
  acquireStatus: string
  isPartialCancelable: boolean
  taxExemptionAmount: number
}
