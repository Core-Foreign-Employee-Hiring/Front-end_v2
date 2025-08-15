import { create } from 'zustand'
import { PassArchiveRegisterType } from '@/types/archive'

interface SetArchiveStoreType {
  archiveData: PassArchiveRegisterType
}

interface ArchiveStoreType {
  archiveData: PassArchiveRegisterType | undefined
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
