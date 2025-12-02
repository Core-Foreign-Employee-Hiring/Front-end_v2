import Button from '@/components/common/Button'
import { PurchasedArchiveType } from '@/types/archive'
import Image from 'next/image'
import { DownloadIcon, StarIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'
import { useModalStore } from '@/store/modalStore'
import { getPassArchivesPassArchiveIdDownLoad } from '@/lib/archive'

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

  /**
   * 아카이브의 모든 파일을 로컬에 다운로드
   * @param passArchiveId - 아카이브 ID
   */
  const downloadPassArchive = async (passArchiveId: number): Promise<void> => {
    try {
      // 1. 파일 목록 가져오기
      const response = await getPassArchivesPassArchiveIdDownLoad(passArchiveId)

      if (!response.data || response.data.length === 0) {
        throw new Error('다운로드 가능한 파일이 없습니다')
      }

      // 2. 각 파일 순차적으로 다운로드
      for (const file of response.data) {
        if (!file?.fileUrl) {
          console.warn(`파일 URL을 받지 못했습니다: ${file?.originalFileName}`)
          continue
        }

        try {
          // 3. fileUrl에서 실제 파일 다운로드
          const fileResponse = await fetch(file.fileUrl)

          if (!fileResponse.ok) {
            throw new Error(`파일 다운로드 실패: ${fileResponse.statusText}`)
          }

          // 4. Blob으로 변환
          const blob = await fileResponse.blob()

          // 5. 임시 a 태그 생성해서 다운로드 트리거
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = file.originalFileName
          document.body.appendChild(link)
          link.click()

          // 6. 정리 (메모리 누수 방지)
          document.body.removeChild(link)
          window.URL.revokeObjectURL(url)

          // 브라우저 다운로드 대기열 관리를 위한 딜레이
          await new Promise((resolve) => setTimeout(resolve, 300))
        } catch (error) {
          console.error(`파일 다운로드 중 오류 (${file.originalFileName}):`, error)
        }
      }
    } catch (error) {
      console.error('아카이브 다운로드 중 오류:', error)
      throw error
    }
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
        <div className="relative h-[84px] w-[80px] flex-shrink-0 whitespace-nowrap">
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
          onClick={async () => {
            await downloadPassArchive(passArchiveId)
          }}
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
