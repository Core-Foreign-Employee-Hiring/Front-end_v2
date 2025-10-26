'use client'

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
  const [isJobCategoryFilterOpen, setIsJobCategoryFilterOpen] = useState(false)
  const [isContractTypeFilterOpen, setIsContractTypeFilterOpen] = useState(false)
  const selectedJobCategoryFilterContentList = useRecruitStore((state) => state.selectedJobCategoryFilterContentList)
  const selectedContractTypeFilterContentList = useRecruitStore((state) => state.selectedContractTypeFilterContentList)

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
  )
}
