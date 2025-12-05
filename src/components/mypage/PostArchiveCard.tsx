import { StarIcon } from '@/assets/svgComponents'
import { PostArchiveType } from '@/types/archive'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

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

  const { t } = useTranslation()

  const lang = localStorage.getItem('i18nextLng')

  return (
    <div
      onClick={() => {
        router.push(`/${lang}/archive/${archiveId}`)
      }}
      className="border-gray2 flex flex-col gap-y-3 rounded-[32px] border p-5"
    >
      <div className="relative h-[140px] w-full min-w-[240px] shrink-0 whitespace-nowrap">
        <Image src={thumbnailUrl} alt={thumbnailUrl} fill className="rounded-[16px] object-cover" />
      </div>
      <div className="flex h-full flex-col justify-between gap-y-2">
        <div className="flex flex-col gap-y-1">
          <div className="flex w-full justify-between">
            <p className="subtitle-lg">{title}</p>
            <p className="subtitle-lg whitespace-nowrap">
              {price.toLocaleString()} {t('mypage.archive.priceSymbol')}
            </p>
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
          <p className="body-sm text-gray5">
            {t('mypage.archive.write.content1')} {salesCount}
            {t('mypage.archive.write.content2')}
          </p>
        </div>
      </div>
    </div>
  )
}
