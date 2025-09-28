import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useRecruitStore } from '@/store/recruitStore'
import { useModalStore } from '@/store/modalStore'

export default function CompanyAddressField() {
  const setModalState = useModalStore((state) => state.setState)
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        회사주소<span className="text-main">*</span>
      </p>
      <div className="flex gap-x-2">
        <Input
          onClick={() => {
            setModalState({ isSearchAddressModalOpen: true })
          }}
          value={recruitPostData?.zipcode ?? ''}
          inputBoxStyle={'default'}
          type={'text'}
          placeholder={'우편번호'}
          customClassName={'w-full'}
        />
        <Button
          buttonType={'button'}
          onClick={() => {
            setModalState({ isSearchAddressModalOpen: true })
          }}
          size={'lg'}
          type={'active'}
          customClassName={'whitespace-nowrap'}
        >
          주소 검색
        </Button>
      </div>
      <Input
        inputBoxStyle={'default'}
        value={recruitPostData?.address1 ?? ''}
        onClick={() => {
          setModalState({ isSearchAddressModalOpen: true })
        }}
        placeholder={'주소를 입력해주세요.'}
      />
      <Input
        value={recruitPostData?.address2 ?? ''}
        setValue={(e) => {
          setState({ ...recruitPostData, recruitPostData: { ...recruitPostData, address2: e.target.value } })
        }}
        placeholder={'상세주소를 입력해주세요.'}
        inputBoxStyle={'default'}
      />
    </div>
  )
}
