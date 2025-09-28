import Image from 'next/image'

export default function AICareerNavigationSectionMobile() {
  return (
    <section className="relative w-[375px] bg-white">
      <div className="relative flex flex-col gap-y-1 pt-[120px] pb-[100px]">
        <p className="pl-[26px] font-['Pretendard_Variable'] text-[12px] leading-[150%] font-bold tracking-[-0.18px]">
          <span className="text-main">오직 나만을 위한</span>
          <br />
          AI 취업 내비게이션 & 코칭
        </p>
        <p className="pl-[26px] font-['Pretendard_Variable'] text-[10px] leading-[150%] font-semibold tracking-[-0.15px]">
          개인별 맞춤 AI 와 함께
          <br /> 취업 로드맵 설계, 이력서/자소서, <br />
          모의 면접 서비스,개인별 맞춤 강의, <br />
          자격증, 대외활동까지 <br />
          <span className="text-main">Korfit</span>과 함께해요!
        </p>
        <Image src={'/landing/mobile/bg-img2.png'} alt="배경" height={147} width={375} className="absolute bottom-0" />
        <Image
          src={'/landing/down-arrow.svg'}
          alt={'/landing/down-arrow.svg'}
          width={75}
          height={88}
          className="absolute top-50 left-30 z-30"
        />
      </div>
      <Image
        src={'/landing/recruitment-notice-img.svg'}
        alt={'/landing/line-image.svg'}
        priority
        width={225}
        height={141}
        className="absolute top-50 -right-5"
      />
    </section>
  )
}
