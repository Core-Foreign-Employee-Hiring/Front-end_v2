import Image from 'next/image'
import { StarIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'
import { PassArchiveCardDataType } from '@/types/archive'

interface ArchiveCardProps extends PassArchiveCardDataType {}

export default function ArchiveCard({
  title,
  passArchiveId,
  star,
  starCount,
  price,
  oneLineReview,
  thumbnailUrl,
}: ArchiveCardProps) {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push(`/archive/${passArchiveId}`)
      }}
      className="flex flex-col gap-y-3"
    >
      <div className="relative h-[104px] w-full rounded-[16px]">
        <div className="absolute z-10 h-[104px] w-full rounded-[12px] bg-gradient-to-t from-white to-black opacity-40"></div>
        {thumbnailUrl ? (
          <Image src={thumbnailUrl} alt={title} fill className={'rounded-[16px] object-cover'} />
        ) : (
          <div className="bg-gray1 h-[104px] w-full rounded-[16px]" />
        )}
      </div>
      <section className="flex flex-col gap-y-1">
        <div className="subtitle-md">{title}</div>
        <p className="body-sm text-gray5 truncate">{oneLineReview}</p>
        <p className="subtitle-md">{price}원</p>
        <div className="flex items-center gap-x-1">
          <StarIcon width={20} height={20} />
          <div className="flex gap-x-[2px]">
            <p className="button">{star}</p>
            <p className="small text-gray5">({starCount})</p>
          </div>
        </div>
      </section>
    </div>
  )
}
