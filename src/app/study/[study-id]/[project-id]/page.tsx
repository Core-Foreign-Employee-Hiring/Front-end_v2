'use client'

import Header from '@/components/common/Header'
import Button from '@/components/common/Button'
import Image from 'next/image'
import { GrayRightArrowIcon } from '@/assets/svgComponents'

export default function ProjectDetailPage() {
  return (
    <main className="relative mx-auto min-h-screen w-[375px] bg-white">
      <div className="">
        <Header headerType={'dynamic'} title={'KORI'} />
        <div className="h-[40px]" />
        <div className="mt-[32px] flex flex-col gap-y-[20px] px-5">
          <section className="flex justify-between">
            <div className="relative h-[32px] w-[93px]">
              <Image src={'/logo.svg'} alt={'로고'} className="object-cover" fill />
            </div>
            <Button
              onClick={() => {}}
              type={'outline'}
              size={'sm'}
              rightIcon={<GrayRightArrowIcon width={12} height={12} />}
            >
              바로가기
            </Button>
          </section>
          <p className="body-md">
            KORI는 KOR’ea + 고‘리’의 의미를 담아 외국인 노동자의 안정적인 한국 생활과 정착을 돕는 플랫폼입니다. 앱을
            통해 맞춤형 안전·직무 교육을 제공하고, 학습 기록은 자동으로 포트폴리오(이수증)로 정리됩니다. 정부와
            사업주에게는 참여율 데이터를 제공하며, 학습자에게는 포인트와 인센티브를 통해 지속적인 학습을 유도합니다.
          </p>
          <section className="border-gray2 flex flex-col gap-y-3 rounded-[20px] border p-5">
            <div className="flex items-center">
              <div className="badge-sm text-gray4 w-[80px]">프로젝트 설명</div>
              <p className="body-sm text-gray5">GIT 해커톤</p>
            </div>
            <div className="flex items-center">
              <div className="badge-sm text-gray4 w-[80px]">프로젝트 형태</div>
              <p className="body-sm text-gray5">웹/앱</p>
            </div>
            <div className="flex items-center">
              <div className="badge-sm text-gray4 w-[80px]">프로젝트 기간</div>
              <p className="body-sm text-gray5">2025. 09. 13 - 2025. 09. 14</p>
            </div>
            <div className="flex">
              <div className="badge-sm text-gray4 w-[80px]">팀 구성</div>
              <div className="flex flex-col gap-y-1">
                <div className="body-sm text-gray5 flex items-center gap-x-3">
                  <div className="w-[60px]">기획</div>
                  <p>|</p>
                  <p>이수민, 정재원</p>
                </div>
                <div className="body-sm text-gray5 flex items-center gap-x-3">
                  <div className="w-[60px]">디자인</div>
                  <p>|</p>
                  <p>김예림</p>
                </div>
                <div className="body-sm text-gray5 flex items-center gap-x-3">
                  <div className="w-[60px]">개발</div>
                  <p>|</p>
                  <p>최태진, Rashed</p>
                </div>
              </div>
            </div>
            <div className="relative h-[188px] w-full rounded-[16px]">
              <Image src={'/pizza.png'} alt="사진" className="rounded-[16px] object-cover" fill></Image>
            </div>
          </section>
        </div>
        <></>
      </div>
    </main>
  )
}
