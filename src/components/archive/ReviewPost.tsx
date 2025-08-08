import { GrayCommentIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

interface ReviewPostProps {
  title: string
}

export default function ReviewPost({ title }: ReviewPostProps) {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push('/review/1')
      }}
      className="border-gray2 flex flex-col gap-y-3 rounded-[32px] border px-8 py-6"
    >
      <div className="flex flex-col gap-y-1">
        <h1 className="subtitle-lg">{title}</h1>
        <p className="subtitle-md">30,000원</p>
        <p className="body-md text-gray5">
          오전 11시부터 오후 8시까지 종일알바를 하고있습니다! 지금 이틀째인데 하는 업무가 음식점에서 하는 알바라서 여러
          일들을 하고 최저시급을 받고....
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <GrayCommentIcon width={16} height={16} />
          <p className="badge-sm text-gray4">5</p>
        </div>
        <p className="small text-gray4">4분 전 작성</p>
      </div>
    </div>
  )
}
