import {
  CompanyType,
  ContractEnumType,
  ContractKorType,
  JobCategoryEnumType,
  JobCategoryKorType,
  JobCategoryType,
  SalaryEnumType,
  SalaryKorType,
  WorkDaysType,
  WorkType,
} from '@/types/recruit'

export const jobCategoryList: JobCategoryKorType[] = [
  '디자인',
  '영업/CS',
  '생산/제조',
  '서비스',
  'IT',
  '건설',
  '경영/사무',
  '엔터테인먼트',
  '마케팅/광고',
  '번역',
  '교육',
  'R&D',
  '무역/물류',
  '기타',
]
export const contractTypeList: ContractKorType[] = ['인턴', '정규직', '신입', '경력', '계약직']

export const convertKorToEnumJobCategory = (category: JobCategoryKorType): JobCategoryEnumType => {
  switch (category) {
    case '디자인':
      return 'DESIGN'
    case '영업/CS':
      return 'SALES_CS'
    case '생산/제조':
      return 'PRODUCTION_MANUFACTURING'
    case '서비스':
      return 'SERVICE'
    case 'IT':
      return 'IT'
    case '건설':
      return 'CONSTRUCTION'
    case '경영/사무':
      return 'MANAGEMENT_OFFICE'
    case '엔터테인먼트':
      return 'ENTERTAINMENT'
    case '마케팅/광고':
      return 'MARKETING_ADVERTISING'
    case '번역':
      return 'TRANSLATION'
    case '교육':
      return 'EDUCATION'
    case 'R&D':
      return 'R_AND_D'
    case '무역/물류':
      return 'TRADE_LOGISTICS'
    case '기타':
      return 'ETC'
  }
}

export const convertEnumToKorJobCategory = (category: JobCategoryType): JobCategoryKorType => {
  switch (category) {
    case 'DESIGN':
      return '디자인'
    case 'SALES_CS':
      return '영업/CS'
    case 'PRODUCTION_MANUFACTURING':
      return '생산/제조'
    case 'SERVICE':
      return '서비스'
    case 'IT':
      return 'IT'
    case 'CONSTRUCTION':
      return '건설'
    case 'MANAGEMENT_OFFICE':
      return '경영/사무'
    case 'ENTERTAINMENT':
      return '엔터테인먼트'
    case 'MARKETING_ADVERTISING':
      return '마케팅/광고'
    case 'TRANSLATION':
      return '번역'
    case 'EDUCATION':
      return '교육'
    case 'R_AND_D':
      return 'R&D'
    case 'TRADE_LOGISTICS':
      return '무역/물류'
    case 'ETC':
      return '기타'
  }
}

export const convertKorToEnumContractType = (category: ContractKorType): ContractEnumType => {
  switch (category) {
    case '인턴':
      return 'INTERN'
    case '경력':
      return 'EXPERIENCED'
    case '계약직':
      return 'CONTRACT'
    case '신입':
      return 'NEWCOMER'
    case '정규직':
      return 'REGULAR'
  }
}

export const convertEnumToKorContractType = (category: ContractEnumType): ContractKorType => {
  switch (category) {
    case 'INTERN':
      return '인턴'
    case 'EXPERIENCED':
      return '경력'
    case 'CONTRACT':
      return '계약직'
    case 'NEWCOMER':
      return '신입'
    case 'REGULAR':
      return '정규직'
  }
}

export const convertEnumToKorContractTypeLabel = (category: ContractEnumType): string => {
  switch (category) {
    case 'INTERN':
      return 'filter.contractTypeFilter.content.INTERN'
    case 'EXPERIENCED':
      return 'filter.contractTypeFilter.content.EXPERIENCED'
    case 'CONTRACT':
      return 'filter.contractTypeFilter.content.CONTRACT'
    case 'NEWCOMER':
      return 'filter.contractTypeFilter.content.NEWCOMER'
    case 'REGULAR':
      return 'filter.contractTypeFilter.content.REGULAR'
  }
}

export const convertEnumToKorSalaryType = (category: SalaryEnumType): SalaryKorType => {
  switch (category) {
    case 'ANNUAL':
      return '연봉'
    case 'DAILY':
      return '일급'
    case 'WEEKLY':
      return '주급'
    case 'HOURLY':
      return '시급'
    case 'MONTHLY':
      return '월급'
    default:
      return '기타'
  }
}

export const convertEnumToKorSalaryTypeLabel = (category: SalaryEnumType): string => {
  switch (category) {
    case 'ANNUAL':
      return 'recruitDetail.recruitInfo.salaryType.ANNUAL'
    case 'DAILY':
      return 'recruitDetail.recruitInfo.salaryType.DAILY'
    case 'WEEKLY':
      return 'recruitDetail.recruitInfo.salaryType.WEEKLY'
    case 'HOURLY':
      return 'recruitDetail.recruitInfo.salaryType.HOURLY'
    case 'MONTHLY':
      return 'recruitDetail.recruitInfo.salaryType.MONTHLY'
    default:
      return 'recruitDetail.recruitInfo.salaryType.ETC'
  }
}

