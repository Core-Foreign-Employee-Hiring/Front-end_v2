import { create } from 'zustand'
import { RecruitInputDataType } from '@/types/recruit'

interface SetRecruitStoreType {
  recruitPostData: RecruitInputDataType
}

interface RecruitStoreType {
  recruitPostData: RecruitInputDataType
  setState: (params: SetRecruitStoreType) => void
}

export const useRecruitStore = create<RecruitStoreType>((set) => ({
  recruitPostData: {},
  setState: (params: SetRecruitStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
