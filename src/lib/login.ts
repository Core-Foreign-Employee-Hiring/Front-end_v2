import { ApiResponse } from '@/types/common'
import { EmployeeLoginType, EmployeeSignUpType, ResponseLoginType } from '@/types/auth'

/**
 * 피고용인 회원가입
 */
export const postMemberEmployeeRegister = async (data: EmployeeSignUpType): Promise<ApiResponse<ResponseLoginType>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return await response.json()
}

/**
 * 피고용인 로그인
 */
export const postMemberLogin = async (data: EmployeeLoginType): Promise<ApiResponse<ResponseLoginType>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
    body: JSON.stringify(data),
  })

  return await response.json()
}

/**
 * 사용자 ID 중복 체크 함수
 */
export const getMemberVerifyUserId = async (userId: string): Promise<ApiResponse<void>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/verify-userid?userId=${userId}`, {
    method: 'GET',
  })

  const data = await response.json()
  return data
}

/**
 * SNS 인증코드 발송
 */
export const postMemberVerifyPhone = async (phoneNumber: string): Promise<ApiResponse<void>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/verify-phone`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phoneNumber }),
  })

  return await response.json()
}

/**
 * email 인증코드 발송
 */
export const postMemberVerifyEmail = async (email: string): Promise<ApiResponse<void>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/verify-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  return await response.json()
}

/**
 * SNS 코드 인증
 */
export const postMemberVerificationPhoneCode = async (code: string): Promise<ApiResponse<void>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/verification-phone-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code: code }),
  })

  const data = await response.json()
  return data
}

/**
 * email 코드 인증
 */
export const postMemberVerificationEmail = async (code: string): Promise<ApiResponse<void>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/verification-email-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code: code }),
  })

  const data = await response.json()
  return data
}
