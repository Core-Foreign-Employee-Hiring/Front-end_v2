'use client'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function AICareerNavigationSection() {
  const controls3 = useAnimation()
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView3) {
      controls3.start('visible')
    }
  }, [controls3, inView3])
  return (
    <section className="relative mt-85 flex flex-col items-center">
      <motion.div
        ref={ref3}
        className="absolute top-29 left-120 z-20"
        initial="hidden"
        animate={controls3}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <Image src={'/landing/down-arrow.svg'} alt={'/landing/down-arrow.svg'} width={254} height={294} />
      </motion.div>
      <Image src={'/landing/line-image.svg'} alt={'/landing/line-image.svg'} width={1450} height={277} />
      <motion.div
        className="absolute top-80 right-45"
        initial="hidden"
        animate={controls3}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
        }}
      >
        <Image
          src={'/landing/recruitment-notice-img.svg'}
          alt={'/landing/line-image.svg'}
          priority
          width={616}
          height={387}
        />
      </motion.div>
      <Image className="" src={'/landing/bg-img2.svg'} alt={'/landing/bg-img2.svg'} width={1254} height={493} />
      <motion.div
        className="absolute top-90 left-50 flex flex-col gap-y-[21px]"
        initial="hidden"
        animate={controls3}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
        }}
      >
        <div className="title-lg">
          <div className="bg-main ml-1 h-[9px] w-[9px] rounded-full" />
          <p className="text-main">오직 나만을 위한</p>
          <p>AI 취업 내비게이션 & 코칭</p>
        </div>
        <p className="title-sm">
          개인별 맞춤 AI 와 함께
          <br /> 취업 로드맵 설계, 이력서/자소서,
          <br /> 모의 면접 서비스,
          <br />
          개인별 맞춤 강의, 자격증, <br /> 대외활동까지 <span className="text-main">Korfit</span>과 함께해요!
        </p>
      </motion.div>
    </section>
  )
}
