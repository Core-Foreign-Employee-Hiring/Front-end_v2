// app/api/payment/confirm/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { PaymentConfirmResponse } from '@/types/payment'

/**
 * 토스페이먼츠 결제 승인 API
 * 클라이언트에서 받은 paymentKey로 결제를 승인합니다.
 *
 * 실무 팁:
 * - 반드시 서버에서만 호출 (민감한 정보 보호)
 * - 결제 금액 검증 필수 (클라이언트 값 신뢰 금지)
 * - 중복 결제 방지를 위해 orderId로 조회 후 처리
 */
export async function POST(request: NextRequest) {
  try {
    const { paymentKey, orderId, amount } = await request.json()

    // 1. 입력 검증
    if (!paymentKey || !orderId || !amount) {
      return NextResponse.json({ error: '필수 정보가 없습니다' }, { status: 400 })
    }

    // 2. 데이터베이스에서 주문 정보 조회 (실제 구현에서 필요)
    // const order = await db.order.findUnique({ where: { orderId } });
    // if (!order) return NextResponse.json({ error: '주문을 찾을 수 없습니다' }, { status: 404 });
    // if (order.amount !== amount) return NextResponse.json({ error: '결제 금액이 일치하지 않습니다' }, { status: 400 });

    // 3. 토스페이먼츠 API 호출
    const response = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${process.env.TOSS_SECRET_KEY}:`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentKey,
        orderId,
        amount,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('토스페이먼츠 결제 승인 실패:', errorData)
      return NextResponse.json({ error: errorData.message || '결제 승인 실패' }, { status: response.status })
    }

    const paymentData: PaymentConfirmResponse = await response.json()

    return NextResponse.json(paymentData, { status: 200 })
  } catch (error) {
    console.error('결제 처리 중 오류:', error)
    return NextResponse.json({ error: '결제 처리 중 오류가 발생했습니다' }, { status: 500 })
  }
}

/**
 * 토스페이먼츠 결제 취소 API
 * 승인된 결제를 취소합니다.
 */
export async function DELETE(request: NextRequest) {
  try {
    const { paymentKey, cancelReason } = await request.json()

    if (!paymentKey) {
      return NextResponse.json({ error: '결제 키가 필요합니다' }, { status: 400 })
    }

    const response = await fetch(`https://api.tosspayments.com/v1/payments/${paymentKey}/cancel`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${process.env.TOSS_SECRET_KEY}:`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cancelReason: cancelReason || '고객 요청',
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('토스페이먼츠 취소 실패:', errorData)
      return NextResponse.json({ error: errorData.message || '결제 취소 실패' }, { status: response.status })
    }

    const cancelData = await response.json()

    // 데이터베이스 업데이트 (실제 구현에서 필요)
    // await db.payment.update({
    //   where: { paymentKey },
    //   data: { status: 'CANCELLED', canceledAt: new Date() },
    // });

    return NextResponse.json(cancelData, { status: 200 })
  } catch (error) {
    console.error('결제 취소 중 오류:', error)
    return NextResponse.json({ error: '결제 취소 중 오류가 발생했습니다' }, { status: 500 })
  }
}
