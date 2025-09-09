import { authorizedFetch } from '@/lib/common'
import { ApiResponse } from '@/types/common'

/**
 * 현재 사용자 아이디 체크 API
 */
export const getVerifyMyUserId = async (userId: string): Promise<ApiResponse<boolean>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/verify-my-userid?userId=${userId}`,
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

/**
 * 아이디 변경 API
 */
export const patchModifyUserId = async (userId: string): Promise<ApiResponse<boolean>> => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/modify-userid`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: userId }),
  })

  const data = await response.json()
  return data
}

/**
 * 현재 사용자 비밀번호 체크 API
 */
export const postVerifyMyPassword = async (password: string): Promise<ApiResponse<boolean>> => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/verify-my-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password: password }),
  })

  const data = await response.json()
  return data
}
/**
 * 비밀번호 변경 API
 */
export const patchModifyPassword = async (password: string): Promise<ApiResponse<boolean>> => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/modify-password`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password: password }),
  })

  const data = await response.json()
  return data
}
