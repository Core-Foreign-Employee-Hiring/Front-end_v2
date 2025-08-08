'use client'
import Header from '@/components/common/Header'
import { useState } from 'react'
import MypageMenu from '@/components/mypage/MypageMenu'
import UserInfoEditForm from '@/components/mypage/UserInfoEditForm'
import MyArchiveList from '@/components/mypage/MyArchiveList'
import AskForm from '@/components/mypage/AskForm'

export default function Mypage() {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  const [mypageType, setMypageType] = useState<'회원정보' | '내 아카이브' | '문의하기'>('회원정보')

  return (
    <main>
      <Header setIsHomeMenuOpen={setIsHomeMenuOpen} isHomeMenuOpen={isHomeMenuOpen} />
      <div className="h-[112px]" />
      <div className="flex flex-col px-5">
        <h1 className="title-md">마이페이지</h1>
      </div>

      <div className="mt-5 flex flex-col gap-y-[40px]">
        <MypageMenu setMypageType={setMypageType} mypageType={mypageType} />
        {mypageType === '회원정보' ? <UserInfoEditForm /> : null}
        {mypageType === '내 아카이브' ? <MyArchiveList /> : null}
        {mypageType === '문의하기' ? <AskForm /> : null}
      </div>
    </main>
  )
}
