import { DropboxArrowDownIcon, DropboxArrowUpIcon } from '@/assets/svgComponents'
import { ReactNode } from 'react'

interface DropBoxProps {
  initValue: string
  selectedValue: string | undefined
  isDropBoxOpen: boolean
  setIsDropBoxOpen: () => void
  children: ReactNode
}
export default function DropBox({ initValue, selectedValue, isDropBoxOpen, setIsDropBoxOpen, children }: DropBoxProps) {
  return (
    <div className="relative">
      <section
        onClick={setIsDropBoxOpen}
        className={`border-gray2 flex h-[52px] w-full items-center justify-between rounded-[16px] border px-4 py-3`}
      >
        <p className={`${selectedValue ? 'text-black' : 'text-gray4'} button`}>
          {selectedValue ? selectedValue : initValue}
        </p>
        {isDropBoxOpen ? (
          <DropboxArrowUpIcon width={20} height={20} />
        ) : (
          <DropboxArrowDownIcon width={20} height={20} />
        )}
      </section>
      {isDropBoxOpen ? (
        <section className="border-gray2 absolute top-12 z-10 flex max-h-[420px] w-full flex-col overflow-y-scroll rounded-[16px] border bg-white">
          {children}
        </section>
      ) : null}
    </div>
  )
}
