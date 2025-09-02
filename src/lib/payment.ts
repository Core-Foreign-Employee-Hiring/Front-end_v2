// app/api/payment/approve/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { PaymentApprovalRequest } from '@/types/payment'
import { authorizedFetch } from '@/lib/common'
import { ApiResponse } from '@/types/common'

export async function postTossPayment(request: NextRequest) {
  try {
    const { paymentKey, orderId, amount }: PaymentApprovalRequest = await request.json()

    // 토스 페이먼츠 API로 결제 승인 요청
    const response = await fetch('https://api.tosspayments.com/v1/payments/confirm', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.TOSS_SECRET_KEY + ':').toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentKey,
        orderId,
        amount,
      }),
    })

    const result = await response.json()

    if (response.ok) {
      // 결제 성공 - 데이터베이스에 주문 정보 저장
      // await saveOrderToDatabase(result)

      return NextResponse.json({
        success: true,
        data: result,
      })
    } else {
      console.error('결제 승인 실패:', result)
      return NextResponse.json(
        {
          success: false,
          message: result.message || '결제 승인에 실패했습니다.',
        },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('결제 승인 API 오류:', error)
    return NextResponse.json(
      {
        success: false,
        message: '서버 오류가 발생했습니다.',
      },
      { status: 500 }
    )
  }
}

/**
 * 결제없이 아카이브 구매하기 api
 */
export const postPaymentTestConfirm = async (
  archiveId: string | string[] | undefined
): Promise<ApiResponse<boolean>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/payment/test/confirm?archiveId=${archiveId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return data
}
