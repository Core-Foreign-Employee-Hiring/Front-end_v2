import { create } from 'zustand'
import { EmployeeLoginType, EmployeeSignUpType, ModifyPWRequestDataType } from '@/types/auth'

interface SetAuthStoreType {
  role?: 'Employer' | 'Employee'
  loginData?: EmployeeLoginType | undefined
  //피고용인
  employeeSignUp?: EmployeeSignUpType | undefined
  isEmployeeIdVerified?: boolean | undefined //id가 유효한지 확인하는 state
  checkPassWord?: string | undefined // 비밀번호 확인
  isEmployeePasswordValid?: boolean | undefined //pw가 8~15자, 대소문자+숫자+기호를 포함하는지
  isEmployeePasswordMatch?: boolean | undefined //pw가 확인 비밀번호와 일치하는지
  isEmployeePhoneVerified?: boolean | undefined // 휴대폰 번호 인증을 했는지
  isEmployeeEmailVerified?: boolean | undefined // 이메일 인증을 했는지
  isAuthenticated?: boolean | undefined //로그인이 되어있는 상태인지
  //아이디찾기 결과값
  idResultData?:
    | {
        userId: string
        createdAt: string
      }
    | undefined
  modifyPWRequestData?: ModifyPWRequestDataType | undefined
  allOptions?: boolean
}

interface AuthStoreType {
  role: 'Employer' | 'Employee'
  loginData: EmployeeLoginType | undefined
  //피고용인
  employeeSignUp: EmployeeSignUpType | undefined
  isEmployeeIdVerified: boolean | undefined //id가 유효한지 확인하는 state
  checkPassWord: string | undefined // 비밀번호 확인
  isEmployeePasswordValid: boolean | undefined //pw가 8~15자, 대소문자+숫자+기호를 포함하는지
  isEmployeePasswordMatch: boolean | undefined //pw가 확인 비밀번호와 일치하는지
  isEmployeePhoneVerified: boolean | undefined // 휴대폰 번호 인증을 했는지
  isEmployeeEmailVerified: boolean | undefined // 이메일 인증을 했는지
  isAuthenticated: boolean | undefined //로그인이 되어있는 상태인지
  allOptions: boolean
  //고용인
  //아이디찾기 결과값
  idResultData:
    | {
        userId: string
        createdAt: string
      }
    | undefined
  modifyPWRequestData?: ModifyPWRequestDataType | undefined
  setState: (params: SetAuthStoreType) => void
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  role: 'Employee',
  loginData: undefined,
  //피고용인
  employeeSignUp: undefined,
  isEmployeeIdVerified: undefined,
  isEmployeePasswordValid: undefined,
  checkPassWord: undefined,
  isEmployeePasswordMatch: undefined,
  isEmployeePhoneVerified: undefined, // 휴대폰 번호 인증을 했는지
  isEmployeeEmailVerified: undefined, // 이메일 인증을 했는지
  isAuthenticated: undefined, //로그인이 되어있는 상태인지
  modifyPWRequestData: undefined,
  allOptions: false,
  idResultData: undefined,
  setState: (params: SetAuthStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
