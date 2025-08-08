import MypageMenu from '@/components/mypage/MypageMenu'
import Button from '@/components/common/Button'
import NameField from '@/components/sign-up/employee/NameField'
import EmailField from '@/components/sign-up/employee/EmailField'
import PhoneNumberField from '@/components/sign-up/employee/PhoneNumberField'
import AddressField from '@/components/sign-up/employee/AddressField'

interface UserInfoEditFormProps {}

export default function UserInfoEditForm({}: UserInfoEditFormProps) {
  return (
    <section className="px-5">
      <div className="flex items-center justify-between">
        <p className="title-md">회원정보 수정</p>
        <Button size={'lg'} onClick={() => {}} type={'outline'} customClassName={'h-[46px] px-6'}>
          아이디 | 비밀번호 변경
        </Button>
      </div>
      <div className="mt-8 flex flex-col gap-y-[32px]">
        <NameField />
        <EmailField />
        <PhoneNumberField />
        <AddressField />
      </div>
      <Button size={'lg'} onClick={() => {}} type={'active'} customClassName={'w-full mt-[80px] mb-[40px]'}>
        다음
      </Button>
    </section>
  )
}
