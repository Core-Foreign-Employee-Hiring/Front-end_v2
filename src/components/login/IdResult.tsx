import { Dispatch, SetStateAction } from 'react'
import { useAuthStore } from '@/store/authStore'
import Button from '@/components/common/Button'
import { formatDate } from '@/utils/common'

interface IdResultProps {
  setStep: Dispatch<SetStateAction<number>>
  setType: Dispatch<SetStateAction<'id' | 'pw'>>
  setFindAccountProcess: Dispatch<SetStateAction<boolean>>
}
export default function IdResult({ setStep, setType, setFindAccountProcess }: IdResultProps) {
  const idResultData = useAuthStore((state) => state.idResultData)
  return (
    <div>
      {idResultData ? (
        <div className="border-gray2 mx-5 flex flex-col gap-y-2 rounded-[16px] border px-5 py-4">
          <p className="subtitle-md">기존 아이디</p>
          <div className="flex items-center justify-between">
            <p className="body-md">{idResultData?.userId}</p>
            <p className="small text-gray4">가입일 {formatDate(idResultData?.createdAt)}</p>
          </div>
        </div>
      ) : null}

      <div className="fixed bottom-0 flex w-full gap-x-3 bg-white px-5 pb-5">
        <Button
          onClick={async () => {
            setType('pw')
            setStep(1)
          }}
          buttonType={'submit'}
          type={'outline'}
          size={'lg'}
          customClassName={'w-full'}
        >
          비밀번호 찾기
        </Button>
        <Button
          onClick={async () => {
            setFindAccountProcess(false)
          }}
          buttonType={'submit'}
          type={'active'}
          size={'lg'}
          customClassName={'w-full'}
        >
          로그인
        </Button>
      </div>
    </div>
  )
}
