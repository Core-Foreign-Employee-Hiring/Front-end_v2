import { ApiResponse, ListResponse } from '@/types/common'
import { authorizedFetch } from '@/lib/common'
import { ArchiveInquiryNotificationType } from '@/types/alarm'
import { InquiryType } from '@/types/archive'

/**
 * 내 알람
 */
export const getAlarmArchiveInquiry = async (): Promise<ApiResponse<ArchiveInquiryNotificationType[]>> => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/notification/archive-inquiries`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  return data
}

/**
 * 알람 읽음 처리
 */
export const patchAlarmArchiveInquiry = async (
  notificationId: number
): Promise<ApiResponse<ListResponse<InquiryType>>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/notification/archive-inquiries/read`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notificationIds: [notificationId] }),
    }
  )

  const data = await response.json()
  return data
}
