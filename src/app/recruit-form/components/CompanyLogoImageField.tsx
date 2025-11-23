'use client'

import { AshbnIcon, UploadIcon } from '@/assets/svgComponents'
import Image from 'next/image'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { useRecruitStore } from '@/store/recruitStore'

interface FileInfo {
  name: string
  size: number
}

interface CompanyLogoImageFieldProps {
  setCompanyLogoFile: Dispatch<SetStateAction<File | null>>
}
export default function CompanyLogoImageField({ setCompanyLogoFile }: CompanyLogoImageFieldProps) {
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null)
  // [추가] input 클릭을 위한 내부 ref (파일 데이터 전송용 아님)
  const inputRef = useRef<HTMLInputElement>(null)
  const setState = useRecruitStore((state) => state.setState)
  const uploadImage = useRecruitStore((state) => state.s3CompanyLogoUrl)

  /**
   * 파일 크기를 읽기 쉬운 형태로 변환
   */
  const formatFileSize = (bytes: number | undefined): string => {
    if (bytes === 0 || bytes === undefined) return '0 Bytes'

    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  /**
   * 이미지 미리보기 설정
   */
  const handleImagePreview = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    const reader = new FileReader()

    if (files && files[0]) {
      const file = files[0]

      setCompanyLogoFile(file)

      // 파일 정보 저장
      setFileInfo({
        name: file.name,
        size: file.size,
      })

      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setState({ s3CompanyLogoUrl: reader.result })
      }
    }
  }

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">회사 로고</p>
      <div className="flex items-center gap-x-3">
        <p className="subtitle-md text-gray5">이미지 업로드</p>

        {/* [수정 1] onClick이 있는 div 안에서 input을 제거했습니다. */}
        <div
          onClick={() => inputRef.current?.click()}
          className="relative cursor-pointer" // cursor-pointer 추가 추천
        >
          <div className="border-gray2 flex h-[36px] items-center gap-x-2 rounded-[12px] border pr-4 pl-3">
            <UploadIcon width={20} height={20} />
            <p className="button text-gray5">파일 업로드</p>
          </div>
        </div>

        {/* [수정 2] input을 div 밖으로 뺐습니다. */}
        <input
          type="file"
          id={'company-logo-input'}
          ref={inputRef}
          // name 속성은 제거해도 됩니다 (ref 사용시 불필요)
          onChange={handleImagePreview}
          className="hidden"
          accept="image/*"
        />
      </div>
      {uploadImage && (
        <div className="border-gray2 flex items-center justify-between rounded-[16px] border px-5 py-[18px]">
          <div className="flex gap-x-2">
            <div className="relative h-[44px] w-[44px]">
              <Image
                src={typeof uploadImage === 'string' ? uploadImage : '/profile.jpg'}
                alt="cake"
                fill
                className="rounded-[3px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="body-sm">{fileInfo?.name}</p>
              <p className="small text-gray4">{formatFileSize(fileInfo?.size)}</p>
            </div>
          </div>
          <AshbnIcon
            onClick={() => {
              setState({ s3CompanyLogoUrl: null })
              setFileInfo(null)
            }}
            width={16}
            height={16}
          />
        </div>
      )}
    </div>
  )
}
