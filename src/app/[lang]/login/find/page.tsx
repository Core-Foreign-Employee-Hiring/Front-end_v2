import React from 'react'
import { SearchParams } from 'next/dist/server/request/search-params'
import { I18nParams } from '@/lib/i18n.types'

import IdProcess from '@/components/login/IdProcess'
import IdResult from '@/components/login/IdResult'
import PassWordProcess from '@/components/login/PassWordProcess'
import PassWordResult from '@/components/login/PassWordResult'
import FindAccountProcessHeader from '@/components/login/FindAccountProcessHeader'
import Header from '@/components/common/Header'

type StepType = '1' | '2'
type SearchType = 'id' | 'pw'

/**
 * 'step' 에 따라 올바른 컴포넌트를 반환하는 스위처 컴포넌트
 */
function FindAccountProcessStepSwitcher({ type, step }: { step: StepType; type: SearchType }) {
  if (type === 'id') {
    if (step === '1') return <IdProcess />
    if (step === '2') return <IdResult />
  }
  if (type === 'pw') {
    if (step === '1') return <PassWordProcess />
    if (step === '2') return <PassWordResult />
  }

  return <IdProcess />
}

export default async function FindAccountProcessPage({
  searchParams,
  params,
}: {
  params: Promise<I18nParams>
  searchParams: SearchParams
}) {
  const step = (searchParams.step as StepType) || '1' // 기본값
  const type = (searchParams.type as SearchType) || 'id' // 기본값

  return (
    <main className="mx-auto flex min-h-screen w-[375px] flex-col bg-white">
      <Header params={params} headerType={'dynamic'} title={type === 'id' ? '아이디 찾기' : '비밀번호 찾기'} />
      <div className="flex flex-col gap-y-[40px] pt-[60px]">
        {/* 메뉴바 */}
        <FindAccountProcessHeader step={step} type={type} />

        {/* 본문 */}
        <FindAccountProcessStepSwitcher step={step} type={type} />
      </div>
    </main>
  )
}
