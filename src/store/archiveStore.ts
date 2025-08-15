import { create } from 'zustand'
import { PassArchiveType } from '@/types/archive'

interface SetArchiveStoreType {
  archiveData: PassArchiveType
}

interface ArchiveStoreType {
  archiveData: PassArchiveType | undefined
  setState: (params: SetArchiveStoreType) => void
}

export const useArchiveStore = create<ArchiveStoreType>((set) => ({
  archiveData: undefined,
  setState: (params: SetArchiveStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
