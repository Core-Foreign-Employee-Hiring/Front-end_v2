import { authorizedFetch } from '@/lib/common'
import { ApiResponse } from '@/types/common'
import { MyPageInfoType, SettlementAccountType } from '@/types/mypage'

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

/**
 * 마이페이지 정보 불러오기
 */
export const getMyProfileInfo = async (): Promise<ApiResponse<MyPageInfoType>> => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/my-profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  return data
}

/**
 * 마이페이지 회원정보 수정
 */
export const patchModifyProfile = async (profileData: MyPageInfoType | undefined): Promise<ApiResponse<boolean>> => {
  if (!profileData) {
    throw new Error('프로필 데이터가 없습니다.')
  }

  const requestBody = {
    name: profileData.name,
    email: profileData.email,
    phoneNumber: profileData.phoneNumber,
    zipcode: profileData.zipcode,
    address1: profileData.address1,
    address2: profileData.address2,
    birthDate: profileData.birthDate,
    gender: profileData.gender,
    nationality: profileData.nationality,
    visa: profileData.visa,
    education: profileData.education,
    termsOfServiceAgreement: profileData.termsOfServiceAgreement,
    personalInfoAgreement: profileData.personalInfoAgreement,
    adInfoAgreementSmsMms: profileData.adInfoAgreementSmsMms,
    adInfoAgreementEmail: profileData.adInfoAgreementEmail,
  }

  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/modify-profile`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })

  const data = await response.json()
  return data
}

/**
 * 계좌번호 조회
 */
export const getSettlementAccount = async (): Promise<ApiResponse<SettlementAccountType>> => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/settlement/account`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  return data
}
