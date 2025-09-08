import { Dispatch, SetStateAction, useState } from 'react'
import Header from '@/components/common/Header'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

interface FindAccountProcessProps {
  setFindAccountProcess: Dispatch<SetStateAction<boolean>>
}

export default function FindAccountProcess({ setFindAccountProcess }: FindAccountProcessProps) {
  const [type, setType] = useState<'id' | 'pw'>('id')
  return (
    <main>
      <Header
        headerType={'dynamic'}
        title={type === 'id' ? '아이디 찾기' : '비밀번호 찾기'}
        onBack={() => setFindAccountProcess(false)}
      />
      <div className="flex flex-col gap-y-[40px] px-5 pt-[60px]">
        <div className="bg-gray1 flex w-fit gap-x-2 rounded-full p-1">
          <button
            onClick={() => {
              setType('id')
            }}
            className={`${type === 'id' ? 'bg-main title-sm h-[40px] w-[120px] rounded-full px-3 text-white' : 'text-gray5 title-sm w-[120px]'}`}
          >
            아이디 찾기
          </button>
          <button
            onClick={() => {
              setType('pw')
            }}
            className={`${type === 'pw' ? 'bg-main title-sm h-[40px] w-[120px] rounded-full px-3 text-white' : 'text-gray5 title-sm w-[120px]'}`}
          >
            비밀번호 찾기
          </button>
        </div>
        {type === 'id' ? (
          <div className="flex flex-col gap-y-[24px]">
            <div className="flex flex-col gap-y-[32px]">
              <section className="flex flex-col gap-y-2">
                <p className="subtitle-lg">
                  이름 <span className="text-main">*</span>
                </p>
                <Input
                  value={''}
                  setValue={(e) => {}}
                  inputBoxStyle={'default'}
                  type={'text'}
                  placeholder={'이름을 입력해주세요.'}
                />
              </section>
              <section className="flex flex-col gap-y-2">
                <p className="subtitle-lg">
                  연락처 <span className="text-main">*</span>
                </p>
                <Input
                  value={''}
                  setValue={(e) => {}}
                  inputBoxStyle={'default'}
                  type={'text'}
                  placeholder={"'-' 없이 입력"}
                />
              </section>
            </div>
            <Button onClick={() => {}} buttonType={'submit'} type={'active'} size={'lg'} customClassName={'w-full'}>
              아이디 검색
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-y-[24px]">
            <div className="flex flex-col gap-y-[32px]">
              <section className="flex flex-col gap-y-2">
                <p className="subtitle-lg">
                  아이디 <span className="text-main">*</span>
                </p>
                <Input
                  value={''}
                  setValue={(e) => {}}
                  inputBoxStyle={'default'}
                  type={'text'}
                  placeholder={'아이디를 입력해주세요.'}
                />
              </section>
              <section className="flex flex-col gap-y-2">
                <p className="subtitle-lg">
                  이름 <span className="text-main">*</span>
                </p>
                <Input
                  value={''}
                  setValue={(e) => {}}
                  inputBoxStyle={'default'}
                  type={'text'}
                  placeholder={"'-' 없이 입력"}
                />
              </section>
              <section className="flex flex-col gap-y-2">
                <p className="subtitle-lg">
                  이메일 <span className="text-main">*</span>
                </p>
                <Input
                  value={''}
                  setValue={(e) => {}}
                  inputBoxStyle={'default'}
                  type={'text'}
                  placeholder={"'-' 없이 입력"}
                />
              </section>
            </div>
            <Button onClick={() => {}} buttonType={'submit'} type={'active'} size={'lg'} customClassName={'w-full'}>
              비밀번호 재설정
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
