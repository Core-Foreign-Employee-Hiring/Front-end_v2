import EmployeeSignUp from '@/components/sign-up/EmployeeSignUp'

const SignUpPage = async () => {
  return (
    <div className="relative mx-auto flex min-h-screen w-[375px] flex-col items-center justify-center bg-white py-[60px]">
      <div className="flex w-full flex-col items-center justify-center gap-y-[80px] px-5">
        <EmployeeSignUp />
      </div>
    </div>
  )
}
export default SignUpPage
