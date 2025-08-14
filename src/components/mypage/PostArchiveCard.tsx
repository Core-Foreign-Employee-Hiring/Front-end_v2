import { StarIcon } from '@/assets/svgComponents'

export default function PostArchiveCard() {
  return (
    <div className="border-gray2 flex flex-col gap-y-3 rounded-[32px] border p-5">
      <div className="bg-gray3 h-[140px] w-[240px] rounded-[16px]" />
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-1">
          <div className="flex w-full justify-between">
            <p className="subtitle-lg">Title</p>
            <p className="subtitle-lg">129,550원</p>
          </div>
          <p className="body-sm text-gray5">한줄 설명</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <StarIcon width={16} height={15} />
            <div className="flex items-center gap-x-[2px]">
              <p className="badge-md">4.6</p>
              <p className="body-sm text-gray5">(10)</p>
            </div>
          </div>
          <p className="body-sm text-gray5">총 5개 판매됨</p>
        </div>
      </div>
    </div>
  )
}
