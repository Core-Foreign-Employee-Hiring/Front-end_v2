import { MobileArchiveIcon, MobileHomeIcon, MobileStudyIcon, PersonIcon } from '@/assets/svgComponents'
import Button from '@/components/common/Button'
import { useRouter } from 'next/navigation'
import { UserDataType } from '@/types/common'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface MenuProps {
  setIsHomeMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function Menu({ setIsHomeMenuOpen }: MenuProps) {
  const router = useRouter()
  const [userData, setUserData] = useState<UserDataType | null>(null)

  useEffect(() => {
    // 클라이언트 사이드에서만 localStorage 접근
    if (typeof window !== 'undefined') {
      const storedUserData = localStorage.getItem('userData')
      if (storedUserData) {
        try {
          const parsedUserData: UserDataType = JSON.parse(storedUserData)
          setUserData(parsedUserData)
        } catch (error) {
          console.error('Failed to parse user data from localStorage:', error)
          setUserData(null)
        }
      }
    }
  }, [])

  const navContents = [
    { title: '홈', router: '/', icon: <MobileHomeIcon width={23} height={24} /> },
    { title: '합격 아카이브', router: '/review', icon: <MobileArchiveIcon width={24} height={17} /> },
    { title: '스터디', router: '/study', icon: <MobileStudyIcon width={21} height={24} /> },
  ]

  return (
    <div className="flex flex-col gap-y-[16px] p-5">
      {userData ? (
        <section className="border-gray2 bg-gray1 flex flex-col gap-y-4 rounded-[20px] border p-5">
          <div className="flex items-center gap-x-4">
            <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white">
              <PersonIcon width={38} height={38} />
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="subtitle-md">{userData.name}</p>
              <p className="body-sm text-gray4">{userData.userId}</p>
            </div>
          </div>
          <Button
            onClick={() => {
              router.push('/mypage')
              setIsHomeMenuOpen(false)
            }}
            type={'outline'}
            customClassName={'w-full bg-white'}
            size={'lg'}
          >
            마이페이지
          </Button>
        </section>
      ) : (
        <section className="border-gray2 bg-gray1 flex flex-col gap-y-4 rounded-[20px] border p-5">
          <div className="flex items-center gap-x-4">
            <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white">
              <PersonIcon width={38} height={38} />
            </div>
            <p className="subtitle-md">로그인이 필요해요</p>
          </div>
          <Button
            onClick={() => {
              router.push('/login')
              setIsHomeMenuOpen(false)
            }}
            type={'outline'}
            customClassName={'w-full bg-white'}
            size={'lg'}
          >
            로그인
          </Button>
        </section>
      )}
      <section className="flex flex-col">
        {navContents.map((content) => {
          return (
            <div
              key={content.title}
              onClick={() => {
                router.push(content.router)
                setIsHomeMenuOpen(false)
              }}
              className="flex h-[52px] items-center gap-x-2 px-4"
            >
              {content.icon} <p className="button text-gray5">{content.title}</p>
            </div>
          )
        })}
      </section>
    </div>
  )
}
