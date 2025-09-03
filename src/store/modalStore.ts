import { create } from 'zustand'
import { PurchasedArchiveType } from '@/types/archive'

interface SetModalStoreType {
  isSearchAddressModalOpen?: boolean
  //답변하기 모달창
  isAnswerModalOpen?: boolean
  //선택된 문의질문 id
  selectedInquiryId?: number | undefined

  //리뷰 보기 모달창
  isViewReviewModalOpen?: boolean
  //리뷰 쓰기 모달창
  isWriteReviewModalOpen?: boolean
  //선택된 리뷰 Id
  selectedReviewId?: number | undefined
  //선택된 합격 아카이브 Id
  selectedPassArchiveData?: PurchasedArchiveType | undefined
}

interface ModalStoreType {
  isSearchAddressModalOpen: boolean
  //답변하기 모달창
  isAnswerModalOpen: boolean
  //선택된 문의질문 id
  selectedInquiryId: number | undefined

  //리뷰 보기 모달창
  isViewReviewModalOpen: boolean
  //리뷰 쓰기 모달창
  isWriteReviewModalOpen: boolean
  //선택된 리뷰 Id
  selectedReviewId: number | undefined
  //선택된 합격 아카이브 Id
  selectedPassArchiveData: PurchasedArchiveType | undefined
  setState: (params: SetModalStoreType) => void
}

export const useModalStore = create<ModalStoreType>((set) => ({
  isSearchAddressModalOpen: false,
  //답변하기 모달창
  isAnswerModalOpen: false,
  //선택된 문의질문 id
  selectedInquiryId: undefined,
  //리뷰 보기 모달창
  isViewReviewModalOpen: false,
  //리뷰 쓰기 모달창
  isWriteReviewModalOpen: false,
  //선택된 리뷰 Id
  selectedReviewId: undefined,
  //선택된 합격 아카이브 Id
  selectedPassArchiveData: undefined,
  setState: (params: SetModalStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
