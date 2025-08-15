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
