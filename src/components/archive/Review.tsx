import { StarIcon } from '@/assets/svgComponents'

export default function Review() {
  return (
    <div className="border-gray2 flex flex-col gap-y-3 border-b px-5 py-4">
      <section className="flex justify-between">
        <div className="flex items-center gap-x-1">
          <StarIcon width={20} height={20} />
          <p className="badge-md">4.0</p>
        </div>
        <p className="small text-gray4">4분 전 작성</p>
      </section>
      <p className="body-md">
        오전 11시부터 오후 8시까지 종일알바를 하고있습니다! 지금 이틀째인데 하는 업무가 음식점에서 하는 알바라서 여러
        일들을 하고 최저시급을 받고....
      </p>
    </div>
  )
}
