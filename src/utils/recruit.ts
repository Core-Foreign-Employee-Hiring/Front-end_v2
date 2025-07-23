import {
  ContractEnumType,
  ContractKorType,
  JobCategoryEnumType,
  JobCategoryKorType,
  SalaryEnumType,
  SalaryKorType,
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

export const convertEnumToKorJobCategory = (category: JobCategoryEnumType): JobCategoryKorType => {
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
