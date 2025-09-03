import Button from '@/components/common/Button'
import { PurchasedArchiveType } from '@/types/archive'
import Image from 'next/image'
import { StarIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

interface PurchasedArchiveCardProps extends PurchasedArchiveType {}

export default function PurchasedArchiveCard({
  title,
  archiveReviewId,
  passArchiveId,
  oneLineReview,
  star,
  price,
  thumbnailUrl,
  approvedAt,
}: PurchasedArchiveCardProps) {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push(`/archive/${passArchiveId}`)
      }}
      className="flex flex-col gap-y-[16px]"
    >
      <section className="flex gap-x-[13px]">
        <div className="relative h-[84px] w-[80px]">
          <Image fill src={thumbnailUrl} alt={'섬네일'} className={'rounded-[12px] object-cover'} />
        </div>
        <div className="">
          <h1 className="subtitle-md">{title}</h1>
          <p className="body-sm text-gray5">{oneLineReview}</p>
          <div className="flex items-center gap-x-[13px]">
            <p className="body-sm">{price.toLocaleString()}원</p>
            <p className="small text-gray4">{approvedAt} 결제완료</p>
          </div>
          {star ? (
            <div className="flex items-center gap-x-1">
              <StarIcon width={16} height={15} />
              <p className="badge-md text-gray5">{star}</p>
            </div>
          ) : (
            <p className="subtitle-sm text-gray5">아직 리뷰를 작성하지 않았습니다.</p>
          )}
        </div>
      </section>
      <section className="flex gap-x-3">
        {star ? (
          <Button onClick={() => {}} type={'disabled'} size={'lg'} customClassName={'w-full'}>
            내 리뷰 보기
          </Button>
        ) : (
          <Button onClick={() => {}} type={'disabled'} size={'lg'} customClassName={'w-full'}>
            리뷰 작성
          </Button>
        )}

        <Button onClick={() => {}} type={'outline'} size={'lg'} customClassName={'w-[100px]  whitespace-nowrap'}>
          다운로드
        </Button>
      </section>
    </div>
  )
}
