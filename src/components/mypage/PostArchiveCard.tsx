import { StarIcon } from '@/assets/svgComponents'
import { PostArchiveType } from '@/types/archive'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface PostArchiveCardProps extends PostArchiveType {}

export default function PostArchiveCard({
  title,
  archiveId,
  price,
  star,
  starCount,
  salesCount,
  thumbnailUrl,
  oneLineReview,
}: PostArchiveCardProps) {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push(`/archive/${archiveId}`)
      }}
      className="border-gray2 flex flex-col gap-y-3 rounded-[32px] border p-5"
    >
      <div className="relative h-[140px] w-full min-w-[240px]">
        <Image src={thumbnailUrl} alt={thumbnailUrl} fill className="rounded-[16px] object-cover" />
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-1">
          <div className="flex w-full justify-between">
            <p className="subtitle-lg">{title}</p>
            <p className="subtitle-lg">{price.toLocaleString()}원</p>
          </div>
          <p className="body-sm text-gray5">{oneLineReview}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <StarIcon width={16} height={15} />
            <div className="flex items-center gap-x-[2px]">
              <p className="badge-md">{star}</p>
              <p className="body-sm text-gray5">({starCount})</p>
            </div>
          </div>
          <p className="body-sm text-gray5">총 {salesCount}개 판매됨</p>
        </div>
      </div>
    </div>
  )
}
