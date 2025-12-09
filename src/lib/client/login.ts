import { ApiCallResult } from '@/types/common'
import { FindPWRequestDataType, ModifyPWRequestDataType } from '@/types/auth'

/**
 * 비밀번호 재설정 - 코드 발송 API
 * @param requestData userId, name, email
 */
export const postClientMemberPasswordResetSendCode = async (
  requestData: FindPWRequestDataType
): Promise<ApiCallResult<ApiCallResult<void>>> => {
  try {
    const response = await fetch('/api/member/password-reset/send-code', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('API 성공 응답:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 비밀번호 재설정 - 코드 검증 API
 * @param code string
 */
export const postClientMemberPasswordResetVerifyCode = async (
  code: string
): Promise<ApiCallResult<ApiCallResult<void>>> => {
  try {
    const response = await fetch('/api/member/password-reset/verify-code', {
      method: 'POST',
      body: JSON.stringify({ code: code }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('API 성공 응답:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 아이디 재설정 - 코드 발송 API
 */
export const postClientMemberFindIdSendCode = async (requestData: {
  name: string
  phoneNumber: string
}): Promise<ApiCallResult<ApiCallResult<void>>> => {
  try {
    const response = await fetch('/api/member/find-id/send-code', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('API 성공 응답:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 아이디 재설정 - 코드 인증 API
 * @param code string
 */
export const postClientMemberFindIdVerifyCode = async (
  code: string
): Promise<
  ApiCallResult<
    ApiCallResult<{
      userId: string
      createdAt: string
    }>
  >
> => {
  try {
    const response = await fetch('/api/member/find-id/verify-code', {
      method: 'POST',
      body: JSON.stringify({ code: code }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('API 성공 응답:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * 비밀번호 재설정 (수정)
 */
export const postClientMemberPasswordResetModify = async (
  modifyData: ModifyPWRequestDataType
): Promise<ApiCallResult<ApiCallResult<void>>> => {
  try {
    const response = await fetch('/api/member/password-reset/modify', {
      method: 'PATCH',
      body: JSON.stringify(modifyData),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('API 응답 에러:', error)
      return { success: false, error: error.error || `HTTP ${response.status}` }
    }

    const data = await response.json()
    console.log('API 성공 응답:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Fetch 에러:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
