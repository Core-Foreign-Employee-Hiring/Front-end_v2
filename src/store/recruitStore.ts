import { create } from 'zustand'
import { RecruitInputDataType } from '@/types/recruit'

interface SetRecruitStoreType {
  recruitPostData?: RecruitInputDataType
  s3CompanyLogoUrl?: string | ArrayBuffer | null
  s3PosterUrl?: string | ArrayBuffer | null
}

interface RecruitStoreType {
  recruitPostData: RecruitInputDataType
  s3CompanyLogoUrl: string | ArrayBuffer | null
  s3PosterUrl: string | ArrayBuffer | null
  setState: (params: SetRecruitStoreType) => void
}

export const useRecruitStore = create<RecruitStoreType>((set) => ({
  recruitPostData: {},
  s3CompanyLogoUrl: null,
  s3PosterUrl: null,
  setState: (params: SetRecruitStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
