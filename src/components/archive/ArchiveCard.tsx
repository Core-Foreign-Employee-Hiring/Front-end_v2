import Image from 'next/image'
import { StarIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

export default function ArchiveCard() {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push('/archive/1')
      }}
      className="flex flex-col gap-y-3"
    >
      <div className="relative h-[104px] w-full rounded-[16px]">
        <div className="absolute z-10 h-[133px] w-full rounded-[12px] bg-gradient-to-t from-white to-black opacity-40"></div>
        <Image src={'/pizza.png'} alt={'/pizza.png'} fill className={'rounded-[16px] object-cover'} />
      </div>
      <section className="flex flex-col gap-y-1">
        <div className="subtitle-md">title1</div>
        <p className="body-sm text-gray5">한줄설명</p>
        <p className="subtitle-md">124,999원</p>
        <div className="flex items-center gap-x-1">
          <StarIcon width={20} height={20} />
          <div className="flex gap-x-[2px]">
            <p className="button">4.6</p>
            <p className="small text-gray5">(small)</p>
          </div>
        </div>
      </section>
    </div>
  )
}
