'use client'
import Header from '@/components/common/Header'
import { useEffect, useState } from 'react'
import MypageMenu from '@/components/mypage/MypageMenu'
import UserInfoEditForm from '@/components/mypage/UserInfoEditForm'
import MyArchiveList from '@/components/mypage/MyArchiveList'
import AskForm from '@/components/mypage/AskForm'
import { getPurchasedArchives, getReviewDetail, getSentInquiryList, postAnswer, postReview } from '@/lib/archive'
import { useModalStore } from '@/store/modalStore'
import Modal from '@/components/common/Modal'
import { GrayStarIcon, StarIcon } from '@/assets/svgComponents'
import Image from 'next/image'
import StarRating from '@/components/archive/StarRating'
import PurchasedArchivePage from '@/components/mypage/my-archive-list/PurchasedArchivePage'
import SoldArchivePage from '@/components/mypage/my-archive-list/SoldArchivePage'
import PostArchivePage from '@/components/mypage/my-archive-list/PostArchivePage'
import Menu from '@/components/common/Menu'
import AlarmModal from '@/components/common/AlarmModal'
import ChangeAccountForm from '@/components/mypage/user-info/ChangeAccountForm'
import { ReviewDetailDataType } from '@/types/archive'
import { formatRelativeTime } from '@/utils/common'

