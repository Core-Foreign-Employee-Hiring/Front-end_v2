import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useModalStore } from '@/store/modalStore'
import { useMyPageStore } from '@/store/mypageStore'

export default function AddressField() {
  const setModalState = useModalStore((state) => state.setState)
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setMyPageState = useMyPageStore((state) => state.setState)

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">주소</h3>
      <div className="flex gap-x-2">
        <Input
          inputBoxStyle={'default'}
          type={'text'}
          value={myPageInfo?.zipcode ?? ''}
          onClick={() => {
            setModalState({ isSearchAddressModalOpen: true })
          }}
          customClassName={'w-full'}
        />
        <Button
          onClick={() => {
            setModalState({ isSearchAddressModalOpen: true })
          }}
          size={'lg'}
          customClassName={'whitespace-nowrap'}
          type={'active'}
        >
          주소 검색
        </Button>
      </div>

      <Input
        placeholder={'주소를 입력해주세요.'}
        inputBoxStyle={'default'}
        type={'text'}
        value={myPageInfo?.address1 ?? ''}
        setValue={() => {}}
      />
      <Input
        placeholder={'상세주소를 입력해주세요.'}
        inputBoxStyle={'default'}
        type={'text'}
        value={myPageInfo?.address2 ?? ''}
        setValue={(e) => {
          if (myPageInfo) {
            setMyPageState({ ...myPageInfo, myPageInfo: { ...myPageInfo, address2: e.target.value } })
          }
        }}
      />
    </div>
  )
}
