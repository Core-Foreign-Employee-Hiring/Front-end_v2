import Image from 'next/image'
import { CancelIcon, WhiteCancelIcon } from '@/assets/svgComponents'
import { Dispatch, SetStateAction } from 'react'

interface ImageModalProps {
  ImageUrl: string | undefined
  setSelectedImageUrl: Dispatch<SetStateAction<string | undefined>>
  setIsImageModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function ImageModal({ ImageUrl, setSelectedImageUrl, setIsImageModalOpen }: ImageModalProps) {
  const handleCloseModal = () => {
    setSelectedImageUrl(undefined)
    setIsImageModalOpen(false)
  }

  // 이미지 클릭 시 모달이 닫히지 않도록 이벤트 전파 중단
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] p-4"
    >
      <div className="relative" onClick={handleImageClick}>
        <button
          onClick={handleCloseModal}
          className="absolute -top-10 -right-10 z-60 flex cursor-pointer items-center gap-x-1 px-4 py-1 text-white transition-colors"
        >
          <p className="button text-white">닫기</p>
          <WhiteCancelIcon width={20} height={20} />
        </button>

        <Image
          src={ImageUrl || '/pizza.png'}
          alt="BottomModal Image"
          width={0}
          height={0}
          sizes="90vw"
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '90vw',
            maxHeight: '90vh',
          }}
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}
