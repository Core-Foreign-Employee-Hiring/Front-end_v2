'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from '@/components/common/Header'
import Image from 'next/image'
import Review from '@/components/archive/Review'
import Button from '@/components/common/Button'
import {
  getArchiveDetailData,
  getArchiveReviewData,
  getInquiryIsAnswered,
  getLatestInquiry,
  getPassArchivesPassArchiveIdInquiryUrl,
  getUnreadInquiry,
} from '@/lib/archive'
import { LatestInquiryType, PassArchiveDetailDataType, PassArchiveReviewDataType } from '@/types/archive'
import Pagination from '@/components/common/Pagination'
import ImageModal from '@/components/common/ImageModal'
import BottomModal from '@/components/common/BottomModal'
import { BentArrowIcon } from '@/assets/svgComponents'
import { postPaymentTestConfirm } from '@/lib/payment'
import Menu from '@/components/common/Menu'
import LanguageSelectModal from '@/components/modal/LanguageSelectModal'
import Link from 'next/link'

export default function ReviewDetailPage() {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  const params = useParams()
  const [archiveDetailData, setArchiveDetailData] = useState<PassArchiveDetailDataType>()
  const [reviewData, setReviewData] = useState<PassArchiveReviewDataType[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [latestInquiryData, setLatestInquiryData] = useState<LatestInquiryType>()
  // 답변이 달렸는지
  const [inquiryIsAnswered, setInquiryIsAnswered] = useState<boolean | undefined>()
  // 새로운 문의가 있는지
  const [hasUnreadInquiry, setHasUnreadInquiry] = useState<boolean | undefined>()

  //이미지 클릭시
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>()

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [totalElements, setTotalElements] = useState<number>(0)

  // 문의하기 모달창
  const [isInquireModalOpen, setIsInquireModalOpen] = useState(false)
  const [inquiryUrl, setInquiryUrl] = useState<string>('')

  //언어 선택 모달창 제어
  const [isLanguageSelectModalOpen, setIsLanguageSelectModalOpen] = useState(false)

  useEffect(() => {
    getArchiveDetailData(params.id).then((response) => {
      setArchiveDetailData(response.data)
    })
    getPassArchivesPassArchiveIdInquiryUrl(params.id).then((response) => {
      if (response.success && response.data) {
        setInquiryUrl(response.data)
      }
    })
  }, [currentPage])

  // 최근 문의한 정보 가져오기
  useEffect(() => {
    getLatestInquiry(params.id).then((response) => {
      if (response.success) {
        setLatestInquiryData(response.data)
      }
    })
  }, [])

  useEffect(() => {
    const loadArchiveData = async () => {
      try {
        setIsLoading(true)

        const response = await getArchiveReviewData(params.id, currentPage, 3)

        if (response && response.data && Array.isArray(response.data.content)) {
          const archiveReviewList = response.data.content
          setReviewData(archiveReviewList)
          setTotalPages(response.data.totalPages)
          setTotalElements(response.data.totalElements || 0)
        } else {
          console.warn('예상하지 못한 응답 구조:', response)
          setReviewData([])
          setTotalPages(0)
          setTotalElements(0)
        }
      } catch (error: unknown) {
        console.error('아카이브 데이터 불러오기 실패:', error)
        setReviewData([])
        setTotalPages(0)
        setTotalElements(0)
      } finally {
        setIsLoading(false)
      }
    }

    loadArchiveData()
  }, [currentPage]) // searchKeyword와 currentPage 변경 시 실행

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1) // Pagination은 1부터 시작하지만 API는 0부터 시작
  }

  // 답변이 달렸는지 확인하는
  useEffect(() => {
    if (latestInquiryData) {
      getInquiryIsAnswered(latestInquiryData.archiveInquiryId).then((result) => {
        if (result.success) {
          setInquiryIsAnswered(result.data)
        }
      })
    }
  }, [latestInquiryData])

  //새로운 문의가 왔는지
  useEffect(() => {
    getUnreadInquiry(params.id).then((result) => {
      if (result.success) {
        setHasUnreadInquiry(result.data)
      }
    })
  }, [])

  return (
    <main>
      {isInquireModalOpen ? (
        <BottomModal onClose={() => setIsInquireModalOpen(false)} title={'문의하기'}>
          <div className="flex flex-col gap-y-4">
            <section className="border-gray2 flex h-[237px] flex-col items-center justify-center gap-y-2 rounded-[20px] border p-5">
              <p className="title-md">
                문의는 오픈채팅에서 <br /> 진행하실 수 있습니다.
              </p>
              {inquiryUrl ? <Link href={inquiryUrl}>{inquiryUrl}</Link> : <p>등록된 URL이 없습니다.</p>}
            </section>
          </div>
        </BottomModal>
      ) : null}
      {/* 이미지 모달창 */}
      {isImageModalOpen ? (
        <ImageModal
          ImageUrl={selectedImageUrl}
          setSelectedImageUrl={setSelectedImageUrl}
          setIsImageModalOpen={setIsImageModalOpen}
        />
      ) : null}
      {isLanguageSelectModalOpen ? (
        <LanguageSelectModal
          isLanguageSelectModalOpen={isLanguageSelectModalOpen}
          setIsLanguageSelectModalOpen={setIsLanguageSelectModalOpen}
        />
      ) : null}
      <Header
        setIsLanguageSelectModalOpen={setIsLanguageSelectModalOpen}
        isLanguageSelectModalOpen={isLanguageSelectModalOpen}
        setIsHomeMenuOpen={setIsHomeMenuOpen}
        isHomeMenuOpen={isHomeMenuOpen}
      />
      {isHomeMenuOpen ? (
        <div>
          <div className="h-[80px]" />
          <Menu setIsHomeMenuOpen={setIsHomeMenuOpen} />
        </div>
      ) : (
        <>
          <div className="h-[120px]" />
          <div className="flex flex-col gap-y-6 px-5">
            {/* 요약본 카드 */}
            <section className="border-gray2 flex flex-col gap-y-6 rounded-[32px] border p-5">
              <div className="relative h-[223px] w-full rounded-[16px]">
                <div className="absolute z-10 h-[133px] w-full rounded-[12px] bg-gradient-to-t from-white to-black opacity-40"></div>
                <Image
                  onClick={() => {
                    setSelectedImageUrl(archiveDetailData?.thumbnailUrl)
                    setIsImageModalOpen(true)
                  }}
                  alt={archiveDetailData ? archiveDetailData.thumbnailUrl : '/pizza.png'} //이후에 바꾸기
                  src={archiveDetailData ? archiveDetailData.thumbnailUrl : '/pizza.png'} //이후에 바꾸기
                  fill
                  className={'rounded-[16px]'}
                />
              </div>
              <section className="flex flex-col gap-y-3">
                <div>
                  <h1 className="subtitle-md">{archiveDetailData?.title}</h1>
                  <p className="body-sm text-gray5">{archiveDetailData?.oneLineReview}</p>
                </div>
                <p className="subtitle-lg">{archiveDetailData?.price}원</p>
              </section>
            </section>

            {/* content */}
            <section className="flex flex-col gap-y-8">
              <section className="flex flex-col gap-y-3">
                <p className="subtitle-md">설명</p>
                <p className="body-md">{archiveDetailData?.description}</p>
              </section>
              <section className="flex overflow-x-scroll">
                {archiveDetailData?.imageUrls.map((imageUrl) => {
                  return (
                    <div key={imageUrl} className="relative flex h-[250px] w-[286px] flex-shrink-0 whitespace-nowrap">
                      <Image
                        onClick={() => {
                          setSelectedImageUrl(imageUrl)
                          setIsImageModalOpen(true)
                        }}
                        alt={imageUrl ? imageUrl : '/pizza.png'}
                        src={imageUrl ? imageUrl : '/pizza.png'}
                        fill
                        className="rounded-[16px] object-cover"
                      />
                    </div>
                  )
                })}
              </section>
            </section>

            {/* review */}
            <section>
              <section>
                <p className="subtitle-md">리뷰</p>
              </section>
              <section>
                {reviewData?.map((review) => {
                  return <Review key={review.archiveReviewId} {...review} />
                })}
              </section>

              {totalPages > 0 && (
                <div className="mt-[24px] mb-[40px] w-full">
                  <Pagination
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    currentPage={currentPage + 1} // API는 0부터, UI는 1부터
                    showPages={5}
                  />
                </div>
              )}
            </section>
          </div>

          <div className="h-[100px]" />
          <div className="fixed bottom-0 flex w-full gap-x-3 bg-white p-5">
            <Button
              onClick={() => {
                setIsInquireModalOpen(true)
              }}
              type={!hasUnreadInquiry ? 'disabled' : 'outline'}
              disabled={!hasUnreadInquiry}
              size={'lg'}
              customClassName={'flex whitespace-nowrap ew-[72px] h-[52px]'}
            >
              문의
            </Button>
            <Button
              onClick={async () => {
                const res = await postPaymentTestConfirm(params.id) //TODO: 결제 변경해야함.
                console.log('결제', res)
              }}
              type={'active'}
              size={'lg'}
              customClassName={'w-full h-[52px]'}
            >
              구매하기
            </Button>
          </div>
        </>
      )}
    </main>
  )
}
