interface ProcessBarProps {
  totalStep: 1 | 2 | 3
  currentStep: 1 | 2 | 3
  step1Content: string
  step2Content: string
  step3Content?: string
  width?: string
}

const ProcessBar = ({
  totalStep,
  currentStep,
  step3Content,
  step2Content,
  step1Content,
  width = 'w-[300px]',
}: ProcessBarProps) => {
  const getCircleClass = (step: 1 | 2 | 3) =>
    `title-sm flex h-[40px] w-[40px] items-center justify-center rounded-full whitespace-nowrap text-white ${
      currentStep >= step ? 'bg-main' : 'bg-gray2'
    }`

  const getLineClass = (step: 2 | 3) =>
    `${totalStep >= step ? (currentStep >= step ? 'bg-main' : 'bg-gray2') : 'hidden'} h-1 min-w-[20px] flex-grow`

  const getTextClass = (step: 1 | 2 | 3) => `title-sm ${currentStep >= step ? 'text-main' : 'text-gray2'}`

  return (
    <div className={`${width}`}>
      <div className="flex w-full items-center justify-between">
        {/* Step 1 */}
        <div className={`ml-[9px] ${getCircleClass(1)}`}>1</div>

        {/* Line between 1 and 2 */}
        <div className={getLineClass(2)} />

        {/* Step 2 */}
        <div className={`${step3Content ? '' : 'mr-[9px]'} ${getCircleClass(2)}`}>2</div>

        {/* Step 3 (optional) */}
        {step3Content && (
          <>
            <div className={getLineClass(3)} />
            <div className={`mr-[9px] ${getCircleClass(3)}`}>3</div>
          </>
        )}
      </div>

      <div className="mt-2 flex w-full justify-between">
        <div className={getTextClass(1)}>{step1Content}</div>
        <div className={getTextClass(2)}>{step2Content}</div>
        {step3Content && <div className={getTextClass(3)}>{step3Content}</div>}
      </div>
    </div>
  )
}

export default ProcessBar
