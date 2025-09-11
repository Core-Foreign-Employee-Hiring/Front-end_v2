export interface MyPageInfoType {
  name: string
  email: string
  phoneNumber: string
  zipcode: string
  address1: string
  address2: string
  birthDate: string
  gender: 'MALE' | 'FEMALE' | 'NULL' | undefined
  nationality: string
  visa: string
  education: string
  termsOfServiceAgreement: boolean
  personalInfoAgreement: boolean
  adInfoAgreementSmsMms: boolean
  adInfoAgreementEmail: boolean
}
export interface SettlementAccountType {
  accountName: string
  accountNumber: string
  bankName: string
}
