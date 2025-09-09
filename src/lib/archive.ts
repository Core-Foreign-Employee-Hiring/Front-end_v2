import { authorizedFetch } from '@/lib/common'
import { ApiResponse, ListResponse } from '@/types/common'
import {
  InquiryType,
  LatestInquiryType,
  PassArchiveCardDataType,
  PassArchiveDetailDataType,
  PassArchiveReviewDataType,
  PostArchiveType,
  PurchasedArchiveType,
  ReviewDetailDataType,
  SoldArchiveType,
} from '@/types/archive'

/**
 * 합격 아카이브 등록
 */
export const postArchiveData = async (formData: FormData) => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pass-archives`, {
    method: 'POST',
    body: formData,
  })

  const data = await response.json()
  return data
}

/**
 * 합격 아카이브 조회
 */
export const getArchiveData = async (
  keyword: string,
  page: number,
  size: number
): Promise<ApiResponse<ListResponse<PassArchiveCardDataType>>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pass-archives?keyword=${keyword}&page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return data
}

/**
 * 합격 아카이브 디테일 조회
 */
export const getArchiveDetailData = async (
  id: string | string[] | undefined
): Promise<ApiResponse<PassArchiveDetailDataType>> => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pass-archives/detail?id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  return data
}

/**
 * 합격 아카이브 리뷰 조회
 */
export const getArchiveReviewData = async (
  id: string | string[] | undefined,
  page: number,
  size: number
): Promise<ApiResponse<ListResponse<PassArchiveReviewDataType>>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pass-archives/${id}/reviews?page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return data
}

/**
 * 문의하기
 */
export const postInquire = async (
  passArchiveId: string | string[] | undefined,
  inquiry: string
): Promise<ApiResponse<boolean>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pass-archives/${passArchiveId}/inquiries`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inquiry }),
    }
  )

  const data = await response.json()
  return data
}

/**
 * 답변하기
 */
export const postAnswer = async (inquiryId: number | undefined, answer: string): Promise<ApiResponse<boolean>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pass-archives/inquiries/${inquiryId}/answers`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answer }),
    }
  )

  const data = await response.json()
  return data
}

/**
 * 내가 작성한 문의하기 불러오기
 */
export const getSentInquiryList = async (
  page: number,
  size: number
): Promise<ApiResponse<ListResponse<InquiryType>>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/my/inquiries/sent?page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return data
}

/**
 * 내가 받은 문의하기 불러오기
 */
export const getReceivedInquiryList = async (
  page: number,
  size: number
): Promise<ApiResponse<ListResponse<InquiryType>>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/my/inquiries/received?page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return data
}

/**
 * 알람 읽음 처리
 */
export const patchReadQnA = async (notificationId: number): Promise<ApiResponse<ListResponse<InquiryType>>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/my/notification/archive-inquiries/read`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notificationIds: [notificationId] }),
    }
  )

  const data = await response.json()
  return data
}

/**
 * 내가 구매한 아카이브 조회
 */
export const getPurchasedArchives = async (
  page: number,
  size: number
): Promise<ApiResponse<ListResponse<PurchasedArchiveType>>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/my/purchased-archives?page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return data
}

/**
 * 내가 작성한 아카이브 조회
 */
export const getPostArchives = async (
  page: number,
  size: number
): Promise<ApiResponse<ListResponse<PostArchiveType>>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/my/archives?page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return data
}

/**
 * 내가 판매한 아카이브 조회
 */
export const getSoldArchives = async (
  page: number,
  size: number
): Promise<ApiResponse<ListResponse<SoldArchiveType>>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/my/archives/sold?page=${page}&size=${size}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return data
}

/**
 * 총 수익
 */
export const getSoldArchivesRevenue = async (): Promise<ApiResponse<string>> => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/my/archives/sold/revenue`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  return data
}

/**
 * 내가 보낸 문의 중 가장 최근거 조회
 */
export const getLatestInquiry = async (): Promise<ApiResponse<LatestInquiryType>> => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pass-archives/latest-inquiry`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  return data
}

/**
 * 내가 작성한 리뷰 상세
 */
export const getReviewDetail = async (reviewId: number): Promise<ApiResponse<ReviewDetailDataType>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pass-archives/reviews/${reviewId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()
  return data
}

/**
 * 리뷰쓰기
 */
export const postReview = async (
  passArchiveId: number | undefined,
  star: number,
  content: string | undefined
): Promise<ApiResponse<boolean>> => {
  const response = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pass-archives/test/${passArchiveId}/reviews`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ star: star, content: content }),
    }
  )

  const data = await response.json()
  return data
}
