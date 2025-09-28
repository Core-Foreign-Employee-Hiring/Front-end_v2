'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()
  return (
    <div className="flex w-[375px] flex-col items-center justify-center bg-[#F7F8F9]">
      <p className="pt-[30px] text-center font-['Pretendard_Variable'] text-[8px] leading-[150%] font-bold tracking-[-0.10px]">
        성공적인 채용과 정착을 위한
        <br />
        토탈 솔루션
      </p>
      <Image src={'/logo.svg'} alt="로고" width={46} height={14} className="pt-[11px]" />
      <button
        onClick={() => {
          router.push('/')
        }}
        className="bg-main my-[26px] h-[24px] w-[120px] rounded-full text-center font-['Pretendard_Variable'] text-[8px] leading-[150%] font-bold tracking-[-0.10px] text-white"
      >
        지금 바로 만나러가기
      </button>
    </div>
  )
}
