import { create } from 'zustand'

interface AuthStoreType {
  role: 'Employer' | 'Employee'
  setState: (params: { role?: 'Employer' | 'Employee' }) => void
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  role: 'Employee',
  setState: (params: { role?: 'Employer' | 'Employee' }) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
