'use client'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function KorfitStudySection() {
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
    <section className="absolute top-650 flex flex-col items-center">
      <div className="relative" ref={ref5}>
        <div className="relative h-[1513px] w-[1455px]">
          <Image
            className="object-cover"
            style={{ transform: 'rotate(11deg)' }}
            src={'/landing/draw2.png'}
            alt={'/landing/draw2.png'}
            fill
          />
        </div>

        <div className="absolute top-120 right-220">
          <div className="relative flex flex-col">
            <motion.div
              className="absolute top-0"
              initial="hidden"
              animate={controls5}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
              }}
            >
              <div className="relative h-[322px] w-[412px]">
                <Image
                  priority
                  className="z-10 object-cover"
                  fill
                  src={'/landing/study-img-1.svg'}
                  alt={'/landing/study-img-1.svg'}
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-50 left-80"
              initial="hidden"
              animate={controls5}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
              }}
            >
              <div className="relative h-[282px] w-[375px]">
                <Image
                  priority
                  className="object-cover"
                  fill
                  src={'/landing/study-img-2.svg'}
                  alt={'/landing/study-img-2.svg'}
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-105 left-20"
              initial="hidden"
              animate={controls5}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
              }}
            >
              <div className="relative h-[255px] w-[509px]">
                <Image
                  priority
                  className="object-cover"
                  fill
                  src={'/landing/study-img-3.svg'}
                  alt={'/landing/study-img-3.svg'}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          ref={ref5}
          className="absolute top-91 left-75"
          initial="hidden"
          animate={controls5}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <div className="relative h-[256px] w-[337px]">
            <Image className="object-cover" fill src={'/landing/top-arrow.svg'} alt={'/landing/top-arrow.svg'} />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-130 left-40 flex flex-col"
          initial="hidden"
          animate={controls5}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
          }}
        >
          <div className="bg-main ml-1 h-[9px] w-[9px] rounded-full" />
          <div className="title-lg">
            <p className="text-main">혼자가 아닌 '함께'</p>
            <p>korfit과 함께하는 취업역량 UP!</p>
          </div>
          <div className="title-md mt-[25px]">
            전문가와 함께하는
            <br /> 2박 3일 취업 역량 UP! 프로그램
            <br /> 취업 역량 강화하고 협업에 강한 글로벌 인재로
            <br /> 성장할 수 있어요.
          </div>
        </motion.div>

        <div className="absolute top-190 left-40">
          <div className="relative h-[410px] w-[410px]">
            <Image
              priority
              className="object-cover"
              fill
              src={'/landing/together-img.svg'}
              alt={'/landing/together-img.svg'}
            />
          </div>
        </div>
      </div>

      <motion.div
        ref={ref7}
        className="mb-[150px] flex h-[510px] w-[1254px] flex-col items-center justify-center bg-[#F7F8F9]"
        initial="hidden"
        animate={controls7}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <p className="title-lg text-center">
          성공적인 채용과 정착을 위한
          <br />
          토탈 솔루션
        </p>
        <div className="relative mt-[38px] h-[48px] w-[154px]">
          <Image className="object-cover" fill src={'/logo.svg'} alt={'/logo.svg'} />
        </div>
        <button
          onClick={() => {
            router.push('/')
          }}
          className="title-lg bg-main mt-[87px] h-[80px] w-[400px] cursor-pointer rounded-full text-white"
        >
          지금 바로 만나러가기
        </button>
      </motion.div>
    </section>
  )
}
