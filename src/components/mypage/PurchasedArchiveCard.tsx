import Button from '@/components/common/Button'
import { PurchasedArchiveType } from '@/types/archive'
import Image from 'next/image'
import { DownloadIcon, StarIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'
import { useModalStore } from '@/store/modalStore'
import { useTranslation } from 'react-i18next'

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

  const { t } = useTranslation()

  const lang = localStorage.getItem('i18nextLng')

  return (
    <div
      onClick={() => {
        router.push(`/${lang}/archive/${passArchiveId}`)
      }}
      className="flex flex-col gap-y-[12px]"
    >
      {isReviewed ? null : (
        <div className="badge-md text-main bg-main-light w-fit rounded-[8px] px-2 py-1">
          {t('mypage.archive.purchased.noReviewMessage')}
        </div>
      )}

      <section className="flex items-center gap-x-[13px]">
        <div className="relative h-[84px] w-[80px] flex-shrink-0 whitespace-nowrap">
          <Image fill src={thumbnailUrl} alt={'섬네일'} className={'rounded-[12px] object-cover'} />
        </div>
        <div className="flex flex-col gap-y-1">
          <h1 className="subtitle-md">{title}</h1>
          <p className="body-sm text-gray5">{oneLineReview}</p>
          <p className="body-sm">
            {price.toLocaleString()}
            {t('mypage.archive.priceSymbol')}
          </p>
          <p className="small text-gray4">
            {approvedAt} {t('mypage.archive.purchased.paymentCompleted')}
          </p>
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
          {t('mypage.archive.purchased.button.download')}
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
            {t('mypage.archive.purchased.button.myReview')}
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
            {t('mypage.archive.purchased.button.addReview')}
          </Button>
        )}
      </section>
    </div>
  )
}
