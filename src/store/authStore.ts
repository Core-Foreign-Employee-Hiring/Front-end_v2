import { create } from 'zustand'

interface AuthStoreType {
  role: 'Employer' | 'Employee' | undefined
  setState: (params: {}) => void
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  role: 'Employee',
  setState: (params: {}) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
