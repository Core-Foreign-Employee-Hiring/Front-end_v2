import { ReactNode } from 'react'
import { CancelIcon } from '@/assets/svgComponents'
import Button from '@/components/common/Button'
import { motion } from 'framer-motion'

interface FilterProps {
  children: ReactNode
  onClose: () => void
}
export default function Filter({ onClose, children }: FilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-60 flex items-center justify-center bg-[rgba(0,0,0,0.3)]"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
        }}
        onClick={(e) => e.stopPropagation()}
        className="flex w-[355px] flex-col gap-y-6 rounded-[16px] bg-white p-5"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function Title({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="title-lg">{title}</h1>
      <CancelIcon
        className="cursor-pointer transition hover:opacity-[50%] hover:duration-75"
        onClick={onClose}
        width={24}
        height={24}
      />
    </div>
  )
}

function Content({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

function BottomButton({ onApply, onReset }: { onApply: () => void; onReset: () => void }) {
  return (
    <div className="flex gap-x-2">
      <Button onClick={onReset} size={'lg'} buttonType={'button'} type={'outline'} customClassName={'w-full'}>
        초기화
      </Button>
      <Button type={'active'} size={'lg'} buttonType={'button'} onClick={onApply} customClassName={'w-full'}>
        적용
      </Button>
    </div>
  )
}

Filter.BottomButton = BottomButton
Filter.Content = Content
Filter.Title = Title
