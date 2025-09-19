import { Dispatch, SetStateAction, useState } from 'react'
import Header from '@/components/common/Header'
import IdProcess from '@/components/login/IdProcess'
import IdResult from '@/components/login/IdResult'
import PassWordProcess from '@/components/login/PassWordProcess'
import PassWordResult from '@/components/login/PassWordResult'

interface FindAccountProcessProps {
  setFindAccountProcess: Dispatch<SetStateAction<boolean>>
}

export default function FindAccountProcess({ setFindAccountProcess }: FindAccountProcessProps) {
  const [type, setType] = useState<'id' | 'pw'>('id')
  const [step, setStep] = useState<number>(1)

  const buttons: { label: string; value: 'id' | 'pw' }[] = [
    { label: '아이디 찾기', value: 'id' },
    { label: '비밀번호 찾기', value: 'pw' },
  ]

  return (
    <main>
      <Header
        headerType={'dynamic'}
        title={type === 'id' ? '아이디 찾기' : '비밀번호 찾기'}
        onBack={() => setFindAccountProcess(false)}
      />
      <div className="flex flex-col gap-y-[40px] pt-[60px]">
        {/* 메뉴바 */}
        <section className="bg-gray1 mx-5 flex w-fit gap-x-2 rounded-full p-1">
          {buttons.map((button) => (
            <button
              key={button.value}
              onClick={() => {
                setType(button.value)
                setStep(1)
              }}
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

        {/* 본문 */}
        {type === 'id' ? (
          <>
            {step === 1 ? <IdProcess setStep={setStep} /> : null}
            {step === 2 ? (
              <IdResult setType={setType} setStep={setStep} setFindAccountProcess={setFindAccountProcess} />
            ) : null}
          </>
        ) : (
          <>
            {step === 1 ? <PassWordProcess setStep={setStep} /> : null}
            {step === 2 ? <PassWordResult setStep={setStep} setFindAccountProcess={setFindAccountProcess} /> : null}
          </>
        )}
      </div>
    </main>
  )
}
