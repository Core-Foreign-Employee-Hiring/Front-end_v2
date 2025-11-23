import { create } from 'zustand'
import {
  ContractEnumType,
  JobRoleType,
  LanguageType,
  RecruitInputDataType,
  RegionType,
  VisaType,
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
  recruitPostData: { recruitPublishStatus: 'PUBLISHED' },
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
