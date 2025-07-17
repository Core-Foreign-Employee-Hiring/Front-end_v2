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
  contractType?: ContractType
  directInputContractType?: string
  jobCategories?:
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
    | 'ETC'[]
  workType?: WorkType
  directInputWorkType?: string
  workDayType?: WorkDaysType
  directInputWorkDayType?: string
  workStartTime?: string
  workEndTime?: string
  directInputWorkTime?: string
  salaryType?: SalaryType
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

export type ContractType = 'INTERN' | 'REGULAR' | 'NEWCOMER' | 'EXPERIENCED' | 'CONTRACT'
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
export type SalaryType = 'ANNUAL' | 'MONTHLY' | 'WEEKLY' | 'DAILY' | 'HOURLY' | 'ETC'
