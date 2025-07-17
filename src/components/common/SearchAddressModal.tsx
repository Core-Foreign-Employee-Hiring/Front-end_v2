import PostCode from 'react-daum-postcode'
import { CancelIcon } from '@/assets/svgComponents'
import { useModalStore } from '@/store/modalStore'

interface SearchAddressModalProps {
  handleComplete: (data: any) => Promise<void>
}

const SearchAddressModal = ({ handleComplete }: SearchAddressModalProps) => {
  const setModalState = useModalStore((state) => state.setState)

  return (
    <div className={'fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.3)]'}>
      <div
        onClick={() => setModalState({ isSearchAddressModalOpen: false })}
        className="desktop:h-[508px] desktop:w-[1008px] desktop:translate-x-[-50%] desktop:translate-y-[-50%] desktop:top-[50%] desktop:right-[50%] desktop:left-[50%] fixed flex w-[500px] flex-col gap-y-4 rounded-[32px] bg-white p-6"
      >
        <div className={'flex w-full justify-end'}>
          <CancelIcon onClick={() => setModalState({ isSearchAddressModalOpen: false })} width={24} height={24} />
        </div>
        <PostCode onComplete={handleComplete} className="" />
      </div>
    </div>
  )
}
export default SearchAddressModal
