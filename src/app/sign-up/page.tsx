'use client'

import EmployeeSignUp from '@/components/sign-up/EmployeeSignUp'
import Header from '@/components/common/Header'

const SignUpPage = () => {
  return (
    <main>
      <Header headerType={'dynamic'} title={'회원가입'} />
      <div className="relative mx-auto flex min-h-screen w-[375px] flex-col items-center justify-center bg-white py-[60px]">
        <div className="flex w-full flex-col items-center justify-center gap-y-[80px] px-5">
          <EmployeeSignUp />
        </div>
      </div>
    </main>
  )
}
export default SignUpPage
