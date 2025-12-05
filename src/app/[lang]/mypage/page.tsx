'use client'

import { useEffect, useState } from 'react'
import MypageMenu from '@/components/mypage/MypageMenu'
import UserInfoEditForm from '@/components/mypage/UserInfoEditForm'
import MyArchiveList from '@/components/mypage/MyArchiveList'
import { getInquiryDetail, getReviewDetail, postReview } from '@/lib/archive'
import { useModalStore } from '@/store/modalStore'
import BottomModal from '@/components/common/BottomModal'
import { StarIcon } from '@/assets/svgComponents'
import Image from 'next/image'
import StarRating from '@/components/archive/StarRating'
import PurchasedArchivePage from '@/components/mypage/my-archive-list/PurchasedArchivePage'
import SoldArchivePage from '@/components/mypage/my-archive-list/SoldArchivePage'
import PostArchivePage from '@/components/mypage/my-archive-list/PostArchivePage'
import ChangeAccountForm from '@/components/mypage/user-info/ChangeAccountForm'
import { InquiryDetailType, ReviewDetailDataType } from '@/types/archive'
import { formatRelativeTime } from '@/utils/common'
import SearchAddressModal from '@/components/common/SearchAddressModal'
import { useMyPageStore } from '@/store/mypageStore'
import { useTranslation } from 'react-i18next'

export default function Mypage() {
  const [mypageType, setMypageType] = useState<'회원정보' | '내 아카이브' | '문의하기'>('회원정보')

  const setState = useModalStore((state) => state.setState)
  const isViewReviewModalOpen = useModalStore((state) => state.isViewReviewModalOpen)
  const isWriteReviewModalOpen = useModalStore((state) => state.isWriteReviewModalOpen)
  const selectedPassArchiveData = useModalStore((state) => state.selectedPassArchiveData)
  const selectedReviewId = useModalStore((state) => state.selectedReviewId)
  const [reviewDetailData, setReviewDetailData] = useState<ReviewDetailDataType | undefined>(undefined)

  const [isPurchasedArchivePageOpen, setIsPurchasedArchivePageOpen] = useState(false) //내가 구매한
  const [isSoldArchivePageOpen, setIsSoldArchivePageOpen] = useState(false) //내가 판매한
  const [isPostArchivePageOpen, setIsPostArchivePageOpen] = useState(false) //내가 작성한

  const [rating, setRating] = useState(0)
  const [content, setContent] = useState<string>()

  const [isChangeAccountFormOpen, setIsChangeAccountFormOpen] = useState(false)
  // 문의 디테일
  const [inquiryDetail, setInquiryDetail] = useState<InquiryDetailType | undefined>()

  //주소찾기 api 연결을 위한 state
  const setMyPageState = useMyPageStore((state) => state.setState)
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const isSearchAddressModalOpen = useModalStore((state) => state.isSearchAddressModalOpen)

  const { t } = useTranslation()

  useEffect(() => {
    if (selectedReviewId !== undefined && isViewReviewModalOpen) {
      getReviewDetail(selectedReviewId).then((result) => {
        console.log('result', result)
        setReviewDetailData(result.data)
      })
    }
  }, [selectedReviewId, isViewReviewModalOpen])

  const handleComplete = async (data: any) => {
    let fullAddress = data.address
    let extraAddress = ''

    const { addressType, bname, buildingName, zonecode } = data
    console.log('data', data)

    if (addressType === 'R') {
      if (bname !== '') {
        extraAddress += bname
      }
      if (buildingName !== '') {
        extraAddress += `${extraAddress !== '' && ', '}${buildingName}`
      }
      fullAddress += `${extraAddress !== '' ? ` ${extraAddress}` : ''}`
    }
    if (myPageInfo) {
      setMyPageState({
        ...myPageInfo,
        myPageInfo: { ...myPageInfo, zipcode: zonecode, address1: fullAddress },
      })
    }
    setState({ isSearchAddressModalOpen: false })
  }

  useEffect(() => {
    getInquiryDetail(selectedReviewId).then((result) => {
      setInquiryDetail(result.data)
    })
  }, [])

  return (
    <div>
      {isSearchAddressModalOpen && <SearchAddressModal handleComplete={handleComplete} />}

      {/* 리뷰 보기 모달창 */}
      {isViewReviewModalOpen ? (
        <BottomModal title={'리뷰'} onClose={() => setState({ isViewReviewModalOpen: false })}>
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
        </BottomModal>
      ) : null}

      {/* 리뷰 작성 모달창 */}
      {isWriteReviewModalOpen ? (
        <BottomModal
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
        </BottomModal>
      ) : null}

      {isPurchasedArchivePageOpen ? (
        <PurchasedArchivePage setIsPurchasedArchivePageOpen={setIsPurchasedArchivePageOpen} />
      ) : isSoldArchivePageOpen ? (
        <SoldArchivePage setIsSoldArchivePageOpen={setIsSoldArchivePageOpen} />
      ) : isPostArchivePageOpen ? (
        <PostArchivePage setIsPostArchivePageOpen={setIsPostArchivePageOpen} />
      ) : (
        <>
          <div className="mt-[20px]">
            <div className="flex flex-col px-5">
              <h1 className="title-md">{t('mypage.h1')}</h1>
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
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
