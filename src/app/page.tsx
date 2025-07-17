'use client'

import Header from '@/components/common/Header'
import RecruitCard from '@/components/recruit/RecruitCard'
import Footer from '@/components/common/Footer'
import Input from '@/components/common/Input'
import { useState } from 'react'
import { DropboxArrowDownIcon, GraySearchIcon } from '@/assets/svgComponents'

export default function Home() {
  const [value, setValue] = useState('')
  return (
    <div>
      <Header />
      <div className="desktop:h-[160px] h-[80px]" />
      <div className="desktop:mt-[60px] mt-5 flex flex-col gap-y-6 px-5 md:px-5 lg:px-[200px] xl:px-[200px] 2xl:px-[200px]">
        <Input
          leftIcon={<GraySearchIcon width={24} height={24} />}
          value={value}
          inputBoxStyle={'default'}
          placeholder={'채용 공고를 검색해보세요.'}
        />
        <div className="h-[232px] w-full bg-[#D9D9D9]"></div>
        <section>
          <div className="flex flex-col gap-y-3">
            <div className="title-lg">공고 전체</div>
            <p className="subtitle-lg text-main">
              34,231 <span className="text-black">건</span>
            </p>
            <section className="flex gap-x-2">
              <section className="border-gray2 flex h-[36px] w-fit items-center gap-x-2 rounded-[12px] border pr-3 pl-4">
                <div className="flex items-center gap-x-1">
                  <p className="button text-gray5">직종</p>
                  <div className="bg-main badge-md flex h-[20px] w-[20px] items-center justify-center rounded-full text-white">
                    1
                  </div>
                </div>
                <DropboxArrowDownIcon width={24} height={24} />
              </section>
              <section className="border-gray2 flex h-[36px] w-fit items-center gap-x-2 rounded-[12px] border pr-3 pl-4">
                <div className="flex items-center gap-x-1">
                  <p className="button text-gray5">계약형태</p>
                  <div className="bg-main badge-md flex h-[20px] w-[20px] items-center justify-center rounded-full text-white">
                    1
                  </div>
                </div>
                <DropboxArrowDownIcon width={24} height={24} />
              </section>
            </section>
          </div>

          <div className="desktop:grid-cols-4 desktop:gap-6 mt-[16px] grid grid-cols-2 gap-4">
            <RecruitCard recruitId={1} />
            <RecruitCard recruitId={2} />
            <RecruitCard recruitId={3} />
            <RecruitCard recruitId={4} />
            <RecruitCard recruitId={5} />
            <RecruitCard recruitId={6} />
            <RecruitCard recruitId={7} />
            <RecruitCard recruitId={8} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
