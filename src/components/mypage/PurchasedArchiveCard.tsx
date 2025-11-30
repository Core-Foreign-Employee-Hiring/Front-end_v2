import Button from '@/components/common/Button'
import { PurchasedArchiveType } from '@/types/archive'
import Image from 'next/image'
import { DownloadIcon, StarIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'
import { useModalStore } from '@/store/modalStore'

interface PurchasedArchiveCardProps extends PurchasedArchiveType {}

export default function PurchasedArchiveCard({
  title,
  oneLineReview,
  price,
  approvedAt,
  archiveReviewId,
  isReviewed,
  passArchiveId,
  star,
  thumbnailUrl,
}: PurchasedArchiveCardProps) {
  const router = useRouter()
  const setState = useModalStore((state) => state.setState)

  // 현재 아카이브 데이터 객체 생성
  const currentArchiveData: PurchasedArchiveType = {
    passArchiveId,
    thumbnailUrl,
    title,
    oneLineReview,
    price,
    approvedAt,
    isReviewed,
    archiveReviewId,
    star,
  }

  return (
    <div
      onClick={() => {
        router.push(`/archive/${passArchiveId}`)
      }}
      className="flex flex-col gap-y-[12px]"
    >
      {isReviewed ? null : (
        <div className="badge-md text-main bg-main-light w-fit rounded-[8px] px-2 py-1">
          아직 리뷰를 작성하지 않았어요.
        </div>
      )}

      <section className="flex items-center gap-x-[13px]">
        <div className="relative h-[84px] w-[80px] whitespace-nowrap">
          <Image fill src={thumbnailUrl} alt={'섬네일'} className={'rounded-[12px] object-cover'} />
        </div>
        <div className="flex flex-col gap-y-1">
          <h1 className="subtitle-md">{title}</h1>
          <p className="body-sm text-gray5">{oneLineReview}</p>
          <p className="body-sm">{price.toLocaleString()}원</p>
          <p className="small text-gray4">{approvedAt} 결제완료</p>
        </div>
      </section>
      <section onClick={(e) => e.stopPropagation()} className="flex gap-x-3">
        <Button
          leftIcon={<DownloadIcon width={12} height={13} />}
          onClick={() => {}}
          type={'outline'}
          size={'lg'}
          customClassName={'w-[100px]  whitespace-nowrap'}
        >
          다운로드
        </Button>
        {isReviewed ? (
          <Button
            onClick={() => {
              setState({ isViewReviewModalOpen: true, selectedReviewId: archiveReviewId })
            }}
            type={'outline'}
            size={'lg'}
            customClassName={'w-full'}
          >
            내가 쓴 리뷰
          </Button>
        ) : (
          <Button
            onClick={() => {
              setState({
                isWriteReviewModalOpen: true,
                selectedReviewId: archiveReviewId,
                selectedPassArchiveData: currentArchiveData, // 전체 아카이브 데이터 저장
              })
            }}
            type={'active'}
            size={'lg'}
            customClassName={'w-full'}
          >
            리뷰 작성하기
          </Button>
        )}
      </section>
    </div>
  )
}
