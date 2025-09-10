import Button from '@/components/common/Button'
import { useMyPageStore } from '@/store/mypageStore'

export default function GenderField() {
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)
  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">성별</h3>
      <div className="flex gap-x-2">
        <Button
          onClick={() => {
            if (myPageInfo) {
              setState({
                ...myPageInfo,
                myPageInfo: {
                  ...myPageInfo,
                  gender: myPageInfo?.gender === 'MALE' ? undefined : 'MALE',
                },
              })
            }
          }}
          size={'lg'}
          customClassName={'w-full'}
          type={myPageInfo?.gender === 'MALE' ? 'active' : 'outline'}
        >
          남자
        </Button>
        <Button
          onClick={() => {
            if (myPageInfo) {
              setState({
                myPageInfo: {
                  ...myPageInfo,
                  gender: myPageInfo?.gender === 'FEMALE' ? undefined : 'FEMALE',
                },
              })
            }
          }}
          size={'lg'}
          customClassName={'w-full'}
          type={myPageInfo?.gender === 'FEMALE' ? 'active' : 'outline'}
        >
          여자
        </Button>
        <Button
          onClick={() => {
            if (myPageInfo) {
              setState({
                myPageInfo: {
                  ...myPageInfo,
                  gender: myPageInfo?.gender === 'NULL' ? undefined : 'NULL',
                },
              })
            }
          }}
          size={'lg'}
          customClassName={'w-full'}
          type={myPageInfo?.gender === 'NULL' ? 'active' : 'outline'}
        >
          선택 안함
        </Button>
      </div>
    </div>
  )
}