export default function Mypage() {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  const [mypageType, setMypageType] = useState<'회원정보' | '내 아카이브' | '문의하기'>('회원정보')
  const isAnswerModalOpen = useModalStore((state) => state.isAnswerModalOpen)
  const selectedInquiryId = useModalStore((state) => state.selectedInquiryId)

  const setState = useModalStore((state) => state.setState)
  const isViewReviewModalOpen = useModalStore((state) => state.isViewReviewModalOpen)
  const isWriteReviewModalOpen = useModalStore((state) => state.isWriteReviewModalOpen)
  const selectedPassArchiveData = useModalStore((state) => state.selectedPassArchiveData)
  const selectedReviewId = useModalStore((state) => state.selectedReviewId)
  const [reviewDetailData, setReviewDetailData] = useState<ReviewDetailDataType | undefined>(undefined)

  const [isPurchasedArchivePageOpen, setIsPurchasedArchivePageOpen] = useState(false) //내가 구매한
  const [isSoldArchivePageOpen, setIsSoldArchivePageOpen] = useState(false) //내가 판매한
  const [isPostArchivePageOpen, setIsPostArchivePageOpen] = useState(false) //내가 작성한

  const [answerContent, setAnswerContent] = useState<string>()

  const [rating, setRating] = useState(0)
  const [content, setContent] = useState<string>()

  const [isAlarmModalOpen, setIsAlarmModalOpen] = useState(false)

  const [isChangeAccountFormOpen, setIsChangeAccountFormOpen] = useState(false)

  useEffect(() => {
    if (selectedReviewId !== undefined && isViewReviewModalOpen) {
      getReviewDetail(selectedReviewId).then((result) => {
        console.log('result', result)
        setReviewDetailData(result.data)
      })
    }
  }, [selectedReviewId, isViewReviewModalOpen])

  return (
    <main>
      {isAlarmModalOpen ? (
        <AlarmModal setIsAlarmModalOpen={setIsAlarmModalOpen} isAlarmModalOpen={isAlarmModalOpen} />
      ) : null}
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

      {/* 리뷰 보기 모달창 */}
      {isViewReviewModalOpen ? (
        <Modal title={'리뷰'} onClose={() => setState({ isViewReviewModalOpen: false })}>
          <div className="flex flex-col gap-y-6">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-1">
                <StarIcon width={16} height={15} />
                <div className="badge-md">{reviewDetailData?.star}</div>
              </div>
              <p className="small text-gray4">
                {reviewDetailData ? formatRelativeTime(reviewDetailData?.createAt) : ''} 작성
              </p>
            </div>
            <p className="body-md">{reviewDetailData?.content}</p>
          </div>
        </Modal>
      ) : null}

      {/* 리뷰 작성 모달창 */}
      {isWriteReviewModalOpen ? (
        <Modal
          buttonContent={'작성하기'}
          onClick={async () => {
            const res = await postReview(selectedPassArchiveData?.passArchiveId, rating, content)
            console.log(res)
            if (res.status === 201) {
              setState({ isWriteReviewModalOpen: false })
              //닫으면 데이터 초기화
            }
          }}
          onClose={() => setState({ isWriteReviewModalOpen: false })}
          title={'리뷰 작성'}
          buttonType={'active'}
        >
          <div className="flex flex-col gap-y-4">
            <section className="bg-gray1 flex w-full gap-x-[13px] rounded-[20px] p-5">
              <div className="relative h-[92px] w-[92px]">
                <Image
                  src={selectedPassArchiveData?.thumbnailUrl ?? '/pizza.png'}
                  alt={'썸네일'}
                  fill
                  className="rounded-[12px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="subtitle-md">{selectedPassArchiveData?.title}</p>
                <p className="body-sm text-gray5">{selectedPassArchiveData?.oneLineReview}</p>
                <p className="body-sm">{selectedPassArchiveData?.price.toLocaleString()}원</p>
                <p className="small text-gray4">{selectedPassArchiveData?.approvedAt} 결제완료</p>
              </div>
            </section>
            <section className="flex flex-col gap-y-2">
              <p className="subtitle-md">평점</p>
              <StarRating initialRating={0} maxRating={5} rating={rating} setRating={setRating} />
            </section>
            <section className="flex flex-col gap-y-2">
              <p className="subtitle-md">리뷰</p>
              <textarea
                onChange={(e) => {
                  setContent(e.target.value)
                }}
                placeholder={'리뷰를 남겨보세요!'}
                className="border-gray2 placeholder:text-gray4 h-[148px] w-full rounded-[20px] border p-5 outline-none"
              />
            </section>
          </div>
        </Modal>
      ) : null}

      {isPurchasedArchivePageOpen ? (
        <PurchasedArchivePage setIsPurchasedArchivePageOpen={setIsPurchasedArchivePageOpen} />
      ) : isSoldArchivePageOpen ? (
        <SoldArchivePage setIsSoldArchivePageOpen={setIsSoldArchivePageOpen} />
      ) : isPostArchivePageOpen ? (
        <PostArchivePage setIsPostArchivePageOpen={setIsPostArchivePageOpen} />
      ) : (
        <>
          <Header
            isAlarmModalOpen={isAlarmModalOpen}
            setIsAlarmModalOpen={setIsAlarmModalOpen}
            setIsHomeMenuOpen={setIsHomeMenuOpen}
            isHomeMenuOpen={isHomeMenuOpen}
          />
          {isHomeMenuOpen ? (
            <div>
              <div className="desktop:h-[160px] h-[80px]" />
              <Menu setIsHomeMenuOpen={setIsHomeMenuOpen} />
            </div>
          ) : (
            <div>
              <div className="h-[112px]" />
              <div className="flex flex-col px-5">
                <h1 className="title-md">마이페이지</h1>
              </div>

              <div className="mt-5 flex flex-col gap-y-[40px]">
                <MypageMenu setMypageType={setMypageType} mypageType={mypageType} />
                {/* 아이디/비밀번호 변경 페이지 */}
                {isChangeAccountFormOpen ? (
                  <ChangeAccountForm />
                ) : (
                  <>
                    {mypageType === '회원정보' ? (
                      <UserInfoEditForm setIsChangeAccountFormOpen={setIsChangeAccountFormOpen} />
                    ) : null}
                    {mypageType === '내 아카이브' ? (
                      <MyArchiveList
                        isPostArchivePageOpen={isPostArchivePageOpen}
                        setIsPostArchivePageOpen={setIsPostArchivePageOpen}
                        isPurchasedArchivePageOpen={isPurchasedArchivePageOpen}
                        setIsPurchasedArchivePageOpen={setIsPurchasedArchivePageOpen}
                        isSoldArchivePageOpen={isSoldArchivePageOpen}
                        setIsSoldArchivePageOpen={setIsSoldArchivePageOpen}
                      />
                    ) : null}
                    {mypageType === '문의하기' ? <AskForm /> : null}
                  </>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </main>
  )
}
