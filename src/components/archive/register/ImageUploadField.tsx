// components/archive/register/ImageUploadField.tsx
import Button from '@/components/common/Button'
import { UploadIcon } from '@/assets/svgComponents'
import UploadFileItem from '@/components/common/UploadFileItem'
import { useRef } from 'react'

interface ImageUploadFieldProps {
  imageFiles: File[]
  setImageFiles: (files: File[]) => void
}

export default function ImageUploadField({ imageFiles, setImageFiles }: ImageUploadFieldProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    if (files.length > 0) {
      setImageFiles([...imageFiles, ...files])
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveFile = (index: number) => {
    const newFiles = imageFiles.filter((_, i) => i !== index)
    setImageFiles(newFiles)
  }

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        이미지 <span className="text-main">*</span>
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
      <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFileSelect} className="hidden" />
      <div className="flex flex-col gap-y-2">
        {imageFiles.map((file, index) => (
          <UploadFileItem key={`${file.name}-${index}`} file={file} onRemove={() => handleRemoveFile(index)} />
        ))}
      </div>
    </div>
  )
}
