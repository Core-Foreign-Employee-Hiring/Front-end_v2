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

  const loadingRef = useRef<HTMLDivElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadingRef2 = useRef(false) // 로딩 중복 요청 방지

  // 데이터 로드 함수 - 페이지와 필터 파라미터를 직접 받음
  const loadData = useCallback(
    async (pageNumber: number, isReset = false) => {
      // 이미 로딩 중이면 중복 요청 방지
      if (loadingRef2.current) return

      loadingRef2.current = true
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

          // isReset이 true면 데이터 교체, false면 기존 데이터에 추가
          setData((prevData) => (isReset ? newData : [...prevData, ...newData]))

          // 다음 페이지가 있는지 확인 (현재 페이지가 마지막 페이지 미만이면 더 있음)
          setHasMore(pageNumber < response.data.totalPages - 1)

          setPage(pageNumber)
          setTotalElements(response.data.totalElements || response.data.totalPages)
        } else {
          setError(response.message || '데이터를 불러오는데 실패했습니다.')
          setHasMore(false)
        }
      } catch (err) {
        setError('네트워크 오류가 발생했습니다.')
        console.error('Infinite scroll error:', err)
        setHasMore(false)
      } finally {
        setLoading(false)
        loadingRef2.current = false
      }
    },
    [params.searchValue, params.contract, params.jobRoles, params.languages, params.regions, params.visas, params.size]
  )

  // Intersection Observer 설정 - 한 번만 실행
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // loadingRef가 화면에 보이면 다음 데이터 로드
        if (entries[0]?.isIntersecting && hasMore && !loading && !loadingRef2.current) {
          setPage((prevPage) => prevPage + 1)
        }
      },
      { threshold: 0.1 }
    )

    observerRef.current = observer

    if (loadingRef.current) {
      observer.observe(loadingRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [hasMore, loading]) // hasMore, loading만 dependency로 포함

  // page가 변경될 때만 데이터 로드
  useEffect(() => {
    if (page > 0 || data.length === 0) {
      loadData(page, false)
    }
  }, [page, loadData])

  // 필터 변경 시 데이터 리셋
  useEffect(() => {
    setData([])
    setPage(0)
    setHasMore(true)
  }, [params.searchValue, params.contract, params.jobRoles, params.languages, params.regions, params.visas])

  // 필터 리셋 후 초기 데이터 로드
  useEffect(() => {
    loadData(0, true)
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
    totalElements,
  }
}
