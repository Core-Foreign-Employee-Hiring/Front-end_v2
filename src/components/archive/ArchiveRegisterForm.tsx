'use client'

import Header from '@/components/common/Header'
import TitleField from '@/components/archive/register/TitleField'
import SummaryField from '@/components/archive/register/SummaryField'
import DescriptionField from '@/components/archive/register/DescriptionField'
import ThumbnailField from '@/components/archive/register/ThumbnailField'
import ImageUploadField from '@/components/archive/register/ImageUploadField'
import ProductUploadField from '@/components/archive/register/ProductUploadField'
import PriceField from '@/components/archive/register/PriceField'
import Button from '@/components/common/Button'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Menu from '@/components/common/Menu'
import { useArchiveStore } from '@/store/archiveStore'
import { postArchiveData } from '@/lib/archive'
import LanguageSelectModal from '@/components/modal/LanguageSelectModal'
import InquiryUrlField from '@/components/archive/register/InquiryUrlField'

interface ArchiveRegisterFormProps {
  setIsArchiveRegisterFormOpen: Dispatch<SetStateAction<boolean>>
}

export default function ArchiveRegisterForm({ setIsArchiveRegisterFormOpen }: ArchiveRegisterFormProps) {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  const archiveData = useArchiveStore((state) => state.archiveData)
  const setState = useArchiveStore((state) => state.setState)

  // 파일 상태 수정
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [productFiles, setProductFiles] = useState<File[]>([])
  const [isLoading, setIsLoading] = useState(false)

  //언어 선택 모달창 제어
  const [isLanguageSelectModalOpen, setIsLanguageSelectModalOpen] = useState(false)

  useEffect(() => {
    console.log('archiveData', archiveData)
  }, [archiveData])

  useEffect(() => {
    console.log('imageFiles', imageFiles)
  }, [imageFiles])

  const createUploadFormData = () => {
    const formData = new FormData()

    // archiveData 추가
    if (archiveData) formData.append('data', JSON.stringify(archiveData))

    // 썸네일 추가
    if (thumbnailFile) {
      formData.append('thumbnail', thumbnailFile)
    }

    // 이미지들 추가
    imageFiles.forEach((file) => {
      formData.append('images', file)
    })

    // 제품들 추가
    productFiles.forEach((file) => {
      formData.append('products', file)
    })

    return formData
  }

  const handleSubmit = async () => {
    if (!productFiles) {
      alert('판매할 상품을 업로드해주세요.')
      return
    }

    try {
      setIsLoading(true)
      const formData = createUploadFormData()
      const result = await postArchiveData(formData)
      if (result.success) {
        setState({ archiveData: undefined })
        setIsArchiveRegisterFormOpen(false)
      }
      console.log('업로드 성공:', result)
      // 성공 처리 로직
    } catch (error) {
      console.error('업로드 실패:', error)
      alert('업로드에 실패했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      {isLanguageSelectModalOpen ? (
        <LanguageSelectModal
          isLanguageSelectModalOpen={isLanguageSelectModalOpen}
          setIsLanguageSelectModalOpen={setIsLanguageSelectModalOpen}
        />
      ) : null}
      <Header
        isLanguageSelectModalOpen={isLanguageSelectModalOpen}
        setIsLanguageSelectModalOpen={setIsLanguageSelectModalOpen}
        setIsHomeMenuOpen={setIsHomeMenuOpen}
        isHomeMenuOpen={isHomeMenuOpen}
      />
      {isHomeMenuOpen ? (
        <Menu setIsHomeMenuOpen={setIsHomeMenuOpen} />
      ) : (
        <>
          <div className="" />
          <div className="relative mx-auto flex min-h-screen w-[375px] flex-col gap-y-[40px] bg-white px-5 pt-[112px]">
            <h1 className="title-md">합격 아카이브 등록</h1>
            <section className="flex flex-col gap-y-[32px]">
              <TitleField />
              <SummaryField />
              <DescriptionField />
              <ThumbnailField thumbnailFile={thumbnailFile} setThumbnailFile={setThumbnailFile} />
              <ImageUploadField imageFiles={imageFiles} setImageFiles={setImageFiles} />
              <ProductUploadField productFiles={productFiles} setProductFiles={setProductFiles} />
              <InquiryUrlField />
              <PriceField />
            </section>
            <section className="flex gap-x-4 pb-[40px]">
              <Button
                buttonType={'button'}
                onClick={() => {
                  setIsArchiveRegisterFormOpen(false)
                  setState({ archiveData: undefined })
                }}
                size={'lg'}
                type={'outline'}
                customClassName={'w-full'}
              >
                이전
              </Button>
              <Button
                buttonType={'submit'}
                onClick={handleSubmit}
                size={'lg'}
                type={'active'}
                customClassName={'w-full'}
                disabled={isLoading}
              >
                {isLoading ? '업로드 중...' : '완료'}
              </Button>
            </section>
          </div>
        </>
      )}
    </main>
  )
}
