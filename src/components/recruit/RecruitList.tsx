'use client'

import { useEffect, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import RecruitCard from '@/components/recruit/RecruitCard'
import Banner from '@/components/common/Banner'
import Input from '@/components/common/Input'
import FilterButtons from '@/components/recruit/FilterButtons'
import { clientFetchAllPosts } from '@/lib/client/recruit'
import { GraySearchIcon } from '@/assets/svgComponents'
import { useRecruitStore } from '@/store/recruitStore'
import { useTranslation } from 'react-i18next'

const DEFAULT_SIZE = 20

interface RecruitListProps {
  lang: string
}

export default function RecruitList({ lang }: RecruitListProps) {
  const selectedVisaFilterContentList = useRecruitStore((state) => state.selectedVisaFilterContentList)
  const selectedRegionFilterContentList = useRecruitStore((state) => state.selectedRegionFilterContentList)
  const selectedContractFilter = useRecruitStore((state) => state.selectedContractFilter)
  const selectedJobRoleFilterContentList = useRecruitStore((state) => state.selectedJobRoleFilterContentList)
  const selectedLanguageFilterContentList = useRecruitStore((state) => state.selectedLanguageFilterContentList)
  const [searchValue, setSearchValue] = useState('')

  const { t } = useTranslation()

  const filterParams = {
    searchValue: searchValue, // 디바운스된 값 사용
    contract: selectedContractFilter,
    jobRoles: selectedJobRoleFilterContentList,
    regions: selectedRegionFilterContentList,
    visas: selectedVisaFilterContentList,
    languages: selectedLanguageFilterContentList,
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['jobs', filterParams],
    queryFn: ({ pageParam }) =>
      clientFetchAllPosts({
        page: pageParam as number,
        size: DEFAULT_SIZE,
        ...filterParams,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage || !lastPage.data) {
        return undefined
      }

      const { page, totalPages } = lastPage.data

      if (page < totalPages) {
        return page + 1
      }

      return undefined
    },

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  // 무한 스크롤 트리거
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-y-5">
        <Input
          leftIcon={<GraySearchIcon width={24} height={24} />}
          value={searchValue}
          setValue={(e) => setSearchValue(e.target.value)}
          inputBoxStyle={'default'}
          placeholder={t('recruitHome.searchPlaceholder')}
        />
        {searchValue ? null : <Banner />}
      </div>

      <div className="mt-6 flex flex-col gap-y-3">
        <h1 className="title-lg">{t('recruitHome.h1')}</h1>
        <FilterButtons />
      </div>

      {/* 데이터 렌더링 */}
      <div className="mt-5 flex flex-col gap-y-3">
        {data?.pages.map((page, i) =>
          page.data?.content.map((job) => <RecruitCard lang={lang} recruit={job} key={job.recruitId} />)
        )}
      </div>

      {/* 스크롤 감지 영역 */}
      <div ref={ref} style={{ height: 20 }}>
        {isFetchingNextPage && (
          <div className="flex justify-center py-8">
            <div className="border-main h-8 w-8 animate-spin rounded-full border-b-2" />
          </div>
        )}
      </div>
    </div>
  )
}
