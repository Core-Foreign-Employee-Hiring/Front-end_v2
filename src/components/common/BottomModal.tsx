import { ReactNode } from 'react'
import { CancelIcon } from '@/assets/svgComponents'
import Button from '@/components/common/Button'

interface ModalProps {
  title: string
  children: ReactNode
  onClick?: () => void
  buttonContent?: string
  buttonType?: 'active' | 'disabled'
  onClose: () => void
}

const BottomModal = ({ title, children, onClick, buttonContent, buttonType, onClose }: ModalProps) => {
  return (
    <div onClick={onClose} className="fixed inset-0 z-60 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-0 flex w-[375px] flex-col gap-y-[16px] rounded-t-[32px] bg-white p-6"
      >
        <Title title={title} onClose={onClose} />
        <Content>{children}</Content>
        {buttonContent && onClick && buttonType ? (
          <BottomButton buttonType={buttonType} buttonContent={buttonContent} onClick={onClick} />
        ) : null}
      </div>
    </div>
  )
}
export default BottomModal

function Title({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="flex justify-between">
      <h3 className="title-lg">{title}</h3>
      <CancelIcon onClick={onClose} width={32} height={32} />
    </div>
  )
}

function Content({ children }: { children: ReactNode }) {
  return <>{children}</>
}

function BottomButton({
  onClick,
  buttonContent,
  buttonType,
}: {
  onClick: () => void
  buttonContent: string
  buttonType: 'active' | 'disabled'
}) {
  return (
    <Button onClick={onClick} size={'lg'} customClassName={'w-full'} type={buttonType}>
      {buttonContent}
    </Button>
  )
}

BottomModal.Title = Title
BottomModal.Content = Content
BottomModal.BottomButton = BottomButton
