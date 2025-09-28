'use client'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function KorfitStudySectionMobile() {
  const router = useRouter()
  const controls5 = useAnimation()
  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView5) {
      controls5.start('visible')
    }
  }, [controls5, inView5])

  const controls7 = useAnimation()
  const [ref7, inView7] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView7) {
      controls7.start('visible')
    }
  }, [controls7, inView7])

  return (
    <div className="w-full bg-white pb-[40px]">
      <div className="relative w-full">
        <Image
          className="absolute top-3 left-30 object-cover"
          src={'/landing/top-arrow.svg'}
          alt={'/landing/top-arrow.svg'}
          width={101}
          height={77}
        />
        <div className="flex flex-col gap-y-2 pt-[54px] pl-[26px]">
          <p className="text-start font-['Pretendard_Variable'] text-[12px] leading-[150%] font-bold tracking-[-0.18px]">
            <span className="text-main">혼자가 아닌 ‘함께’</span>
            <br />
            korfit과 함께하는 취업역량 UP!
          </p>
          <p className="text-start font-['Pretendard_Variable'] text-[10px] leading-[150%] font-semibold tracking-[-0.15px]">
            전문가와 함께하는
            <br />
            2박 3일 취업 역량 UP! 프로그램
            <br />
            취업 역량 강화하고 협업에 강한 글로벌 인재로 <br />
            성장할 수 있어요.
          </p>
          <Image
            priority
            height={123}
            width={123}
            src={'/landing/together-img.svg'}
            alt={'/landing/together-img.svg'}
          />
        </div>

        <div className="absolute top-10 right-0">
          <div className="relative h-[244px] w-[170px]">
            <Image
              priority
              className="absolute z-10 object-cover"
              width={111}
              height={83}
              src={'/landing/study-img-1.svg'}
              alt={'/landing/study-img-1.svg'}
            />
            <Image
              priority
              className="absolute top-15 right-0 object-cover"
              width={113}
              height={84}
              src={'/landing/study-img-2.svg'}
              alt={'/landing/study-img-2.svg'}
            />
            <Image
              priority
              className="absolute top-32 object-cover"
              width={136}
              height={76}
              src={'/landing/study-img-3.svg'}
              alt={'/landing/study-img-3.svg'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
