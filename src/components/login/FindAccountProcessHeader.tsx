'use client'

import { usePathname, useRouter } from 'next/navigation'

type StepType = '1' | '2'
type SearchType = 'id' | 'pw'

interface FindAccountProcessHeaderProps {
  step: StepType
  type: SearchType
}

export default function FindAccountProcessHeader({ step, type }: FindAccountProcessHeaderProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleStepClick = (step: StepType, type: SearchType) => {
    router.push(`${pathname}?type=${encodeURIComponent(type)}&step=${encodeURIComponent(step)}`)
  }

  const buttons: { label: string; value: 'id' | 'pw' }[] = [
    { label: '아이디 찾기', value: 'id' },
    { label: '비밀번호 찾기', value: 'pw' },
  ]

  return (
    <section className="bg-gray1 mx-5 flex w-fit gap-x-2 rounded-full p-1">
      {buttons.map((button) => (
        <button
          key={button.value}
          onClick={() => handleStepClick(step, button.value)}
          className={`${
            type === button.value
              ? 'bg-main title-sm h-[40px] w-[120px] rounded-full px-3 text-white'
              : 'text-gray5 title-sm w-[120px]'
          }`}
        >
          {button.label}
        </button>
      ))}
    </section>
  )
}
