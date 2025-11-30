// 토스페이먼츠 결제 설정
export const TOSS_PAYMENTS_CONFIG = {
  clientKey: process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || '',
  // 실제 운영 환경에서는 환경변수로 관리
  // .env.local에 NEXT_PUBLIC_TOSS_CLIENT_KEY=your_client_key 추가
}

// lib/utils.ts

/**
 * 고유한 주문 ID 생성
 * 형식: timestamp + 랜덤 문자열
 * 예: 1699999999999_a1b2c3d4
 *
 * 실무 팁:
 * - 데이터베이스에서 중복 체크 필수
 * - UUID를 사용할 수도 있지만, 숫자+문자 혼합이 더 안전
 */
export function generateOrderId(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 10)
  return `${timestamp}_${random}`
}

/**
 * 결제 금액 포맷팅
 * 예: 10000 -> "10,000원"
 */
export function formatPaymentAmount(amount: number): string {
  return `${amount.toLocaleString('ko-KR')}원`
}

/**
 * 결제 상태 한글 변환
 */
export function getPaymentStatusLabel(status: string): string {
  const statusMap: Record<string, string> = {
    READY: '대기중',
    IN_PROGRESS: '진행중',
    SUCCESS: '성공',
    FAILURE: '실패',
    UNKNOWN: '확인불가',
    DONE: '완료',
    CANCELED: '취소됨',
  }
  return statusMap[status] || status
}

/**
 * 결제 수단 한글 변환
 */
export function getPaymentMethodLabel(method: string): string {
  const methodMap: Record<string, string> = {
    CARD: '신용카드',
    VIRTUAL_ACCOUNT: '계좌이체',
    TRANSFER: '계좌이체',
    EASY_PAY: '간편결제',
    MOBILE_PHONE: '휴대폰결제',
    BANK_TRANSFER: '계좌이체',
    PAYPAL: '페이팔',
    ALIPAY: '알리페이',
  }
  return methodMap[method] || method
}

/**
 * 에러 메시지 처리
 * 토스페이먼츠 에러 코드를 한글로 변환
 */
export function getErrorMessage(errorCode: string): string {
  const errorMap: Record<string, string> = {
    INVALID_CARD_NUMBER: '유효하지 않은 카드번호입니다.',
    INVALID_EXPIRATION_DATE: '유효하지 않은 유효기간입니다.',
    INVALID_CVC: '유효하지 않은 CVC입니다.',
    CARD_DECLINED: '카드사에서 거절했습니다.',
    NETWORK_ERROR: '네트워크 오류가 발생했습니다.',
    AUTHENTICATION_FAILED: '인증에 실패했습니다.',
    UNAUTHORIZED: '미승인 요청입니다.',
    INVALID_REQUEST: '유효하지 않은 요청입니다.',
    DUPLICATE_ORDER_ID: '이미 사용 중인 주문번호입니다.',
  }
  return errorMap[errorCode] || '알 수 없는 오류가 발생했습니다.'
}

/**
 * 주문 금액 검증
 * 토스페이먼츠는 최소 100원 이상만 결제 가능
 */
export function isValidPaymentAmount(amount: number): { valid: boolean; message?: string } {
  if (amount < 100) {
    return { valid: false, message: '최소 결제 금액은 100원입니다.' }
  }
  if (amount > 100000000) {
    // 1억 이상은 불가
    return { valid: false, message: '최대 결제 금액은 1억원입니다.' }
  }
  if (!Number.isInteger(amount)) {
    return { valid: false, message: '정수만 가능합니다.' }
  }
  return { valid: true }
}