export const convertKorToEnumSalaryType = (category: SalaryKorType): SalaryEnumType => {
  switch (category) {
    case '연봉':
      return 'ANNUAL'
    case '일급':
      return 'DAILY'
    case '주급':
      return 'WEEKLY'
    case '시급':
      return 'HOURLY'
    case '월급':
      return 'MONTHLY'
    default:
      return 'ETC'
  }
}

export const changeEnumToKorWorkType = (workType: WorkType | undefined | null) => {
  switch (workType) {
    case 'ONSITE':
      return '대면'
    case 'HYBRID':
      return '혼합근무'
    case 'REMOTE':
      return '비대면'
    default:
      return '기타'
  }
}

export const changeEnumToKorWorkTypeLabel = (workType: WorkType | undefined | null) => {
  switch (workType) {
    case 'ONSITE':
      return 'recruitDetail.recruitInfo.workType.ONSITE'
    case 'HYBRID':
      return 'recruitDetail.recruitInfo.workType.HYBRID'
    case 'REMOTE':
      return 'recruitDetail.recruitInfo.workType.REMOTE'
    default:
      return 'recruitDetail.recruitInfo.workType.ETC'
  }
}

export const SalaryTypeClassName = (salaryEnumType: SalaryEnumType) => {
  switch (salaryEnumType) {
    case 'HOURLY':
      return 'flex items-center justify-center badge-sm text-sub3 border-sub3 border h-[22px] px-2 rounded-[8px]'
    case 'ANNUAL':
      return 'flex items-center justify-center badge-sm text-main-dark border-main-dark border h-[22px] px-2 rounded-[8px]'
    case 'MONTHLY':
      return 'flex items-center justify-center badge-sm text-sub2 border-sub2 border h-[22px] px-2 rounded-[8px]'
    case 'WEEKLY':
      return 'flex items-center justify-center badge-sm text-sub5 border-sub5 border h-[22px] px-2 rounded-[8px]'
    case 'DAILY':
      return 'flex items-center justify-center badge-sm text-sub1 border-sub1 border h-[22px] px-2 rounded-[8px]'
    default:
      return 'flex items-center justify-center badge-sm text-main border-main border h-[22px] px-2 rounded-[8px]'
  }
}

export const changeCompanyTypeEnumToKor = (companyEnumType: CompanyType) => {
  switch (companyEnumType) {
    case 'LARGE_CORPORATION':
      return '대기업'
    case 'MIDSIZE_COMPANY':
      return '중견기업'
    case 'SMALL_MEDIUM_ENTERPRISE':
      return '중소기업'
    case 'MICRO_BUSINESS':
      return '소상공인'
    case 'SOLE_PROPRIETOR':
      return '개인사업자'
    case 'CORPORATION':
      return '법인기업'
    case 'SOCIAL_ENTERPRISE':
      return '사회적기업'
    case 'COOPERATIVE':
      return '협동조합'
    default:
      return '기타'
  }
}

export const changeEnumToKorWorkDaysType = (workDaysType: WorkDaysType | undefined) => {
  switch (workDaysType) {
    case 'WEEKDAYS':
      return '평일(월, 화, 수, 목, 금)'
    case 'WEEKENDS':
      return '주말(토, 일)'
    case 'FULL_WEEK':
      return '주 7일(월~일)'
    case 'SIX_DAYS':
      return '주 6일'
    case 'MONDAY':
      return '월요일'
    case 'TUESDAY':
      return '화요일'
    case 'WEDNESDAY':
      return '수요일'
    case 'THURSDAY':
      return '목요일'
    case 'FRIDAY':
      return '금요일'
    case 'SATURDAY':
      return '토요일'
    case 'SUNDAY':
      return '일요일'
    default:
      return '기타'
  }
}
export const changeEnumToKorWorkDaysTypeLabel = (workDaysType: WorkDaysType | undefined) => {
  switch (workDaysType) {
    case 'WEEKDAYS':
      return 'recruitDetail.recruitInfo.workDaysType.WEEKDAYS'
    case 'WEEKENDS':
      return 'recruitDetail.recruitInfo.workDaysType.WEEKENDS'
    case 'FULL_WEEK':
      return 'recruitDetail.recruitInfo.workDaysType.FULL_WEEK'
    case 'SIX_DAYS':
      return 'recruitDetail.recruitInfo.workDaysType.SIX_DAYS'
    case 'MONDAY':
      return 'recruitDetail.recruitInfo.workDaysType.MONDAY'
    case 'TUESDAY':
      return 'recruitDetail.recruitInfo.workDaysType.TUESDAY'
    case 'WEDNESDAY':
      return 'recruitDetail.recruitInfo.workDaysType.WEDNESDAY'
    case 'THURSDAY':
      return 'recruitDetail.recruitInfo.workDaysType.THURSDAY'
    case 'FRIDAY':
      return 'recruitDetail.recruitInfo.workDaysType.FRIDAY'
    case 'SATURDAY':
      return 'recruitDetail.recruitInfo.workDaysType.SATURDAY'
    case 'SUNDAY':
      return 'recruitDetail.recruitInfo.workDaysType.SUNDAY'
    default:
      return 'recruitDetail.recruitInfo.workDaysType.ETC'
  }
}
