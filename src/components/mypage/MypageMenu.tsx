import { Dispatch, SetStateAction } from 'react'

interface MypageMenuProps {
  setMypageType: Dispatch<SetStateAction<'회원정보' | '내 아카이브' | '문의하기'>>
  mypageType: '회원정보' | '내 아카이브' | '문의하기'
}
export default function MypageMenu({ setMypageType, mypageType }: MypageMenuProps) {
  return (
    <div className="flex">
      <button
        onClick={() => {
          setMypageType('회원정보')
        }}
        className={
          mypageType === '회원정보'
            ? 'border-main title-sm text-main w-full border-b-[2px] p-2'
            : 'body-md border-gray2 w-full border-x p-2'
        }
      >
        회원정보
      </button>
      <button
        onClick={() => {
          setMypageType('내 아카이브')
        }}
        className={
          mypageType === '내 아카이브'
            ? 'border-main title-sm text-main w-full border-b-[2px] p-2'
            : 'body-md border-gray2 w-full border-x p-2'
        }
      >
        내 아카이브
      </button>
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    setMypageType('문의하기')*/}
      {/*  }}*/}
      {/*  className={*/}
      {/*    mypageType === '문의하기'*/}
      {/*      ? 'border-main title-sm text-main w-full border-b-[2px] p-2'*/}
      {/*      : 'body-md border-gray2 w-full border-x p-2'*/}
      {/*  }*/}
      {/*>*/}
      {/*  문의하기*/}
      {/*</button>*/}
    </div>
  )
}
