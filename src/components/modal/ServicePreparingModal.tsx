import { Dispatch, SetStateAction } from 'react'
import ErrorModal from '@/components/common/ErrorModal'

interface ServicePreparingModalProps {
  functionContent: string
  setIsServicePreparingModalOpen: Dispatch<SetStateAction<boolean>>
  isServicePreparingModalOpen: boolean
}

export default function ServicePreparingModal({
  functionContent,
  isServicePreparingModalOpen,
  setIsServicePreparingModalOpen,
}: ServicePreparingModalProps) {
  return (
    <ErrorModal
      isModalOpen={isServicePreparingModalOpen}
      setIsModalOpen={setIsServicePreparingModalOpen}
      content={`'${functionContent}'기능은 현재 서비스 준비중입니다.`}
    />
  )
}
