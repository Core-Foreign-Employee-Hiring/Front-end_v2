import Header from '@/components/common/Header'
import TitleField from '@/components/archive/register/TitleField'
import SummaryField from '@/components/archive/register/SummaryField'
import DescriptionField from '@/components/archive/register/DescriptionField'
import ThumbnailField from '@/components/archive/register/ThumbnailField'
import ImageUploadField from '@/components/archive/register/ImageUploadField'
import ProductUploadField from '@/components/archive/register/ProductUploadField'
import PriceField from '@/components/archive/register/PriceField'
import Button from '@/components/common/Button'
import { useState } from 'react'
import Menu from '@/components/common/Menu'

export default function ArchiveRegisterForm() {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  return (
    <main>
      <Header setIsHomeMenuOpen={setIsHomeMenuOpen} isHomeMenuOpen={isHomeMenuOpen} />
      {isHomeMenuOpen ? (
        <Menu setIsHomeMenuOpen={setIsHomeMenuOpen} />
      ) : (
        <>
          <div className="h-[112px]" />
          <div className="flex flex-col gap-y-[40px] px-5">
            <h1 className="title-md">합격 아카이브 등록</h1>
            <section className="flex flex-col gap-y-[32px]">
              <TitleField />
              <SummaryField />
              <DescriptionField />
              <ThumbnailField />
              <ImageUploadField />
              <ProductUploadField />
              <PriceField />
            </section>
            <section className="flex gap-x-4 pb-[40px]">
              <Button onClick={() => {}} size={'lg'} type={'outline'} customClassName={'w-full'}>
                이전
              </Button>
              <Button onClick={() => {}} size={'lg'} type={'active'} customClassName={'w-full'}>
                완료
              </Button>
            </section>
          </div>
        </>
      )}
    </main>
  )
}
