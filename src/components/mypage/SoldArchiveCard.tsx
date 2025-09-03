import { SoldArchiveType } from '@/types/archive'
import { useRouter } from 'next/navigation'

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
  return (
    <section
      onClick={() => {
        router.push(`/archive/${archiveId}`)
      }}
      className="border-gray1 border-b px-5 py-4"
    >
      {isWithdrawn ? <p className="text-main badge-sm">인출완료 {withdrawalAt}</p> : null}
      <div className="flex justify-between">
        <h2 className={`${isWithdrawn ? 'text-gray4' : 'text-black'} subtitle-lg`}>{title}</h2>
        <p className={`${isWithdrawn ? 'text-gray4' : 'text-black'} subtitle-lg`}>{price}원</p>
      </div>
      <div className="flex justify-between">
        <p className={`${isWithdrawn ? 'text-gray4' : 'text-gray5'} body-md`}>{oneLineReview}</p>
        <p className="body-sm text-gray4">{soldAt}</p>
      </div>
    </section>
  )
}
