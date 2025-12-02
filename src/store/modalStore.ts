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
  //로그인 만료되어있을 때 띄우는 state
  isTokenExpiredModalOpen?: boolean
  //언어 지원 모달창 띄우는 state
  isLanguageSelectModalOpen?: boolean
  //알림 모달창 state
  isAlarmModalOpen?: boolean
  //홈메뉴
  isHomeMenuOpen?: boolean
  //로그인 필요
  isLoginRequiredModalOpen?: boolean
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
  //로그인 만료되어 있을 때 띄우는 state
  isTokenExpiredModalOpen: boolean
  //언어 지원 모달창 띄우는 state
  isLanguageSelectModalOpen: boolean
  //알림 모달창 state
  isAlarmModalOpen: boolean
  //홈메뉴
  isHomeMenuOpen: boolean
  //로그인 필요
  isLoginRequiredModalOpen: boolean
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
  isTokenExpiredModalOpen: false,
  //언어 지원 모달창 띄우는 state
  isLanguageSelectModalOpen: false,
  //알림 모달창 state
  isAlarmModalOpen: false,
  //홈메뉴
  isHomeMenuOpen: false,
  //로그인 필요
  isLoginRequiredModalOpen: false,
  setState: (params: SetModalStoreType) => {
    set((state) => ({
      ...state,
      ...params,
    }))
  },
}))
