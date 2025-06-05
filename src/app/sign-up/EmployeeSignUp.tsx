import ProcessBar from '@/components/common/ProcessBar'

const EmployeeSignUp = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-[20px]">
        <div className="title-lg">회원가입(피고용인)</div>
        <ProcessBar totalStep={2} currentStep={1} step1Content={'필수 정보'} step2Content={'추가 정보'} />
      </div>
      <div className="flex flex-col gap-y-[32px]"></div>
    </div>
  )
}
export default EmployeeSignUp
