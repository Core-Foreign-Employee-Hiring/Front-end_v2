'use client'

import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function TenStepSystemIntroSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // 30% 보이면 실행
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const controls2 = useAnimation()
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView2) {
      controls2.start('visible')
    }
  }, [controls2, inView2])

  return (
    <>
      <section>
        <section className="relative h-[685px] w-[1254px]">
          <div className="absolute h-[685px] w-[1254px]">
            <Image
              className="absolute z-10 object-cover"
              src={'/landing/bg-img.png'}
              alt={'/landing/bg-img.png'}
              width={1254}
              height={685}
            />
          </div>
          <motion.div
            ref={ref}
            className="absolute top-25 left-70 z-30 flex flex-col items-center justify-center"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <Image src={'/landing/airport_icon.svg'} alt={'비행기'} width={40} height={40} />
            <h1 className="title-lg text-center text-[41px] text-white">
              Kickstart your job in Korea <br />
              with a hiring roadmap for foreigners.
            </h1>
          </motion.div>
        </section>
        <motion.div
          ref={ref2}
          className="absolute top-138 right-80 z-10 object-cover"
          initial="hidden"
          animate={controls2}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <Image src={'/landing/resume.svg'} alt={'/landing/resume.svg'} width={616} height={770} />
        </motion.div>
      </section>
      <motion.div
        className="absolute top-140 left-90 z-20 flex flex-col gap-y-[21px]"
        initial="hidden"
        animate={controls2}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
        }}
      >
        <div className="title-lg relative flex flex-col">
          <p className="text-white">국내 유일</p>
          <p>10단계 역량 검증 시스템</p>
          <div className="absolute top-16 h-[8px] w-[70px] bg-white opacity-30" />
        </div>

        <p className="title-sm">
          korfit의 10단계의 역량 검증 시스템을 통해 <br />
          엄선된 글로벌 인재를 만나볼 수 있어요.
        </p>
      </motion.div>

      <motion.div
        className="absolute top-180 left-95 z-10"
        initial="hidden"
        animate={controls2}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
        }}
      >
        <Image src={'/landing/right-arrow.svg'} alt={'/landing/right-arrow.svg'} width={442} height={246} />
      </motion.div>
    </>
  )
}
