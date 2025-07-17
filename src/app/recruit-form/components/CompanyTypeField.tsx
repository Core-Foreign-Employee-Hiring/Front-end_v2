import DropBox from '@/components/common/DropBox'
import { useState } from 'react'
import { useRecruitStore } from '@/store/recruitStore'
import { CompanyType } from '@/types/recruit'

export default function CompanyTypeField() {
  const [isDropBoxClicked, setIsDropBoxClicked] = useState<boolean>(false)
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const companyType = useRecruitStore((state) => state.recruitPostData.companyType)

  const companyTypeContents: { kor: string; eng: CompanyType }[] = [
    { kor: '대기업', eng: 'LARGE_CORPORATION' },
    { kor: '중견기업', eng: 'MIDSIZE_COMPANY' },
    { kor: '중소기업', eng: 'SMALL_MEDIUM_ENTERPRISE' },
    { kor: '소상공인', eng: 'MICRO_BUSINESS' },
    { kor: '개인사업자', eng: 'SOLE_PROPRIETOR' },
    { kor: '법인기업', eng: 'CORPORATION' },
    { kor: '사회적기업', eng: 'SOCIAL_ENTERPRISE' },
    { kor: '협동조합', eng: 'COOPERATIVE' },
  ]

  const convertContent = (eng: CompanyType | undefined) => {
    switch (eng) {
      case 'LARGE_CORPORATION':
        return '대기업'
      case 'MIDSIZE_COMPANY':
        return '중견기업'
      case 'SMALL_MEDIUM_ENTERPRISE':
        return '중소기업'
      case 'MICRO_BUSINESS':
        return '소상공인'
      case 'SOLE_PROPRIETOR':
        return '개인사업자'
      case 'CORPORATION':
        return '법인기업'
      case 'SOCIAL_ENTERPRISE':
        return '사회적기업'
      case 'COOPERATIVE':
        return '협동조합'
      default:
        return undefined
    }
  }

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        기업형태<span className="text-main">*</span>
      </p>
      <DropBox
        selectedValue={convertContent(companyType)}
        isDropBoxOpen={isDropBoxClicked}
        setIsDropBoxOpen={() => setIsDropBoxClicked(!isDropBoxClicked)}
        initValue={'기업형태를 입력해주세요.'}
      >
        {companyTypeContents.map((content: { kor: string; eng: CompanyType }) => {
          return (
            <div
              key={content.eng}
              onClick={() => {
                setState({ ...recruitPostData, recruitPostData: { ...recruitPostData, companyType: content.eng } })
                setIsDropBoxClicked(false)
              }}
              className="body-sm flex h-[60px] items-center px-4"
            >
              {content.kor}
            </div>
          )
        })}
      </DropBox>
    </div>
  )
}
