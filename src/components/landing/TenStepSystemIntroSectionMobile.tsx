import Image from 'next/image'
import { AirplaneIcon } from '@/assets/svgComponents'
import Button from '@/components/common/Button'

export default function TenStepSystemIntroSectionMobile() {
  return (
    <div className="relative w-full">
      <section className="relative flex h-[204px] w-full flex-col items-center">
        <section className="absolute z-20 flex flex-col items-center justify-center gap-y-3 pt-[22px]">
          <div className="flex flex-col items-center justify-center gap-y-[7px]">
            <AirplaneIcon width={12} height={12} />
            <h1 className="subtitle-sm items-center text-center text-white">
              Kickstart your job in Korea
              <br />
              with a hiring roadmap for foreigners.
            </h1>
          </div>
        </section>

        <section className="absolute bottom-5 left-[26px] z-20 flex flex-col gap-y-1">
          <p className="font-['Pretendard_Variable'] text-[12px] leading-[150%] font-bold tracking-[-0.18px]">
            <span className="text-white">국내 유일</span>
            <br /> 10단계 역량 검증 시스템
          </p>
          <p className="font-['Pretendard_Variable'] text-[8px] leading-[150%] font-semibold tracking-[-0.12px]">
            korfit의 10단계의 역량 검증 시스템을 통해 <br />
            엄선된 글로벌 인재를 만나볼 수 있어요.
          </p>
        </section>

        <Image src={'/landing/mobile/bg-img1.png'} alt={'홈'} fill className="object-cover"></Image>
      </section>
      <Image
        src={'/landing/right-arrow.svg'}
        alt={'/landing/right-arrow.svg'}
        width={107}
        height={59}
        className="absolute top-49 left-20 z-30"
      />
      <Image
        src={'/landing/resume.svg'}
        alt={'/landing/resume.svg'}
        priority
        width={225}
        height={281}
        className="absolute top-30 -right-5 z-20"
      />
    </div>
  )
}
