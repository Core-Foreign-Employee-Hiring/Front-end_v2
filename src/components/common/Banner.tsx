import { AirplaneIcon } from '@/assets/svgComponents'
import Button from '@/components/common/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Banner() {
  const router = useRouter()
  return (
    <div className="relative flex h-[204px] flex-col items-center justify-center rounded-[32px]">
      <div className="absolute z-20 flex flex-col items-center justify-center gap-y-3">
        <div className="flex flex-col items-center justify-center gap-y-[7px]">
          <AirplaneIcon width={18} height={18} />
          <h1 className="title-md text-white">
            Your first step at Korea
            <br />
            Korfit will be with you.
          </h1>
        </div>
        <Button
          onClick={() => {
            router.push('/landing')
          }}
          size={'sm'}
          type={'outline'}
          customClassName={'bg-white rounded-[12px] hover:shadow-md hover:duration-75 transition cursor-pointer'}
        >
          What is Korfit? →
        </Button>
      </div>

      <Image src={'/home-image.png'} alt={'홈'} fill className="object-cover" priority></Image>
    </div>
  )
}
