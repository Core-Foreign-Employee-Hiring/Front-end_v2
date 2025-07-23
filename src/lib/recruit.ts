import { ContractEnumType, JobCategoryEnumType, RecruitResponseContentType } from '@/types/recruit'
import { ApiResponse, ListResponse } from '@/types/common'
import { authorizedFetch } from '@/lib/common'

/**
 * 공고 전체 보기
 */
export const getTotalRecruit = async (params: {
  page: number
  size: number
  searchValue?: string
  jobCategories?: JobCategoryEnumType[]
  contractTypes?: ContractEnumType[]
}): Promise<ApiResponse<ListResponse<RecruitResponseContentType>>> => {
  const { page = 0, size = 20, searchValue, jobCategories, contractTypes } = params

  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  if (searchValue) {
    searchParams.append('keyword', searchValue)
  }

  if (jobCategories && jobCategories.length > 0) {
    jobCategories.forEach((category) => {
      searchParams.append('jobCategories', category)
    })
  }

  if (contractTypes && contractTypes.length > 0) {
    contractTypes.forEach((type) => {
      searchParams.append('contractTypes', type)
    })
  }

  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/recruit?${searchParams.toString()}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  return await response.json()
}

/**
 * 공고 상세보기
 */
export const getRecruitDetailData = async (recruitId: string) => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/recruit${recruitId}`, {
    method: 'GET',
  })

  const data = await response.json()
  return data
}
