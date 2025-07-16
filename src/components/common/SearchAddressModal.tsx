import PostCode from 'react-daum-postcode'
import { CancelIcon } from '@/assets/svgComponents'
import { useAuthStore } from '@/store/authStore'
import { useModalStore } from '@/store/modalStore'

const SearchAddressModal = () => {
  const setModalState = useModalStore((state) => state.setState)
  const setEmployeeSignUpState = useAuthStore((state) => state.setState)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)

  const handleComplete = async (data: any) => {
    let fullAddress = data.address
    let extraAddress = ''

    const { addressType, bname, buildingName, zonecode } = data
    console.log('data', data)

    if (addressType === 'R') {
      if (bname !== '') {
        extraAddress += bname
      }
      if (buildingName !== '') {
        extraAddress += `${extraAddress !== '' && ', '}${buildingName}`
      }
      fullAddress += `${extraAddress !== '' ? ` ${extraAddress}` : ''}`
    }
    setEmployeeSignUpState({
      ...employeeSignUp,
      employeeSignUp: { ...employeeSignUp, zipcode: zonecode, address1: fullAddress },
    })

    setModalState({ isSearchAddressModalOpen: false })
  }

  return (
    <div
      className={
        'absolute right-0 left-0 z-40 flex min-h-screen flex-col items-center justify-center bg-[rgba(0,0,0,0.6)]'
      }
    >
      <div
        onClick={() => setModalState({ isSearchAddressModalOpen: false })}
        className="fixed top-[50%] right-[50%] left-[50%] flex h-[508px] w-[1008px] translate-x-[-50%] translate-y-[-50%] flex-col gap-y-4 rounded-[32px] bg-white p-6"
      >
        <div className={'flex w-full justify-end'}>
          <CancelIcon onClick={() => setModalState({ isSearchAddressModalOpen: false })} width={24} height={24} />
        </div>
        <PostCode onComplete={handleComplete} className="" />
      </div>
    </div>
  )
}
export default SearchAddressModal
