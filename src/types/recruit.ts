export interface RecruitResponseContentType {
  recruitId: number
  companyImageUrl: string
  companyName: string
  recruitEndDate: string
  contractType: ContractEnumType
  jobCategories: JobCategoryEnumType[]
  salaryType: SalaryEnumType
  salary: number
}
export interface RecruitInputDataType {
  title?: string
  companyName?: string
  companyImageUrl?: string
  zipcode?: string
  address1?: string
  address2?: string
  companyType?: CompanyType
  representativeName?: string
  establishedDate?: string
  businessType?: string
  isAlwaysRecruiting?: true
  recruitStartDate?: string
  recruitEndDate?: string
  contractType?: ContractKorType
  directInputContractType?: string
  jobCategories?: JobCategoryEnumType[]
  workType?: WorkType
  directInputWorkType?: string
  workDayType?: WorkDaysType
  directInputWorkDayType?: string
  workStartTime?: string
  workEndTime?: string
  directInputWorkTime?: string
  salaryType?: SalaryEnumType
  salary?: number
  directInputSalaryType?: string
  posterImageUrl?: string
  mainTasks?: string
  qualifications?: string
  preferences?: string
  others?: string
  applicationMethod?: 'WEBSITE' | 'PHONE_SMS' | 'EMAIL'
  directInputApplicationMethod?: string
  recruitPublishStatus?: 'DRAFT' | 'PUBLISHED' //임시저장, 최종등록
}

export type CompanyType =
  | 'LARGE_CORPORATION'
  | 'MIDSIZE_COMPANY'
  | 'SMALL_MEDIUM_ENTERPRISE'
  | 'MICRO_BUSINESS'
  | 'SOLE_PROPRIETOR'
  | 'CORPORATION'
  | 'SOCIAL_ENTERPRISE'
  | 'COOPERATIVE'

export type ContractEnumType = 'INTERN' | 'REGULAR' | 'NEWCOMER' | 'EXPERIENCED' | 'CONTRACT'
export type ContractKorType = '인턴' | '정규직' | '신입' | '경력' | '계약직'
export type WorkType = 'ONSITE' | 'HYBRID' | 'REMOTE' | 'ETC'
export type WorkDaysType =
  | 'WEEKDAYS'
  | 'WEEKENDS'
  | 'FULL_WEEK'
  | 'SIX_DAYS'
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY'
  | 'ETC'
export type SalaryEnumType = 'ANNUAL' | 'MONTHLY' | 'WEEKLY' | 'DAILY' | 'HOURLY' | 'ETC'
export type SalaryKorType = '연봉' | '월급' | '주급' | '일급' | '시급' | '기타'

export type JobCategoryKorType =
  | '디자인'
  | '영업/CS'
  | '생산/제조'
  | '서비스'
  | 'IT'
  | '건설'
  | '경영/사무'
  | '엔터테인먼트'
  | '마케팅/광고'
  | '번역'
  | '교육'
  | 'R&D'
  | '무역/물류'
  | '기타'
export type JobCategoryEnumType =
  | 'DESIGN'
  | 'PRODUCTION_MANUFACTURING'
  | 'IT'
  | 'MANAGEMENT_OFFICE'
  | 'MARKETING_ADVERTISING'
  | 'EDUCATION'
  | 'TRADE_LOGISTICS'
  | 'SALES_CS'
  | 'SERVICE'
  | 'CONSTRUCTION'
  | 'ENTERTAINMENT'
  | 'TRANSLATION'
  | 'R_AND_D'
  | 'ETC'
