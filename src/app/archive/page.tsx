'use client'

import Header from '@/components/common/Header'
import { useState } from 'react'
import Menu from '@/components/common/Menu'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { GraySearchIcon } from '@/assets/svgComponents'
import ArchiveCard from '@/components/archive/ArchiveCard'

const ReviewPage = () => {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  return (
    <>
      <Header isHomeMenuOpen={isHomeMenuOpen} setIsHomeMenuOpen={setIsHomeMenuOpen} />
      <div className="h-[112px]"></div>
      {isHomeMenuOpen ? (
        <Menu setIsHomeMenuOpen={setIsHomeMenuOpen} />
      ) : (
        <main className="px-5">
          <section className="flex flex-col gap-y-3 whitespace-nowrap">
            <h1 className="title-lg">합격 아카이브</h1>
            <div className="subtitle-lg flex gap-x-[5px]">
              <p className="text-main">3333</p> <p>건</p>
            </div>
            <div className="flex gap-x-3">
              <Input
                leftIcon={<GraySearchIcon width={24} height={24} />}
                inputBoxStyle={'default'}
                placeholder={'궁금한 아카이브를 검색해보세요.'}
                value={''}
                customClassName={'w-full'}
              />
              <Button onClick={() => {}} type={'active'} size={'lg'} customClassName={'whitespace-nowrap w-[80px]'}>
                등록하기
              </Button>
            </div>
          </section>
          <section className="mt-5 grid grid-cols-2 gap-4">
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
          </section>
        </main>
      )}
    </>
  )
}
export default ReviewPage
