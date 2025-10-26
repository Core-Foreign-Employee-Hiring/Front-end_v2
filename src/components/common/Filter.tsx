import { ReactNode } from 'react'
import { CancelIcon } from '@/assets/svgComponents'
import Button from '@/components/common/Button'

interface FilterProps {
  children: ReactNode
  onClose: () => void
}
export default function Filter({ onClose, children }: FilterProps) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-60 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="flex h-[772px] flex-col gap-y-6 bg-white p-5">{children}</div>
    </div>
  )
}

function Title({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="title-lg">{title}</h1>
      <CancelIcon onClick={onClose} width={32} height={32} />
    </div>
  )
}

function Content({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

function BottomButton({ onApply, onReset }: { children: ReactNode; onApply: () => void; onReset: () => void }) {
  return (
    <div className="flex gap-x-2">
      <Button onClick={onReset} size={'lg'} buttonType={'button'} type={'outline'}>
        초기화
      </Button>
      <Button type={'active'} size={'lg'} buttonType={'submit'} onClick={onApply}>
        적용
      </Button>
    </div>
  )
}

Filter.BottomButton = BottomButton
Filter.Content = Content
Filter.Title = Title
