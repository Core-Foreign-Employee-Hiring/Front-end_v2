'use client'

import Header from '@/components/common/Header'
import RecruitCard from '@/components/recruit/RecruitCard'
import Input from '@/components/common/Input'
import { useState } from 'react'
import {
  AirplaneIcon,
  DropboxArrowDownIcon,
  DropboxArrowUpIcon,
  GrayCancelIcon,
  GraySearchIcon,
} from '@/assets/svgComponents'
import Menu from '@/components/common/Menu'
import Filter from '@/components/recruit/Filter'
import {
  contractTypeList,
  convertEnumToKorContractType,
  convertEnumToKorJobCategory,
  convertKorToEnumContractType,
  convertKorToEnumJobCategory,
  jobCategoryList,
} from '@/utils/recruit'
import { useRecruitStore } from '@/store/recruitStore'
import { ContractKorType, JobCategoryKorType } from '@/types/recruit'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { useRouter } from 'next/navigation'

export default function RecruitHomePage() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  const [isJobCategoryFilterOpen, setIsJobCategoryFilterOpen] = useState(false)
  const [isContractTypeFilterOpen, setIsContractTypeFilterOpen] = useState(false)
  const selectedJobCategoryFilterContentList = useRecruitStore((state) => state.selectedJobCategoryFilterContentList)
  const selectedContractTypeFilterContentList = useRecruitStore((state) => state.selectedContractTypeFilterContentList)
  const [isAlarmModalOpen, setIsAlarmModalOpen] = useState(false)
  //언어 선택 모달창 제어
  const [isLanguageSelectModalOpen, setIsLanguageSelectModalOpen] = useState(false)

  //zustand
  const setState = useRecruitStore((state) => state.setState)

  // 무한스크롤 훅 사용
  const {
    data: recruits,
    loading,
    hasMore,
    error,
    loadingRef,
    totalElements,
  } = useInfiniteScroll({
    searchValue: searchValue,
    jobCategories: selectedJobCategoryFilterContentList,
    contractTypes: selectedContractTypeFilterContentList,
    size: 20,
  })

  const handleJobCategoryToggle = (content: JobCategoryKorType) => {
    const isSelected = selectedJobCategoryFilterContentList.includes(convertKorToEnumJobCategory(content))

    setState({
      selectedJobCategoryFilterContentList: isSelected
        ? selectedJobCategoryFilterContentList.filter((item) => item !== convertKorToEnumJobCategory(content))
        : [...selectedJobCategoryFilterContentList, convertKorToEnumJobCategory(content)],
    })
  }

  const handleContractToggle = (content: ContractKorType) => {
    const isSelected = selectedContractTypeFilterContentList.includes(convertKorToEnumContractType(content))

    setState({
      selectedContractTypeFilterContentList: isSelected
        ? selectedContractTypeFilterContentList.filter((item) => item !== convertKorToEnumContractType(content))
        : [...selectedContractTypeFilterContentList, convertKorToEnumContractType(content)],
    })
  }

  return (
    <div>
      <Header isHomeMenuOpen={isHomeMenuOpen} setIsHomeMenuOpen={setIsHomeMenuOpen} />

      <div className="mx-auto min-h-screen w-[375px] bg-white pt-[80px]">
        {isHomeMenuOpen ? (
          <div>
            <Menu setIsHomeMenuOpen={setIsHomeMenuOpen} />
          </div>
        ) : (
          <div>
            <div className="desktop:mt-[30px] mt-5 flex flex-col gap-y-6 px-5">
              <Input
                leftIcon={<GraySearchIcon width={24} height={24} />}
                value={searchValue}
                setValue={(e) => setSearchValue(e.target.value)}
                inputBoxStyle={'default'}
                placeholder={'채용 공고를 검색해보세요.'}
              />
              {searchValue ? null : (
                <div className="relative flex h-[204px] flex-col items-center justify-center rounded-[32px]">
                  <div className="absolute z-20 flex flex-col items-center justify-center gap-y-3">
                    <div className="flex flex-col items-center justify-center gap-y-[7px]">
                      <AirplaneIcon width={18} height={18} />
                      <h1 className="title-md text-white">
                        Your first step at Korea
                        <br />
                        Korfit will be with you.
                      </h1>
                    </div>
                    <Button
                      onClick={() => {
                        router.push('/landing')
                      }}
                      size={'sm'}
                      type={'outline'}
                      customClassName={'bg-white rounded-[12px]'}
                    >
                      What is Korfit? →
                    </Button>
                  </div>

                  <Image src={'/home-image.png'} alt={'홈'} fill className="object-cover" priority></Image>
                </div>
              )}
              <section>
                <div className="flex flex-col gap-y-3">
                  <div className="title-lg">공고 전체</div>
                  <p className="subtitle-lg text-main">
                    {totalElements} <span className="text-black">건</span>
                  </p>
                  <section className="relative flex gap-x-2">
                    <section
                      onClick={() => {
                        setIsJobCategoryFilterOpen(!isJobCategoryFilterOpen)
                      }}
                      className={`${isJobCategoryFilterOpen ? 'border-gray5' : 'border-gray2'} flex h-[36px] w-fit items-center gap-x-2 rounded-[12px] border pr-3 pl-4`}
                    >
                      <div className="flex items-center gap-x-1">
                        <p className="button text-gray5">직종</p>
                        {selectedJobCategoryFilterContentList.length === 0 ? null : (
                          <div className="bg-main badge-md flex h-[20px] w-[20px] items-center justify-center rounded-full text-white">
                            {selectedJobCategoryFilterContentList.length}
                          </div>
                        )}
                      </div>
                      {isJobCategoryFilterOpen ? (
                        <DropboxArrowUpIcon width={24} height={24} />
                      ) : (
                        <DropboxArrowDownIcon width={24} height={24} />
                      )}
                    </section>
                    {isJobCategoryFilterOpen && (
                      <Filter>
                        <div className="flex flex-col gap-y-[32px]">
                          <div className="flex flex-col gap-y-4">
                            <Filter.SelectedList>
                              <div className="flex flex-wrap gap-2">
                                {selectedJobCategoryFilterContentList.map((content) => {
                                  return (
                                    <div
                                      onClick={() => {
                                        setState({
                                          selectedJobCategoryFilterContentList:
                                            selectedJobCategoryFilterContentList.filter((item) => item !== content),
                                        })
                                      }}
                                      className="badge-sm text-gray5 bg-gray1 border-gray3 flex h-[36px] items-center justify-center gap-x-1 rounded-[12px] border pr-2 pl-3"
                                      key={content}
                                    >
                                      {convertEnumToKorJobCategory(content)}
                                      <GrayCancelIcon width={20} height={20} />
                                    </div>
                                  )
                                })}
                              </div>
                            </Filter.SelectedList>
                            <Filter.ContentList>
                              <div className="flex flex-wrap gap-2">
                                {jobCategoryList.map((content) => {
                                  return (
                                    <div
                                      onClick={() => handleJobCategoryToggle(content)}
                                      className={`${selectedJobCategoryFilterContentList.includes(convertKorToEnumJobCategory(content)) ? 'bg-main-light border-main text-main' : 'border-gray2 bg-white'} button text-gray5 flex h-[36px] items-center justify-center rounded-[12px] border px-4`}
                                      key={content}
                                    >
                                      {content}
                                    </div>
                                  )
                                })}
                              </div>
                            </Filter.ContentList>
                          </div>
                          <Filter.BottomButton
                            resetHandler={() => {
                              setState({ selectedJobCategoryFilterContentList: [] })
                            }}
                            applyHandler={() => {
                              setIsJobCategoryFilterOpen(false)
                            }}
                            selectedListLength={selectedJobCategoryFilterContentList.length}
                          />
                        </div>
                      </Filter>
                    )}

                    <section
                      onClick={() => {
                        setIsContractTypeFilterOpen(!isContractTypeFilterOpen)
                      }}
                      className={`${isContractTypeFilterOpen ? 'border-gray5' : 'border-gray2'} flex h-[36px] w-fit items-center gap-x-2 rounded-[12px] border pr-3 pl-4`}
                    >
                      <div className="flex items-center gap-x-1">
                        <p className="button text-gray5">계약형태</p>
                        {selectedContractTypeFilterContentList.length === 0 ? null : (
                          <div className="bg-main badge-md flex h-[20px] w-[20px] items-center justify-center rounded-full text-white">
                            {selectedContractTypeFilterContentList.length}
                          </div>
                        )}
                      </div>
                      {isContractTypeFilterOpen ? (
                        <DropboxArrowUpIcon width={24} height={24} />
                      ) : (
                        <DropboxArrowDownIcon width={24} height={24} />
                      )}
                    </section>
                    {isContractTypeFilterOpen && (
                      <Filter>
                        <div className="flex flex-col gap-y-[32px]">
                          <div className="flex flex-col gap-y-4">
                            <Filter.SelectedList>
                              <div className="flex flex-wrap gap-2">
                                {selectedContractTypeFilterContentList.map((content) => {
                                  return (
                                    <div
                                      onClick={() => {
                                        setState({
                                          selectedContractTypeFilterContentList:
                                            selectedContractTypeFilterContentList.filter((item) => item !== content),
                                        })
                                      }}
                                      className="badge-sm text-gray5 bg-gray1 border-gray3 flex h-[36px] items-center justify-center gap-x-1 rounded-[12px] border pr-2 pl-3"
                                      key={content}
                                    >
                                      {convertEnumToKorContractType(content)}
                                      <GrayCancelIcon width={20} height={20} />
                                    </div>
                                  )
                                })}
                              </div>
                            </Filter.SelectedList>
                            <Filter.ContentList>
                              <div className="flex flex-wrap gap-2">
                                {contractTypeList.map((content) => {
                                  return (
                                    <div
                                      onClick={() => handleContractToggle(content)}
                                      className={`${selectedContractTypeFilterContentList.includes(convertKorToEnumContractType(content)) ? 'bg-main-light border-main text-main' : 'border-gray2 bg-white'} button text-gray5 flex h-[36px] items-center justify-center rounded-[12px] border px-4`}
                                      key={content}
                                    >
                                      {content}
                                    </div>
                                  )
                                })}
                              </div>
                            </Filter.ContentList>
                          </div>
                          <Filter.BottomButton
                            resetHandler={() => {
                              setState({ selectedContractTypeFilterContentList: [] })
                            }}
                            applyHandler={() => {
                              setIsContractTypeFilterOpen(false)
                            }}
                            selectedListLength={selectedContractTypeFilterContentList.length}
                          />
                        </div>
                      </Filter>
                    )}
                  </section>
                </div>

                {/* 에러 표시 */}
                {error && <div className="text-error py-4 text-center">{error}</div>}

                {/* 공고 리스트 */}
                <div className="mt-[16px] grid grid-cols-2 gap-4">
                  {recruits.map((recruit) => (
                    <RecruitCard key={recruit.recruitId} recruit={recruit} />
                  ))}
                </div>

                {/* 로딩 인디케이터 */}
                {loading && (
                  <div className="flex justify-center py-8">
                    <div className="border-main h-8 w-8 animate-spin rounded-full border-b-2"></div>
                  </div>
                )}

                {/* 무한스크롤 트리거 엘리먼트 */}
                {hasMore && (
                  <div ref={loadingRef} className="flex h-10 items-center justify-center">
                    <span className="text-sm text-gray-400">더 많은 공고를 불러오는 중...</span>
                  </div>
                )}

                {/* 더 이상 데이터가 없을 때 */}
                {!hasMore && recruits.length > 0 && (
                  <div className="py-8 text-center text-gray-500">모든 공고를 확인했습니다.</div>
                )}

                {/* 데이터가 없을 때 */}
                {!loading && recruits.length === 0 && (
                  <div className="py-16 text-center text-gray-500">검색 결과가 없습니다.</div>
                )}
              </section>
            </div>
            {/*<Footer />*/}
          </div>
        )}
      </div>
    </div>
  )
}
