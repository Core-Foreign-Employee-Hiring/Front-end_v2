import { create } from 'zustand'
import {
  ApplicationMethodType,
  CompanyType,
  ContractEnumType,
  JobCategoryType,
  JobRoleType,
  LanguageType,
  NationalityType,
  RecruitInputDataType,
  RegionType,
  SalaryEnumType,
  VisaType,
  WorkDaysType,
  WorkType,
} from '@/types/recruit'

interface SetRecruitStoreType {
  recruitPostData?: RecruitInputDataType
  s3CompanyLogoUrl?: string | ArrayBuffer | null
  s3PosterUrl?: string | ArrayBuffer | null
  selectedVisaFilterContentList?: VisaType[]
  selectedJobRoleFilterContentList?: JobRoleType[]
  selectedLanguageFilterContentList?: LanguageType[]
  selectedRegionFilterContentList?: RegionType[]
  selectedContractFilter?: ContractEnumType | undefined
}

interface RecruitStoreType {
  recruitPostData: RecruitInputDataType
  s3CompanyLogoUrl: string | ArrayBuffer | null
  s3PosterUrl: string | ArrayBuffer | null
  setState: (params: SetRecruitStoreType) => void
  selectedVisaFilterContentList: VisaType[]
  selectedJobRoleFilterContentList: JobRoleType[]
  selectedLanguageFilterContentList: LanguageType[]
  selectedRegionFilterContentList: RegionType[]
  selectedContractFilter: ContractEnumType | undefined
}

export const useRecruitStore = create<RecruitStoreType>((set) => ({
  recruitPostData: {
    title: null,
    companyImageUrl: null,
    companyName: null,
    zipcode: null,
    address1: null,
    address2: null,
    companyType: null,
    representativeName: null,
    establishedDate: null,
    businessType: null,
    jobRoles: null,
    languageTypes: null,
    visas: null,
    isAlwaysRecruiting: null,
    recruitStartDate: null,
    recruitEndDate: null,
    contractType: null,
    nationality: null,
    directInputContractType: null,
    jobCategories: null,
    workType: null,
    directInputWorkType: null,
    workDayType: null,
    directInputWorkDayType: null,
    workStartTime: null,
    workEndTime: null,
    directInputWorkTime: null,
    salaryType: null,
    salary: null,
    directInputSalaryType: null,
    posterImageUrl: null,
    mainTasks: null,
    qualifications: null,
    preferences: null,
    others: null,
    applicationMethod: null,
    directInputApplicationMethod: null,
    recruitPublishStatus: 'PUBLISHED',
  },
  s3CompanyLogoUrl: null,
  s3PosterUrl: null,
  selectedVisaFilterContentList: [],
  selectedJobRoleFilterContentList: [],
  selectedLanguageFilterContentList: [],
  selectedRegionFilterContentList: [],
  selectedContractFilter: undefined,
  setState: (params: SetRecruitStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
