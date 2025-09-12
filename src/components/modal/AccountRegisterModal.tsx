import MiddleModal from '@/components/common/MiddleModal'
import { Dispatch, SetStateAction, useState } from 'react'
import DropBox from '@/components/common/DropBox'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

interface AccountRegisterModalProps {
  setIsAccountRegisterModalOpen: Dispatch<SetStateAction<boolean>>
  isAccountRegisterModalOpen: boolean
  isAccountRegistered: boolean
}

export default function AccountRegisterModal({
  setIsAccountRegisterModalOpen,
  isAccountRegisterModalOpen,
  isAccountRegistered,
}: AccountRegisterModalProps) {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  return (
    <MiddleModal
      setIsModalOpen={setIsAccountRegisterModalOpen}
      isModalOpen={isAccountRegisterModalOpen}
      title={isAccountRegistered ? '계좌번호 수정' : '계좌번호 등록'}
    >
      <div className="flex flex-col gap-y-[24px]">
        <section className="flex flex-col">
          <p className={'subtitle-md'}>은행</p>
          <DropBox
            customClassName={'w-fit'}
            setIsDropBoxOpen={() => setIsDropBoxOpen(!isDropBoxOpen)}
            isDropBoxOpen={isDropBoxOpen}
            initValue={'은행 선택'}
            selectedValue={''}
          >
            <div></div>
          </DropBox>
        </section>
        <section className="flex flex-col">
          <p className={'subtitle-md'}>예금주</p>
          <Input
            value={''}
            setValue={(e) => {}}
            inputBoxStyle={'default'}
            placeholder={'예금주를 입력해주세요.'}
            type={'text'}
            customClassName={'w-full'}
          />
        </section>
        <section className="flex flex-col">
          <p className={'subtitle-md'}>계좌번호</p>
          <Input
            value={''}
            setValue={(e) => {}}
            inputBoxStyle={'default'}
            placeholder={'계좌번호를 입력해주세요.'}
            type={'text'}
            customClassName={'w-full'}
          />
        </section>
        <Button onClick={() => {}} type={'active'} size={'lg'} buttonType={'submit'}>
          {isAccountRegistered ? '수정하기' : '등록하기'}
        </Button>
      </div>
    </MiddleModal>
  )
}
