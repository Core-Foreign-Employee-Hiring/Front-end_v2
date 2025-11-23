'use client'

import { Dispatch, ReactNode, SetStateAction } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CancelIcon } from '@/assets/svgComponents'

type ModalType = 'TITLE' | 'GENERAL'

interface MiddleModalProps {
  modalType?: ModalType
  title?: string
  onClose?: () => void
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>
  isModalOpen: boolean
  children: ReactNode
}

export default function MiddleModal({
  modalType = 'TITLE',
  title,
  setIsModalOpen,
  isModalOpen,
  children,
  onClose,
}: MiddleModalProps) {
  const handleClose = () => {
    if (setIsModalOpen) {
      setIsModalOpen(false)
    }
  }

  const renderModalType = (modalType: ModalType) => {
    switch (modalType) {
      case 'TITLE':
        return (
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
            className="mx-5 flex w-[375px] flex-col gap-y-[24px] rounded-[32px] bg-white p-6"
          >
            <section className="flex items-center justify-between">
              <h2 className="title-lg">{title}</h2>
              <button
                onClick={handleClose}
                className="flex items-center justify-center transition-opacity hover:opacity-70"
                aria-label="Close modal"
              >
                <CancelIcon onClick={onClose} width={32} height={32} />
              </button>
            </section>
            {children}
          </motion.div>
        )
      default:
        return (
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
            className="bg-gray1 mx-5 flex w-[375px] flex-col items-center justify-center rounded-[32px] p-6"
          >
            {children}
          </motion.div>
        )
    }
  }

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* 배경 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-60 flex items-center justify-center bg-[rgba(0,0,0,0.3)]"
          >
            {/* 모달 컨텐츠 */}
            {renderModalType(modalType)}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
