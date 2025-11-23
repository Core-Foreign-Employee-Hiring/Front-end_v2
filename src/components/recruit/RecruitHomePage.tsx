'use client'

import RecruitCard from '@/components/recruit/RecruitCard'
import Input from '@/components/common/Input'
import { useState } from 'react'
import { GraySearchIcon } from '@/assets/svgComponents'
import { useRecruitStore } from '@/store/recruitStore'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import Banner from '@/components/common/Banner'
import FilterButtons from '@/components/recruit/FilterButtons'

export default function RecruitHomePage() {
  const [searchValue, setSearchValue] = useState('')
  const selectedJobRoleFilterContentList = useRecruitStore((state) => state.selectedJobRoleFilterContentList)
  const selectedVisaFilterContentList = useRecruitStore((state) => state.selectedVisaFilterContentList)
  const selectedLanguageFilterContentList = useRecruitStore((state) => state.selectedLanguageFilterContentList)
  const selectedRegionFilterContentList = useRecruitStore((state) => state.selectedRegionFilterContentList)
  const selectedContractFilter = useRecruitStore((state) => state.selectedContractFilter)

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
    jobRoles: selectedJobRoleFilterContentList,
    languages: selectedLanguageFilterContentList,
    regions: selectedRegionFilterContentList,
    visas: selectedVisaFilterContentList,
    contract: selectedContractFilter,
    size: 20,
  })

  return (
    <div className="desktop:mt-[30px] mt-5 flex flex-col gap-y-6 px-5">
      <Input
        leftIcon={<GraySearchIcon width={24} height={24} />}
        value={searchValue}
        setValue={(e) => setSearchValue(e.target.value)}
        inputBoxStyle={'default'}
        placeholder={'채용 공고를 검색해보세요.'}
      />
      {searchValue ? null : <Banner />}
      <section>
        <div className="flex flex-col gap-y-3">
          <div className="title-lg">공고 전체</div>
          <p className="subtitle-lg text-main">
            {totalElements} <span className="text-black">건</span>
          </p>
          <FilterButtons />
        </div>

        {/* 에러 표시 */}
        {error && <div className="text-error py-4 text-center">{error}</div>}

        {/* 공고 리스트 */}
        <div className="mt-[16px] flex flex-col gap-4">
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
