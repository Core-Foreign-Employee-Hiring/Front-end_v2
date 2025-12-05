import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useModalStore } from '@/store/modalStore'
import { useMyPageStore } from '@/store/mypageStore'
import { useTranslation } from 'react-i18next'

export default function AddressField() {
  const setModalState = useModalStore((state) => state.setState)
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setMyPageState = useMyPageStore((state) => state.setState)

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">{t('mypage.userInfo.address.label')}</h3>
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
          {t('mypage.userInfo.address.searchAddressButton')}
        </Button>
      </div>

      <Input
        placeholder={t('mypage.userInfo.address.address1Placeholder')}
        inputBoxStyle={'default'}
        type={'text'}
        value={myPageInfo?.address1 ?? ''}
        setValue={() => {}}
      />
      <Input
        placeholder={t('mypage.userInfo.address.address2Placeholder')}
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
