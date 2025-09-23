import Button from '@/components/common/Button'
import { useEffect, useState } from 'react'
import Input from '@/components/common/Input'
import { getVerifyMyUserId, patchModifyPassword, patchModifyUserId, postVerifyMyPassword } from '@/lib/mypage'
import { getMemberVerifyUserId } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import { EyeIcon, NonEyeIcon } from '@/assets/svgComponents'

export default function ChangeAccountForm() {
  const router = useRouter()
  const [type, setType] = useState<'id' | 'pw'>('id')

  //아이디 변경 관련 state
  const [currentId, setCurrentId] = useState<string>('')
  const [currentIdError, setCurrentIdError] = useState<boolean | undefined>(undefined)
  const [newIdFieldOpen, setNewIdFieldOpen] = useState(false)
  const [newId, setNewId] = useState<string>('')
  const [isIdDuplicate, setIsIdDuplicate] = useState<boolean | undefined>(undefined) //true 이면 중복O, false 이면 중복X, undefined면 아직 검증 X

  //비밀번호 변경 관련 state
  const [currentPW, setCurrentPW] = useState<string>('')
  const [currentPWError, setCurrentPWError] = useState<boolean | undefined>(undefined)
  const [newPWFieldOpen, setNewPWFieldOpen] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [newPW, setNewPW] = useState<string>('')
  const [showNewPW, setShowNewPW] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | undefined>(undefined)
  const [checkPW, setCheckPW] = useState<string>('')
  const [showCheckPW, setShowCheckPW] = useState(false)
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean | undefined>(undefined)

  //비밀번호 문구
  useEffect(() => {
    if (type === 'pw') {
      // 정규식을 사용하여 대소문자, 숫자, 기호, 길이 검증
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/

      if (!passwordRegex.test(newPW)) {
        setIsPasswordValid(false)
      } else {
        setIsPasswordValid(true)
      }
    }
  }, [newPW])

  //비밀번호 확인 문구
  useEffect(() => {
    if (checkPW === newPW) {
      setIsPasswordMatch(true)
    } else {
      setIsPasswordMatch(false)
    }
  }, [checkPW])

  return (
    <div className="relative h-[calc(85vh-112px)]">
      <div className="flex flex-col gap-y-[32px] px-5">
        <section className="flex flex-col gap-y-3">
          <h2 className="subtitle-lg">로그인 변경</h2>
          <div className="flex gap-x-3">
            <Button
              onClick={() => {
                setType('id')
              }}
              size={'sm'}
              type={type === 'id' ? 'active' : 'outline'}
            >
              아이디 변경
            </Button>
            <Button
              onClick={() => {
                setType('pw')
              }}
              size={'sm'}
              type={type === 'pw' ? 'active' : 'outline'}
            >
              비밀번호 변경
            </Button>
          </div>
        </section>

        {type === 'id' ? (
          <section className="flex flex-col gap-y-3">
            <h3 className="subtitle-md">아이디 변경</h3>
            <section className="flex flex-col gap-y-2">
              <div className="flex gap-x-3">
                <Input
                  value={currentId}
                  setValue={(e) => {
                    setCurrentId(e.target.value)
                  }}
                  customClassName={'w-full'}
                  inputBoxStyle={'default'}
                  placeholder={'기존 아이디'}
                  type={'text'}
                />
                <Button
                  onClick={async () => {
                    const result = await getVerifyMyUserId(currentId)
                    console.log('result', result)
                    if (result.success) {
                      setNewIdFieldOpen(true)
                    } else if (result.status === 400) {
                      setCurrentIdError(true)
                    }
                  }}
                  size={'lg'}
                  disabled={currentId.length === 0}
                  type={currentId.length !== 0 ? 'active' : 'disabled'}
                  buttonType={'submit'}
                  customClassName={'w-[120px] whitespace-nowrap'}
                >
                  확인
                </Button>
              </div>
              {currentIdError === undefined ? null : currentIdError ? (
                <p className="text-error badge-md">현재 아이디와 일치하지 않습니다.</p>
              ) : null}
            </section>

            {/* 새로운 아이디 필드 */}
            {newIdFieldOpen ? (
              <section className="flex flex-col gap-y-2">
                <section className="flex gap-x-3">
                  <Input
                    value={newId}
                    setValue={(e) => {
                      setNewId(e.target.value)
                    }}
                    customClassName={'w-full'}
                    inputBoxStyle={'default'}
                    placeholder={'새로운 아이디'}
                    type={'text'}
                  />
                  <Button
                    onClick={async () => {
                      const result = await getMemberVerifyUserId(newId)
                      if (result.success) {
                        setIsIdDuplicate(false)
                      } else if (result.status === 400) {
                        setIsIdDuplicate(true)
                      }
                    }}
                    size={'lg'}
                    disabled={newId.length === 0}
                    type={newId.length !== 0 ? 'active' : 'disabled'}
                    customClassName={'w-[120px] whitespace-nowrap'}
                  >
                    중복확인
                  </Button>
                </section>
                {isIdDuplicate === undefined ? null : isIdDuplicate ? (
                  <p className="text-error badge-md">이미 사용중인 아이디입니다.</p>
                ) : (
                  <p className="text-main badge-md">사용 가능한 아이디입니다.</p>
                )}
              </section>
            ) : null}
          </section>
        ) : (
          <section className="flex flex-col gap-y-3">
            <h3 className="subtitle-md">비밀번호 변경</h3>
            <section className="flex flex-col gap-y-2">
              <section className="flex gap-x-3">
                <Input
                  rightIcon={
                    showCurrentPassword ? (
                      <NonEyeIcon
                        onClick={() => {
                          setShowCurrentPassword(false)
                        }}
                        width={24}
                        height={24}
                      />
                    ) : (
                      <EyeIcon
                        onClick={() => {
                          setShowCurrentPassword(true)
                        }}
                        width={24}
                        height={24}
                      />
                    )
                  }
                  value={currentPW}
                  setValue={(e) => {
                    setCurrentPW(e.target.value)
                  }}
                  customClassName={'w-full'}
                  inputBoxStyle={'default'}
                  placeholder={'기존 비밀번호'}
                  type={showCurrentPassword ? 'text' : 'password'}
                />
                <Button
                  onClick={async () => {
                    const result = await postVerifyMyPassword(currentPW)
                    if (result.success) {
                      setNewPWFieldOpen(true)
                    } else if (result.status === 400) {
                      setCurrentPWError(true)
                    }
                  }}
                  size={'lg'}
                  disabled={currentPW.length === 0}
                  type={currentPW.length === 0 ? 'disabled' : 'active'}
                  customClassName={'w-[120px] whitespace-nowrap'}
                >
                  확인
                </Button>
              </section>
              {currentPWError === undefined ? null : currentPWError ? (
                <p className="text-error badge-md">현재 비밀번호와 일치하지 않습니다.</p>
              ) : null}
            </section>

            {newPWFieldOpen ? (
              <>
                <section className="flex flex-col gap-y-2">
                  <Input
                    rightIcon={
                      showNewPW ? (
                        <NonEyeIcon
                          onClick={() => {
                            setShowNewPW(false)
                          }}
                          width={24}
                          height={24}
                        />
                      ) : (
                        <EyeIcon
                          onClick={() => {
                            setShowNewPW(true)
                          }}
                          width={24}
                          height={24}
                        />
                      )
                    }
                    value={newPW}
                    setValue={(e) => {
                      setNewPW(e.target.value)
                    }}
                    customClassName={'w-full'}
                    inputBoxStyle={'default'}
                    placeholder={'새 비밀번호 입력'}
                    type={showNewPW ? 'text' : 'password'}
                  />
                  {isPasswordValid !== undefined ? (
                    <div className="badge-md">
                      {isPasswordValid ? null : (
                        <p className="text-error">비밀번호는 대소문자, 숫자, 기호 포함 8~15자를 만족해야 합니다.</p>
                      )}
                    </div>
                  ) : null}
                </section>
                <section className="flex flex-col gap-y-2">
                  <Input
                    rightIcon={
                      showCheckPW ? (
                        <NonEyeIcon
                          onClick={() => {
                            setShowCheckPW(false)
                          }}
                          width={24}
                          height={24}
                        />
                      ) : (
                        <EyeIcon
                          onClick={() => {
                            setShowCheckPW(true)
                          }}
                          width={24}
                          height={24}
                        />
                      )
                    }
                    value={checkPW}
                    setValue={(e) => {
                      setCheckPW(e.target.value)
                    }}
                    customClassName={'w-full'}
                    inputBoxStyle={'default'}
                    placeholder={'새 비밀번호 확인'}
                    type={showCheckPW ? 'text' : 'password'}
                  />
                  {isPasswordMatch !== undefined ? (
                    <div className="badge-md">
                      {isPasswordMatch ? null : <p className="text-error">비밀번호가 일치하지 않습니다.</p>}
                    </div>
                  ) : null}
                </section>
              </>
            ) : null}
          </section>
        )}
      </div>
      <div className="absolute bottom-10 w-full px-5">
        <Button
          onClick={async () => {
            if (type === 'id') {
              const result = await patchModifyUserId(newId)
              if (result.success) {
                router.push('/login')
              } else {
                //에러처리
              }
            } else {
              const result = await patchModifyPassword(newPW)
              if (result.success) {
                router.push('/login')
              } else {
                //에러처리
              }
            }
          }}
          disabled={type === 'id' ? isIdDuplicate !== false : !(isPasswordValid === true && isPasswordMatch === true)}
          type={
            type === 'id'
              ? isIdDuplicate === false
                ? 'active'
                : 'disabled'
              : isPasswordValid === true && isPasswordMatch === true
                ? 'active'
                : 'disabled'
          }
          size={'lg'}
          customClassName={'w-full'}
        >
          변경완료
        </Button>
      </div>
    </div>
  )
}
