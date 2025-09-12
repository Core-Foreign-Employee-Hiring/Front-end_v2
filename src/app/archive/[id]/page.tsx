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
  getUnreadInquiry,
  postAnswer,
  postInquire,
} from '@/lib/archive'
import { LatestInquiryType, PassArchiveDetailDataType, PassArchiveReviewDataType } from '@/types/archive'
import Pagination from '@/components/common/Pagination'
import ImageModal from '@/components/common/ImageModal'
import BottomModal from '@/components/common/BottomModal'
import { BentArrowIcon } from '@/assets/svgComponents'
import { postPaymentTestConfirm } from '@/lib/payment'
import Menu from '@/components/common/Menu'
import LanguageSelectModal from '@/components/modal/LanguageSelectModal'

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
  const [inquiryContent, setInquiryContent] = useState<string>() //문의하기

  //답변하기 모달창
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false)
  const [answerContent, setAnswerContent] = useState<string>() //답변하기

  //답변보기 모달창
  const [isViewAnswerModalOpen, setIsViewAnswerModalOpen] = useState(false)

  //언어 선택 모달창 제어
  const [isLanguageSelectModalOpen, setIsLanguageSelectModalOpen] = useState(false)

  useEffect(() => {
    getArchiveDetailData(params.id).then((response) => {
      setArchiveDetailData(response.data)
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
      {/* 문의하기 모달창 */}
      {/*{isInquireModalOpen ? (*/}
      {/*  <BottomModal*/}
      {/*    buttonContent={'문의 전송하기'}*/}
      {/*    buttonType={inquiryContent ? 'active' : 'disabled'}*/}
      {/*    onClick={async () => {*/}
      {/*      if (inquiryContent) {*/}
      {/*        const response = await postInquire(params.id, inquiryContent)*/}
      {/*        if (response.status === 201) {*/}
      {/*          setIsInquireModalOpen(false)*/}
      {/*        }*/}
      {/*      }*/}
      {/*    }}*/}
      {/*    title={'문의하기'}*/}
      {/*    onClose={() => setIsInquireModalOpen(false)}*/}
      {/*  >*/}
      {/*    <div className="flex flex-col gap-y-4">*/}
      {/*      <section className="bg-gray1 flex flex-col gap-y-1 rounded-[20px] p-5">*/}
      {/*        <div className="flex justify-between">*/}
      {/*          <p className="title-md">{archiveDetailData?.title}</p>*/}
      {/*          <p className="subtitle-lg">{archiveDetailData?.price}원</p>*/}
      {/*        </div>*/}
      {/*        <p className="body-md text-gray5">{archiveDetailData?.oneLineReview}</p>*/}
      {/*      </section>*/}
      {/*      {inquiryIsAnswered === undefined ? (*/}
      {/*        <textarea*/}
      {/*          onChange={(e) => {*/}
      {/*            setInquiryContent(e.target.value)*/}
      {/*          }}*/}
      {/*          className="border-gray2 h-[280px] rounded-[20px] border p-5 outline-none"*/}
      {/*          placeholder={'문의사항을 입력해주세요.'}*/}
      {/*        />*/}
      {/*      ) : !inquiryIsAnswered ? (*/}
      {/*        <div className="flex h-[213px] flex-col items-center justify-center gap-y-1">*/}
      {/*          <p className="title-md">유저로부터 답변을 기다리는 중 </p>*/}
      {/*          <p className="body-md text-gray5">잠시만 기다려주세요...</p>*/}
      {/*        </div>*/}
      {/*      ) : null}*/}
      {/*    </div>*/}
      {/*  </BottomModal>*/}
      {/*) : null}*/}

      {/* 답변하기 모달창 */}
      {/*{isAnswerModalOpen ? (*/}
      {/*  <BottomModal*/}
      {/*    buttonContent={'답변 전송하기'}*/}
      {/*    buttonType={answerContent?.length !== 0 ? 'active' : 'disabled'}*/}
      {/*    onClose={() => setIsAnswerModalOpen(false)}*/}
      {/*    onClick={async () => {*/}
      {/*      if (answerContent) {*/}
      {/*        const response = await postAnswer(latestInquiryData?.archiveInquiryId, answerContent)*/}
      {/*        if (response.status === 201) {*/}
      {/*          setIsAnswerModalOpen(false)*/}
      {/*        }*/}
      {/*      }*/}
      {/*    }}*/}
      {/*    title={latestInquiryData?.isAnswered ? '답변 보기' : '답변 남기기'}*/}
      {/*  >*/}
      {/*    <div className="flex flex-col gap-y-4">*/}
      {/*      <section className="bg-gray1 flex flex-col gap-y-1 rounded-[20px] p-5">*/}
      {/*        <div className="flex items-center gap-x-3">*/}
      {/*          <div className="relative h-[48px] w-[48px]">*/}
      {/*            <Image*/}
      {/*              fill*/}
      {/*              src={latestInquiryData?.profileImage ?? '/pizza.png'}*/}
      {/*              alt={'프로필'}*/}
      {/*              className="rounded-full object-cover"*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*          <div className="subtitle-md">{latestInquiryData?.name}</div>*/}
      {/*        </div>*/}
      {/*        <div className="flex justify-between">*/}
      {/*          <p className="title-md">{latestInquiryData?.title}</p>*/}
      {/*          <p className="subtitle-lg">{latestInquiryData?.price.toLocaleString()}원</p>*/}
      {/*        </div>*/}
      {/*        <div className="body-md text-gray5">{latestInquiryData?.oneLineReview}</div>*/}
      {/*      </section>*/}
      {/*      <section className="border-gray2 rounded-[20px] border p-5">*/}
      {/*        {latestInquiryData?.isAnswered ? (*/}
      {/*          <>*/}
      {/*            <div*/}
      {/*              className={`${latestInquiryData.isAnswered ? '' : 'border-b'} border-gray2 flex flex-col gap-y-1 pb-3`}*/}
      {/*            >*/}
      {/*              <p className="title-md">{latestInquiryData?.inquiry}</p>*/}
      {/*            </div>*/}
      {/*            <div className="flex gap-x-3">*/}
      {/*              <BentArrowIcon width={16} height={14} />*/}
      {/*              <div className="flex flex-col gap-y-1">*/}
      {/*                <p className="title-sm text-main">답변내용</p>*/}
      {/*                <p className="body-md text-gray5">{latestInquiryData.answer}</p>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </>*/}
      {/*        ) : (*/}
      {/*          <>*/}
      {/*            <div className="border-gray2 flex flex-col gap-y-1 border-b pb-3">*/}
      {/*              <p className="title-md">{latestInquiryData?.inquiry}</p>*/}
      {/*            </div>*/}
      {/*            <textarea*/}
      {/*              onChange={(e) => {*/}
      {/*                setAnswerContent(e.target.value)*/}
      {/*              }}*/}
      {/*              className="h-[100px] w-full pt-3 outline-none"*/}
      {/*              placeholder="답변을 입력해주세요."*/}
      {/*            />*/}
      {/*          </>*/}
      {/*        )}*/}
      {/*      </section>*/}
      {/*    </div>*/}
      {/*  </BottomModal>*/}
      {/*) : null}*/}

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
                if (archiveDetailData?.writer) {
                  //만약 새로운 문의가 왔다면
                  if (hasUnreadInquiry) {
                    setIsAnswerModalOpen(true) // 답변하기 모달창
                  }
                } else {
                  setIsInquireModalOpen(true) // 문의하기 모달창
                }
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
