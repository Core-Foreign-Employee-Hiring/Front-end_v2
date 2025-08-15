import { StarIcon } from '@/assets/svgComponents'
import { PassArchiveReviewDataType } from '@/types/archive'
import { formatRelativeTime } from '@/utils/common'

interface ReviewProps extends PassArchiveReviewDataType {}

export default function Review({ archiveReviewId, star, content, createdAt }: ReviewProps) {
  return (
    <div className="border-gray2 flex flex-col gap-y-3 border-b px-5 py-4">
      <section className="flex justify-between">
        <div className="flex items-center gap-x-1">
          <StarIcon width={20} height={20} />
          <p className="badge-md">{star}</p>
        </div>
        <p className="small text-gray4">{formatRelativeTime(createdAt)} 작성</p>
      </section>
      <p className="body-md">{content}</p>
    </div>
  )
}
