'use client'

import Header from '@/components/common/Header'
import RecruitCard from '@/components/recruit/RecruitCard'
import Input from '@/components/common/Input'
import { useState } from 'react'
import { DropboxArrowDownIcon, DropboxArrowUpIcon, GrayCancelIcon, GraySearchIcon } from '@/assets/svgComponents'
import Menu from '@/components/common/Menu'
import Filter from '@/components/recruit/Filter'
import { contractTypeList, jobCategoryList } from '@/utils/recruit'
import { useRecruitStore } from '@/store/recruitStore'
import { ContractEnumType, ContractKorType, JobCategoryEnumType, JobCategoryKorType } from '@/types/recruit'

export default function Home() {
  const [value, setValue] = useState('')
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  const [isJobCategoryFilterOpen, setIsJobCategoryFilterOpen] = useState(false)
  const [isContractTypeFilterOpen, setIsContractTypeFilterOpen] = useState(false)
  const selectedJobCategoryFilterContentList = useRecruitStore((state) => state.selectedJobCategoryFilterContentList)
  const selectedContractTypeFilterContentList = useRecruitStore((state) => state.selectedContractTypeFilterContentList)

  //zustand
  const setState = useRecruitStore((state) => state.setState)

  const convertKorToEnumJobCategory = (category: JobCategoryKorType): JobCategoryEnumType => {
    switch (category) {
      case '디자인':
        return 'DESIGN'
      case '영업/CS':
        return 'SALES_CS'
      case '생산/제조':
        return 'PRODUCTION_MANUFACTURING'
      case '서비스':
        return 'SERVICE'
      case 'IT':
        return 'IT'
      case '건설':
        return 'CONSTRUCTION'
      case '경영/사무':
        return 'MANAGEMENT_OFFICE'
      case '엔터테인먼트':
        return 'ENTERTAINMENT'
      case '마케팅/광고':
        return 'MARKETING_ADVERTISING'
      case '번역':
        return 'TRANSLATION'
      case '교육':
        return 'EDUCATION'
      case 'R&D':
        return 'R_AND_D'
      case '무역/물류':
        return 'TRADE_LOGISTICS'
      case '기타':
        return 'ETC'
    }
  }

  const convertEnumToKorJobCategory = (category: JobCategoryEnumType): JobCategoryKorType => {
    switch (category) {
      case 'DESIGN':
        return '디자인'
      case 'SALES_CS':
        return '영업/CS'
      case 'PRODUCTION_MANUFACTURING':
        return '생산/제조'
      case 'SERVICE':
        return '서비스'
      case 'IT':
        return 'IT'
      case 'CONSTRUCTION':
        return '건설'
      case 'MANAGEMENT_OFFICE':
        return '경영/사무'
      case 'ENTERTAINMENT':
        return '엔터테인먼트'
      case 'MARKETING_ADVERTISING':
        return '마케팅/광고'
      case 'TRANSLATION':
        return '번역'
      case 'EDUCATION':
        return '교육'
      case 'R_AND_D':
        return 'R&D'
      case 'TRADE_LOGISTICS':
        return '무역/물류'
      case 'ETC':
        return '기타'
    }
  }

  const convertKorToEnumContractType = (category: ContractKorType): ContractEnumType => {
    switch (category) {
      case '인턴':
        return 'INTERN'
      case '경력':
        return 'EXPERIENCED'
      case '계약직':
        return 'CONTRACT'
      case '신입':
        return 'NEWCOMER'
      case '정규직':
        return 'REGULAR'
    }
  }
  const convertEnumToKorContractType = (category: ContractEnumType): ContractKorType => {
    switch (category) {
      case 'INTERN':
        return '인턴'
      case 'EXPERIENCED':
        return '경력'
      case 'CONTRACT':
        return '계약직'
      case 'NEWCOMER':
        return '신입'
      case 'REGULAR':
        return '정규직'
    }
  }

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
      <div className="desktop:h-[160px] h-[80px]" />
      {isHomeMenuOpen ? (
        <Menu setIsHomeMenuOpen={setIsHomeMenuOpen} />
      ) : (
        <div>
          <div className="desktop:mt-[60px] mt-5 flex flex-col gap-y-6 px-5 md:px-5 lg:px-[200px] xl:px-[200px] 2xl:px-[200px]">
            <Input
              leftIcon={<GraySearchIcon width={24} height={24} />}
              value={value}
              inputBoxStyle={'default'}
              placeholder={'채용 공고를 검색해보세요.'}
            />
            <div className="h-[232px] w-full bg-[#D9D9D9]"></div>
            <section>
              <div className="flex flex-col gap-y-3">
                <div className="title-lg">공고 전체</div>
                <p className="subtitle-lg text-main">
                  34,231 <span className="text-black">건</span>
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
                      <div className="bg-main badge-md flex h-[20px] w-[20px] items-center justify-center rounded-full text-white">
                        {selectedJobCategoryFilterContentList.length}
                      </div>
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
                      <div className="bg-main badge-md flex h-[20px] w-[20px] items-center justify-center rounded-full text-white">
                        {selectedContractTypeFilterContentList.length}
                      </div>
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

              <div className="desktop:grid-cols-4 desktop:gap-6 mt-[16px] grid grid-cols-2 gap-4">
                <RecruitCard recruitId={1} />
                <RecruitCard recruitId={2} />
                <RecruitCard recruitId={3} />
                <RecruitCard recruitId={4} />
                <RecruitCard recruitId={5} />
                <RecruitCard recruitId={6} />
                <RecruitCard recruitId={7} />
                <RecruitCard recruitId={8} />
              </div>
            </section>
          </div>
          {/*<Footer />*/}
        </div>
      )}
    </div>
  )
}
