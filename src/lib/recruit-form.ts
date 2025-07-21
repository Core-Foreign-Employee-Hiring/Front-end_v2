import { authorizedFetch } from '@/lib/common'
import { RecruitInputDataType } from '@/types/recruit'
import { ApiResponse } from '@/types/common'

/**
 * 이미지 변경
 */
export const postS3File = async (formData: FormData) => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/file/upload`, {
    method: 'POST',
    body: formData,
  })

  const data = await response.json()
  return data
}

/**
 * 공고 등록
 */
export const postRecruit = async (data: RecruitInputDataType): Promise<ApiResponse<void>> => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/recruit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return await response.json()
}
