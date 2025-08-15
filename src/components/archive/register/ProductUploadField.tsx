// components/archive/register/ProductUploadField.tsx
import Button from '@/components/common/Button'
import { UploadIcon } from '@/assets/svgComponents'
import UploadFileItem from '@/components/common/UploadFileItem'
import { useRef } from 'react'

interface ProductUploadFieldProps {
  productFiles: File[]
  setProductFiles: (files: File[]) => void
}

export default function ProductUploadField({ productFiles, setProductFiles }: ProductUploadFieldProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    if (files.length > 0) {
      setProductFiles([...productFiles, ...files])
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveFile = (index: number) => {
    const newFiles = productFiles.filter((_, i) => i !== index)
    setProductFiles(newFiles)
  }

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        판매할 상품 <span className="text-main">*</span>
      </p>
      <Button
        size={'sm'}
        onClick={handleUploadClick}
        leftIcon={<UploadIcon width={20} height={20} />}
        type={'outline'}
        customClassName={'h-[36px] w-fit pl-3 pr-4'}
      >
        파일 업로드
      </Button>
      <input
        ref={fileInputRef}
        type="file"
        accept="*/*" // 모든 파일 형식 허용
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />
      <div className="flex flex-col gap-y-2">
        {productFiles.map((file, index) => (
          <UploadFileItem key={`${file.name}-${index}`} file={file} onRemove={() => handleRemoveFile(index)} />
        ))}
      </div>
    </div>
  )
}
