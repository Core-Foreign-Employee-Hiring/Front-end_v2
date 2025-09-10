import { create } from 'zustand'
import { EmployeeLoginType, EmployeeSignUpType } from '@/types/auth'
import { MyPageInfoType } from '@/types/mypage'

interface SetMyPageStoreType {
  myPageInfo?: MyPageInfoType | undefined
  isEmailRegisteredError?: undefined | boolean // 이메일 인증
  isEmailCodeVerified?: undefined | boolean // 이메일 코드 인증
  isPhoneRegisteredError?: undefined | boolean // 연락처 인증
  isPhoneVerified?: undefined | boolean // 연락처 코드 인증
}

interface MyPageStoreType {
  myPageInfo: MyPageInfoType | undefined
  isEmailRegisteredError: undefined | boolean // 이메일 인증
  isEmailCodeVerified: undefined | boolean // 이메일 코드 인증
  isPhoneRegisteredError: undefined | boolean // 연락처 인증
  isPhoneVerified: undefined | boolean // 연락처 코드 인증

  setState: (params: SetMyPageStoreType) => void
}

export const useMyPageStore = create<MyPageStoreType>((set) => ({
  myPageInfo: undefined,
  isEmailRegisteredError: undefined, // 이메일 인증
  isEmailCodeVerified: undefined, // 이메일 코드 인증
  isPhoneRegisteredError: undefined, // 연락처 인증
  isPhoneVerified: undefined,
  setState: (params: SetMyPageStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
