import { create } from 'zustand'
import { ContractEnumType, JobCategoryEnumType, RecruitInputDataType } from '@/types/recruit'

interface SetRecruitStoreType {
  recruitPostData?: RecruitInputDataType
  s3CompanyLogoUrl?: string | ArrayBuffer | null
  s3PosterUrl?: string | ArrayBuffer | null
  selectedJobCategoryFilterContentList?: JobCategoryEnumType[]
  selectedContractTypeFilterContentList?: ContractEnumType[]
}

interface RecruitStoreType {
  recruitPostData: RecruitInputDataType
  s3CompanyLogoUrl: string | ArrayBuffer | null
  s3PosterUrl: string | ArrayBuffer | null
  setState: (params: SetRecruitStoreType) => void
  selectedJobCategoryFilterContentList: JobCategoryEnumType[]
  selectedContractTypeFilterContentList: ContractEnumType[]
}

export const useRecruitStore = create<RecruitStoreType>((set) => ({
  recruitPostData: { recruitPublishStatus: 'PUBLISHED' },
  s3CompanyLogoUrl: null,
  s3PosterUrl: null,
  selectedJobCategoryFilterContentList: [],
  selectedContractTypeFilterContentList: [],
  setState: (params: SetRecruitStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
