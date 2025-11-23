import { useCallback, useEffect, useRef, useState } from 'react'
import { getTotalRecruit } from '@/lib/recruit'
import {
  RecruitResponseContentType,
  ContractEnumType,
  JobRoleType,
  LanguageType,
  RegionType,
  VisaType,
} from '@/types/recruit'

interface UseInfiniteScrollParams {
  searchValue?: string
  contract?: ContractEnumType
  jobRoles?: JobRoleType[]
  languages?: LanguageType[]
  regions?: RegionType[]
  visas?: VisaType[]
  size?: number
}

export const useInfiniteScroll = (params: UseInfiniteScrollParams) => {
  const [data, setData] = useState<RecruitResponseContentType[]>([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [totalElements, setTotalElements] = useState(0)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadingRef = useRef<HTMLDivElement | null>(null)

  // 데이터 로드 함수
  const loadData = useCallback(
    async (pageNumber: number, isReset = false) => {
      if (loading) return

      setLoading(true)
      setError(null)

      try {
        const response = await getTotalRecruit({
          page: pageNumber,
          size: params.size || 20,
          searchValue: params.searchValue,
          contract: params.contract,
          jobRoles: params.jobRoles,
          languages: params.languages,
          regions: params.regions,
          visas: params.visas,
        })

        if (response.success && response.data) {
          const newData = response.data.content

          setData((prevData) => (isReset ? newData : [...prevData, ...newData]))
          setHasMore(pageNumber < response.data.totalPages - 1)
          setPage(pageNumber)
          setTotalElements(response.data.totalPages)
        } else {
          setError(response.message || '데이터를 불러오는데 실패했습니다.')
        }
      } catch (err) {
        setError('네트워크 오류가 발생했습니다.')
        console.error('Infinite scroll error:', err)
      } finally {
        setLoading(false)
      }
    },
    [
      params.searchValue,
      params.contract,
      params.jobRoles,
      params.languages,
      params.regions,
      params.visas,
      params.size,
      loading,
    ]
  )

  // 다음 페이지 로드
  const loadMore = useCallback(() => {
    if (hasMore && !loading) {
      loadData(page + 1, false)
    }
  }, [hasMore, loading, page, loadData])

  // 필터 변경시 데이터 리셋
  const resetData = useCallback(() => {
    setData([])
    setPage(0)
    setHasMore(true)
    loadData(0, true)
  }, [loadData])

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore()
        }
      },
      { threshold: 0.1 }
    )

    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [hasMore, loading, loadMore])

  // 로딩 엘리먼트 관찰
  useEffect(() => {
    const currentLoadingRef = loadingRef.current
    const currentObserver = observerRef.current

    if (currentLoadingRef && currentObserver) {
      currentObserver.observe(currentLoadingRef)
    }

    return () => {
      if (currentLoadingRef && currentObserver) {
        currentObserver.unobserve(currentLoadingRef)
      }
    }
  }, [])

  // 초기 데이터 로드 및 필터 변경 감지
  useEffect(() => {
    resetData()
  }, [
    params.searchValue,
    params.contract,
    params.jobRoles,
    params.languages,
    params.regions,
    params.visas,
    params.size,
  ])

  return {
    data,
    loading,
    hasMore,
    error,
    loadingRef,
    resetData,
    totalElements,
  }
}
