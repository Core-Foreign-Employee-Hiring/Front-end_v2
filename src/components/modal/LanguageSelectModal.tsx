import MiddleModal from '@/components/common/MiddleModal'
import Button from '@/components/common/Button'
import { CheckIcon } from '@/assets/svgComponents'
import { useModalStore } from '@/store/modalStore'

interface LanguageSelectModalProps {}

export default function LanguageSelectModal({}: LanguageSelectModalProps) {
  const isLanguageSelectModalOpen = useModalStore((state) => state.isLanguageSelectModalOpen)
  const setModalState = useModalStore((state) => state.setState)

  return (
    <MiddleModal isModalOpen={isLanguageSelectModalOpen} title={'언어 선택'}>
      <div className={'flex flex-col gap-y-6'}>
        <div className="bg-gray1 flex h-[52px] items-center justify-between rounded-[16px] px-4 py-3">
          <CheckIcon width={24} height={24} />
          <p className="body-md text-gray5">한국어</p>
        </div>
        <Button
          onClick={() => {
            setModalState({ isLanguageSelectModalOpen: !isLanguageSelectModalOpen })
          }}
          type={'active'}
          size={'lg'}
        >
          완료
        </Button>
      </div>
    </MiddleModal>
  )
}
