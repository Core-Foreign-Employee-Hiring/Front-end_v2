'use client'

import Image from 'next/image'
import { useAuthStore } from '@/store/authStore'
import EmployeeSignUp from '@/components/sign-up/EmployeeSignUp'
import EmployerSignUp from '@/components/sign-up/EmployerSignUp'

const SignUpPage = () => {
  const role = useAuthStore((state) => state.role)
  return (
    <main>
      <div className="flex w-[600px] flex-col items-center justify-center gap-y-[80px] border">
        <Image src={'/logo.svg'} width={266} height={68} alt="로고" />
        {role === 'Employee' ? <EmployeeSignUp /> : <EmployerSignUp />}
      </div>
    </main>
  )
}
export default SignUpPage
