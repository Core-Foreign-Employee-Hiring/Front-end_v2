import { create } from 'zustand'

interface SetModalStoreType {
  isSearchAddressModalOpen?: boolean
  //답변하기 모달창
  isAnswerModalOpen?: boolean
  //선택된 문의질문 id
  selectedInquiryId?: number | undefined
}

interface ModalStoreType {
  isSearchAddressModalOpen: boolean
  //답변하기 모달창
  isAnswerModalOpen: boolean
  //선택된 문의질문 id
  selectedInquiryId: number | undefined
  setState: (params: SetModalStoreType) => void
}

export const useModalStore = create<ModalStoreType>((set) => ({
  isSearchAddressModalOpen: false,
  //답변하기 모달창
  isAnswerModalOpen: false,
  //선택된 문의질문 id
  selectedInquiryId: undefined,
  setState: (params: SetModalStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
