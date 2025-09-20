'use client'

import Header from '@/components/common/Header'
import Image from 'next/image'
import ProjectCard from '@/components/study/ProjectCard'

export default function StudyDetailPage() {
  return (
    <main>
      <Header headerType={'dynamic'} title={'GIT 해커톤'} />
      <div className="h-[60px]" />
      <div className="flex flex-col gap-y-5 px-5 pb-[60px]">
        <div className="relative h-[76px] w-full">
          <Image src={'/study/banner-image.png'} alt="배너 이미지" className="object-cover" fill></Image>
        </div>
        <p className="body-md">
          Korfit과 충북 pro 메이커센터에서 주최하는 1박 2일 글로벌 IT 해커톤으로 외국인들이 국내에서 겪는 문제를
          정의하고 솔루션을 제시하는 미션을 진행했다.
        </p>
        {/* 스터디 소개글 */}
        <section className="border-gray2 flex flex-col gap-y-3 rounded-[20px] border p-5">
          <div className="flex items-center">
            <div className="badge-sm text-gray4 w-[80px]">프로젝트 명</div>
            <p className="body-sm text-gray5">GIT 해커톤</p>
          </div>
          <div className="flex items-center">
            <div className="badge-sm text-gray4 w-[80px]">프로젝트 형태</div>
            <p className="body-sm text-gray5">외국 유학생과 함께하는 1박 2일 해커톤</p>
          </div>
          <div className="flex items-center">
            <div className="badge-sm text-gray4 w-[80px]">프로젝트 기간</div>
            <p className="body-sm text-gray5">2025. 09. 13 - 2025. 09. 14</p>
          </div>
          <div className="flex items-start">
            <div className="badge-sm text-gray4 w-[80px]">참여 인원</div>
            <div className="flex flex-col gap-y-1">
              <div className="flex gap-x-3">
                <div className="text-gray5 body-sm w-[60px] whitespace-nowrap">외국인</div>
                <div className="body-sm text-gray5">|</div>
                <div className="text-gray5 body-sm w-full">4명</div>
              </div>
              <div className="flex gap-x-3">
                <div className="text-gray5 body-sm w-[60px] whitespace-nowrap">내국인</div>
                <div className="body-sm text-gray5">|</div>
                <div className="text-gray5 body-sm w-full">21명</div>
              </div>
            </div>
          </div>
          <div className="bg-gray2 h-[188px] w-full rounded-[16px]"></div>
        </section>

        {/* 프로젝트 */}
        <section className="flex flex-col gap-y-[32px] px-[17.5px]">
          <ProjectCard
            description={'외국인 노동자의 안정적인 한국 생활과 정착을 돕는 플랫폼'}
            projectImageUrl={'/pizza.png'}
            projectName={'KORI'}
            teamName={'TOGETHER KOREA'}
          />
          <ProjectCard
            description={'외국인 노동자의 안정적인 한국 생활과 정착을 돕는 플랫폼'}
            projectImageUrl={'/pizza.png'}
            projectName={'KORI'}
            teamName={'TOGETHER KOREA'}
          />
          <ProjectCard
            description={'외국인 노동자의 안정적인 한국 생활과 정착을 돕는 플랫폼'}
            projectImageUrl={'/pizza.png'}
            projectName={'KORI'}
            teamName={'TOGETHER KOREA'}
          />
          <ProjectCard
            description={'외국인 노동자의 안정적인 한국 생활과 정착을 돕는 플랫폼'}
            projectImageUrl={'/pizza.png'}
            projectName={'KORI'}
            teamName={'TOGETHER KOREA'}
          />
          <ProjectCard
            description={'외국인 노동자의 안정적인 한국 생활과 정착을 돕는 플랫폼'}
            projectImageUrl={'/pizza.png'}
            projectName={'KORI'}
            teamName={'TOGETHER KOREA'}
          />
        </section>
      </div>
    </main>
  )
}
