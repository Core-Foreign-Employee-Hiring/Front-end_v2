'use client'
import Header from '@/components/common/Header'
import { useEffect, useState } from 'react'
import MypageMenu from '@/components/mypage/MypageMenu'
import UserInfoEditForm from '@/components/mypage/UserInfoEditForm'
import MyArchiveList from '@/components/mypage/MyArchiveList'
import AskForm from '@/components/mypage/AskForm'
import { getSentInquiryList, postAnswer } from '@/lib/archive'
import { useModalStore } from '@/store/modalStore'
import Modal from '@/components/common/Modal'

export default function Mypage() {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  const [mypageType, setMypageType] = useState<'회원정보' | '내 아카이브' | '문의하기'>('회원정보')
  const isAnswerModalOpen = useModalStore((state) => state.isAnswerModalOpen)
  const selectedInquiryId = useModalStore((state) => state.selectedInquiryId)

  const setState = useModalStore((state) => state.setState)
  const [answerContent, setAnswerContent] = useState<string>()

  return (
    <main>
      {/* 답변하기 모달창 */}
      {isAnswerModalOpen ? (
        <Modal
          buttonContent={'답변 전송하기'}
          buttonType={'active'}
          onClose={() => setState({ isAnswerModalOpen: false })}
          onClick={async () => {
            if (answerContent) {
              const response = await postAnswer(selectedInquiryId, answerContent)
              if (response.status === 201) {
                setState({ isAnswerModalOpen: false })
              }
            }
          }}
          title={'답변 남기기'}
        >
          <div className="flex flex-col gap-y-4">
            <section className="bg-gray1 flex flex-col gap-y-1 rounded-[20px] p-5">
              <div className="flex items-center gap-x-3">
                <div className="bg-gray2 h-[48px] w-[48px] rounded-full" />
                <div className="subtitle-md">유저명</div>
              </div>
              <div className="flex justify-between">
                <p className="title-md">title</p>
                <p className="subtitle-lg">129,550원</p>
              </div>
              <div className="body-md text-gray5">설명한줄</div>
            </section>
            <section className="border-gray2 rounded-[20px] border p-5">
              <div className="border-gray2 flex flex-col gap-y-1 border-b pb-3">
                <p className="title-md">문의내용</p>
                <p className="body-md text-gray5">문의문의문의문의 이문의</p>
              </div>
              <textarea
                onChange={(e) => {
                  setAnswerContent(e.target.value)
                }}
                className="h-[100px] w-full pt-3 outline-none"
                placeholder="답변을 입력해주세요."
              />
            </section>
          </div>
        </Modal>
      ) : null}

      <Header setIsHomeMenuOpen={setIsHomeMenuOpen} isHomeMenuOpen={isHomeMenuOpen} />
      <div className="h-[112px]" />
      <div className="flex flex-col px-5">
        <h1 className="title-md">마이페이지</h1>
      </div>

      <div className="mt-5 flex flex-col gap-y-[40px]">
        <MypageMenu setMypageType={setMypageType} mypageType={mypageType} />
        {mypageType === '회원정보' ? <UserInfoEditForm /> : null}
        {mypageType === '내 아카이브' ? <MyArchiveList /> : null}
        {mypageType === '문의하기' ? <AskForm /> : null}
      </div>
    </main>
  )
}
