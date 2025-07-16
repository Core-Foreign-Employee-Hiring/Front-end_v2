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
  visa?: string
  termsOfServiceAgreement?: boolean
  personalInfoAgreement?: boolean
  adInfoAgreementSmsMms?: boolean
  adInfoAgreementEmail?: boolean
  over15?: boolean
}
