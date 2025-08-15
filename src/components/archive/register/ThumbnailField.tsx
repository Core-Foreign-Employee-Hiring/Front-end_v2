// components/archive/register/ThumbnailField.tsx
import Button from '@/components/common/Button'
import { UploadIcon } from '@/assets/svgComponents'
import UploadFileItem from '@/components/common/UploadFileItem'
import { useRef } from 'react'

interface ThumbnailFieldProps {
  thumbnailFile: File | null
  setThumbnailFile: (file: File | null) => void
}

export default function ThumbnailField({ thumbnailFile, setThumbnailFile }: ThumbnailFieldProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setThumbnailFile(file)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveFile = () => {
    setThumbnailFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        썸네일 <span className="text-main">*</span>
      </p>
      <Button
        size={'sm'}
        onClick={handleUploadClick}
        leftIcon={<UploadIcon width={20} height={20} />}
        type={'outline'}
        customClassName={'h-[36px] w-fit pl-3 pr-4'}
      >
        이미지 업로드
      </Button>
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
      {thumbnailFile && <UploadFileItem file={thumbnailFile} onRemove={handleRemoveFile} />}
    </div>
  )
}
