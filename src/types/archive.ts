import { getLatestInquiry, getPurchasedArchives } from '@/lib/archive'

export interface PassArchiveRegisterType {
  title?: string
  oneLineReview?: string
  description?: string
  price?: number
}
export interface PassArchiveCardDataType {
  passArchiveId: number
  thumbnailUrl: string
  title: string
  oneLineReview: string
  price: number
  star: number
  starCount: number
}
export interface PassArchiveDetailDataType {
  title: string
  oneLineReview: string
  star: number
  starCount: number
  thumbnailUrl: string
  price: number
  description: number
  imageUrls: string[]
  authorNickname: string
  authorProfileImage: string
}
export interface PassArchiveReviewDataType {
  archiveReviewId: number
  star: number
  content: string
  createdAt: string
}
export interface PurchasedArchiveType {
  passArchiveId: number
  thumbnailUrl: string
  title: string
  oneLineReview: string
  price: number
  approvedAt: string
  isReviewed: boolean
  archiveReviewId: number
  star: number
}
export interface SoldArchiveType {
  archiveId: number
  title: string
  oneLineReview: string
  price: number
  soldAt: string
  isWithdrawn: boolean
  withdrawalAt: string
}
export interface PostArchiveType {
  archiveId: number
  thumbnailUrl: string
  title: string
  oneLineReview: string
  price: number
  salesCount: number
  star: number
  starCount: number
}
export interface InquiryType {
  archiveInquiryId: number
  title: string
  inquiry: string
  answer: string | null
}
export interface LatestInquiryType {
  archiveInquiryId: number
  profileImage: string
  name: string
  title: string
  oneLineReview: string
  price: number
  inquiry: string
  isAnswered: boolean
  answer: string
}
