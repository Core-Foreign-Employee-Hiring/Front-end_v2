import { JobRoleType } from '@/types/recruit'

export interface EmployeeSignUpType {
  userId?: string
  email?: string
  password?: string
  name?: string
  phoneNumber?: string
  zipcode?: string
  address1?: string
  address2?: string
  birthDate?: string
  gender?: 'MALE' | 'FEMALE' | 'NULL'
  nationality?: string
  education?: string
  jobRoles?: JobRoleType[]
  visa?: string
  termsOfServiceAgreement?: boolean
  personalInfoAgreement?: boolean
  adInfoAgreementSmsMms?: boolean
  adInfoAgreementEmail?: boolean
  over15?: boolean
}

export interface EmployeeLoginType {
  userId?: string
  password?: string
}

export interface ResponseLoginType {
  name: string
  userId: string
  accessToken: string
  refreshToken: string
  role: 'EMPLOYER' | 'EMPLOYEE'
}

export interface FindPWRequestDataType {
  userId: string
  name: string
  email: string
}

//비밀번호 변경 데이터 타입
export interface ModifyPWRequestDataType {
  code?: string
  newPassword?: string
}
