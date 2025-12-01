// app/checkout/page.tsx
'use client'

import { useState } from 'react'
import { PaymentButton } from '@/components/payment/Paymentbutton'
import { generateOrderId } from '@/utils/payment'

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
}

export default function CheckoutPage() {
  const [items] = useState<OrderItem[]>([{ id: '1', name: '프리미엄 구독료', price: 29000, quantity: 1 }])

  // 주문 정보 계산
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingFee = 0 // 디지털 상품이므로 배송료 0
  const totalAmount = subtotal + shippingFee

  // 고유한 주문 ID 생성 (타임스탬프 + 랜덤)
  const orderId = `order_${generateOrderId()}`

  // 주문명 구성
  const orderName = items.length === 1 ? items[0].name : `${items[0].name} 외 ${items.length - 1}개`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-2xl px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">주문 결제</h1>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="mx-auto max-w-2xl px-4 py-8">
        {/* 주문 상품 섹션 */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">주문 상품</h2>

          {/* 상품 리스트 */}
          <div className="mb-6 space-y-4 border-b border-gray-200 pb-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">수량: {item.quantity}개</p>
                </div>
                <p className="font-semibold text-gray-900">{(item.price * item.quantity).toLocaleString()}원</p>
              </div>
            ))}
          </div>

          {/* 가격 요약 */}
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>상품가</span>
              <span>{subtotal.toLocaleString()}원</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>배송료</span>
              <span>{shippingFee.toLocaleString()}원</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-4 text-lg font-bold text-gray-900">
              <span>합계</span>
              <span className="text-blue-600">{totalAmount.toLocaleString()}원</span>
            </div>
          </div>
        </div>

        {/* 고객 정보 섹션 */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">고객 정보</h2>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">이름</label>
              <input
                type="text"
                placeholder="홍길동"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">이메일</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* 약관 동의 */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
          <div className="space-y-3">
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="h-4 w-4 rounded text-blue-600" />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                결제 이용약관에 동의합니다
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="privacy" className="h-4 w-4 rounded text-blue-600" />
              <label htmlFor="privacy" className="ml-3 text-sm text-gray-700">
                개인정보 수집에 동의합니다
              </label>
            </div>
          </div>
        </div>

        {/* 결제 버튼 */}
        <PaymentButton
          orderId={orderId}
          orderName={orderName}
          amount={totalAmount}
          customerEmail="user@example.com"
          customerName="홍길동"
          onSuccess={(orderId) => {
            console.log('결제 성공:', orderId)
            // 여기서 추가 로직 처리 (예: 주문 저장, 이메일 발송 등)
          }}
          onError={(error) => {
            console.error('결제 오류:', error)
          }}
        />

        {/* 주문번호 안내 (개발용) */}
        <div className="mt-6 rounded-lg bg-gray-100 p-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">주문번호:</span> {orderId}
          </p>
        </div>
      </main>
    </div>
  )
}
