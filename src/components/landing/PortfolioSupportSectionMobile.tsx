import Image from 'next/image'

export default function PortfolioSupportSectionMobile() {
  return (
    <div className="relative flex w-[375px] items-end justify-end bg-white">
      <Image
        src={'/landing/mobile/bg-line.png'}
        alt={'/landing/mobile/bg-line.png'}
        width={435}
        height={394}
        className="absolute top-0"
      />
      <Image
        priority
        className="absolute top-8 -left-5 object-cover"
        src={'/landing/archive.svg'}
        alt={'/landing/archive.svg'}
        width={243}
        height={262}
      />
      <div className="flex flex-col gap-y-1 pt-[50px]">
        <div className="relative flex flex-col gap-y-1 pr-[26px]">
          <div className="absolute -top-5 right-8 h-[68px] w-[68px] rounded-full bg-[#5551F50A]"></div>

          <p className="text-end font-['Pretendard_Variable'] text-[12px] leading-[150%] font-bold tracking-[-0.18px]">
            <span className="text-main">
              정보가 없어 막막했던 <br />
            </span>
            한국 취업 준비 해결
          </p>
          <p className="text-end font-['Pretendard_Variable'] text-[10px] leading-[150%] font-semibold tracking-[-0.15px]">
            합격한 선배들의 포트폴리오와 <br />
            여러 조언들을 들을 수 있어요.
          </p>
        </div>

        <Image
          src={'/landing/left-arrow.svg'}
          alt={'/landing/left-arrow.svg'}
          width={90}
          height={40}
          className="z-20"
        />

        <div className="relative z-20 pt-[30px]">
          <div className="absolute h-[195px] w-[130px] rounded-full bg-[#5551F5] opacity-6 blur-lg" />
          <Image
            priority
            className="object-cover"
            src={'/landing/portfolio-bg-img.svg'}
            alt={'/landing/portfolio-bg-img.svg'}
            width={195}
            height={130}
          />
        </div>
      </div>
      {/*<Image src={'/landing/mobile/bg-line.png'} alt="선"></Image>*/}
    </div>
  )
}
