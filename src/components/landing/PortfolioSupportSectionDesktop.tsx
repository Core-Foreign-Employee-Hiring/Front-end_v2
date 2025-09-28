'use client'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function PortfolioSupportSectionDesktop() {
  const controls4 = useAnimation()
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView4) {
      controls4.start('visible')
    }
  }, [controls4, inView4])

  return (
    <section className="relative z-10 mt-[74px] flex flex-col items-center">
      <div className="ml-20 flex">
        <div className="absolute h-[512px] w-[512px] rounded-full bg-[#5551F5] opacity-6 blur-lg" />
        <motion.div
          ref={ref4}
          className="relative z-10 ml-20 h-[900px] w-[724px]"
          initial="hidden"
          animate={controls4}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <Image priority className="object-cover" src={'/landing/archive.svg'} alt={'/landing/archive.svg'} fill />
        </motion.div>

        <motion.div
          className="title-lg absolute top-20 right-60 flex flex-col"
          initial="hidden"
          animate={controls4}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
          }}
        >
          <div className="relative flex flex-col items-end">
            <div className="absolute right-20 bottom-0 h-[228px] w-[228px] rounded-full bg-[#5551F50A]"></div>
            <div>
              <div className="bg-main ml-1 h-[9px] w-[9px] rounded-full"></div>
              <div className="flex flex-col items-end">
                <p className="text-main">정보가 없어 막막했던</p>
                <p>한국 취업 준비 해결</p>
              </div>
            </div>
            <p className="title-sm mt-[25px]">
              합격한 선배들의 포트폴리오와
              <br /> 여러 조언들을 들을 수 있어요.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-60 right-100 z-20"
          initial="hidden"
          animate={controls4}
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
          }}
        >
          <Image src={'/landing/left-arrow.svg'} alt={'/landing/left-arrow.svg'} width={328} height={220} />
        </motion.div>

        <div className="relative top-100 right-40 z-20">
          <div className="absolute h-[512px] w-[512px] rounded-full bg-[#5551F5] opacity-6 blur-lg" />
          <Image
            priority
            className="object-cover"
            src={'/landing/portfolio-bg-img.svg'}
            alt={'/landing/portfolio-bg-img.svg'}
            width={650}
            height={433}
          />
        </div>
      </div>
    </section>
  )
}
