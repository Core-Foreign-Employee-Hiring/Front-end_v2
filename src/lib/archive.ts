import { authorizedFetch } from '@/lib/common'
import { ApiResponse, ListResponse } from '@/types/common'
import { PassArchiveCardDataType } from '@/types/archive'

/**
 * 합격 아카이브 등록
 */
export const postArchiveData = async (formData: FormData) => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pass-archives`, {
    method: 'POST',
    body: formData,
  })

  const data = await response.json()
  return data
}

/**
 * 합격 아카이브 조회
 */
export const getArchiveData = async (
  keyword: string,
  page: number,
  size: number
): Promise<ApiResponse<ListResponse<PassArchiveCardDataType>>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pass-archives?keyword=${keyword}&page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return data
}
