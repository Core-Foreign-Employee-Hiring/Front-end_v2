'use client'

import Image from 'next/image'
import { useAuthStore } from '@/store/authStore'
import EmployeeSignUp from '@/components/sign-up/EmployeeSignUp'
import EmployerSignUp from '@/components/sign-up/EmployerSignUp'
import Header from '@/components/common/Header'

const SignUpPage = () => {
  return (
    <main>
      <Header headerType={'dynamic'} title={'회원가입'} />
      <div className="desktop:my-[100px] flex flex-col items-center justify-center py-[60px]">
        <div className="desktop:w-[600px] flex w-full flex-col items-center justify-center gap-y-[80px] px-5">
          <Image className={'desktop:block hidden'} src={'/logo.svg'} width={266} height={68} alt="로고" />
          <EmployeeSignUp />
        </div>
      </div>
    </main>
  )
}
export default SignUpPage
