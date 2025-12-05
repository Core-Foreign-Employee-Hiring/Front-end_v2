import { SoldArchiveType } from '@/types/archive'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

interface SoldArchiveCardProps extends SoldArchiveType {}
export default function SoldArchiveCard({
  title,
  archiveId,
  soldAt,
  price,
  oneLineReview,
  withdrawalAt,
  isWithdrawn,
}: SoldArchiveCardProps) {
  const router = useRouter()
  const { t } = useTranslation()
  const lang = localStorage.getItem('i18nextLng')
  return (
    <section
      onClick={() => {
        router.push(`/${lang}/archive/${archiveId}`)
      }}
      className="border-gray1 border-b px-5 py-4"
    >
      {isWithdrawn ? (
        <p className="text-main badge-sm">
          {t('archive.sold.withdrawn')} {withdrawalAt}
        </p>
      ) : null}
      <div className="flex justify-between">
        <h2 className={`${isWithdrawn ? 'text-gray4' : 'text-black'} subtitle-lg`}>{title}</h2>
        <p className={`${isWithdrawn ? 'text-gray4' : 'text-black'} subtitle-lg whitespace-nowrap`}>
          {price}
          {t('mypage.archive.priceSymbol')}
        </p>
      </div>
      <div className="flex justify-between">
        <p className={`${isWithdrawn ? 'text-gray4' : 'text-gray5'} body-md`}>{oneLineReview}</p>
        <p className="body-sm text-gray4 whitespace-nowrap">{soldAt}</p>
      </div>
    </section>
  )
}
