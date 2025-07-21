import Input from '@/components/common/Input'
import { useState } from 'react'
import { useRecruitStore } from '@/store/recruitStore'

export default function ApplicationMethodField() {
  const [applicationMethod, setApplicationMethod] = useState<
    '홈페이지 지원' | '전화/문자 지원' | '이메일 지원' | undefined
  >(undefined)
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const directInputApplicationMethod = useRecruitStore((state) => state.recruitPostData.directInputApplicationMethod)

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg">
        지원방법 <span className="text-main">*</span>
      </p>
      <section className="flex flex-col gap-y-3">
        <div className="flex gap-x-3">
          <div className="flex items-center gap-x-1">
            {applicationMethod === '홈페이지 지원' ? (
              <div
                onClick={() => {
                  setApplicationMethod(undefined)
                  setState({
                    recruitPostData: {
                      ...recruitPostData,
                      applicationMethod: undefined,
                    },
                  })
                }}
                className="bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full"
              >
                <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setApplicationMethod('홈페이지 지원')
                  setState({
                    recruitPostData: {
                      ...recruitPostData,
                      applicationMethod: 'WEBSITE',
                    },
                  })
                }}
                className="border-gray3 h-[20px] w-[20px] rounded-full border-[1.6px]"
              />
            )}
            <p className="button text-gray5">홈페이지 지원</p>
          </div>
          <div className="flex items-center gap-x-2">
            {applicationMethod === '전화/문자 지원' ? (
              <div
                onClick={() => {
                  setApplicationMethod(undefined)
                  setState({
                    recruitPostData: {
                      ...recruitPostData,
                      applicationMethod: undefined,
                    },
                  })
                }}
                className="bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full"
              >
                <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setApplicationMethod('전화/문자 지원')
                  setState({
                    recruitPostData: {
                      ...recruitPostData,
                      applicationMethod: 'PHONE_SMS',
                    },
                  })
                }}
                className="border-gray3 h-[20px] w-[20px] rounded-full border-[1.6px]"
              />
            )}
            <p className="button text-gray5">전화/문자 지원</p>
          </div>
          <div className="flex items-center gap-x-2">
            {applicationMethod === '이메일 지원' ? (
              <div
                onClick={() => {
                  setApplicationMethod(undefined)
                  setState({
                    recruitPostData: {
                      ...recruitPostData,
                      applicationMethod: undefined,
                    },
                  })
                }}
                className="bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full"
              >
                <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setApplicationMethod('이메일 지원')
                  setState({
                    recruitPostData: {
                      ...recruitPostData,
                      applicationMethod: 'EMAIL',
                    },
                  })
                }}
                className="border-gray3 h-[20px] w-[20px] rounded-full border-[1.6px]"
              />
            )}
            <p className="button text-gray5">이메일 지원</p>
          </div>
        </div>

        <div className="flex w-full items-center gap-x-3">
          <p className="subtitle-sm text-gray5 whitespace-nowrap">
            {applicationMethod === '홈페이지 지원'
              ? '링크'
              : applicationMethod === '전화/문자 지원'
                ? '번호'
                : '이메일'}
          </p>
          <Input
            value={directInputApplicationMethod ?? ''}
            setValue={(e) => {
              setState({
                recruitPostData: {
                  ...recruitPostData,
                  directInputApplicationMethod: e.target.value,
                },
              })
            }}
            placeholder={'직접입력'}
            inputBoxStyle={'default'}
            customClassName={'w-full'}
          ></Input>
        </div>
      </section>
    </div>
  )
}
