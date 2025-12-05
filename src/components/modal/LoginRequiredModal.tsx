import Link from 'next/link'
import MiddleModal from '@/components/common/MiddleModal'
import { useModalStore } from '@/store/modalStore'

interface LoginRequiredModalProps {
  isModalOpen: boolean
}

export default function LoginRequiredModal({ isModalOpen }: LoginRequiredModalProps) {
  const setState = useModalStore((state) => state.setState)

  return (
    <MiddleModal isModalOpen={isModalOpen} modalType={'GENERAL'}>
      <div className="mt-[20px] flex flex-col items-center gap-y-[40px]">
        <h1 className="title-md">로그인이 필요한 서비스에요.</h1>
        <Link
          className="bg-main button flex h-[52px] w-full items-center justify-center rounded-[16px] text-white"
          href={'/login'}
          onClick={() => {
            setState({ isLoginRequiredModalOpen: false })
          }}
        >
          로그인
        </Link>
      </div>
    </MiddleModal>
  )
}
