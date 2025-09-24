'use client'

import { useState } from 'react'
import Link from 'next/link'

type ApplicationMethodType = 'EMAIL' | 'PHONE_SMS' | 'WEBSITE'

interface Props {
  directInputApplicationMethod: string
  applicationMethod: ApplicationMethodType
}

const useClipboard = () => {
  const [isLoading, setIsLoading] = useState(false)

  const copyToClipboard = async (text: string, type: 'email' | 'phone'): Promise<boolean> => {
    setIsLoading(true)

    try {
      // Next.js에서 window 객체 확인
      if (typeof window === 'undefined') {
        throw new Error('Server side rendering')
      }

      await navigator.clipboard.writeText(text)

      // 성공 피드백 (toast 라이브러리 사용 권장)
      const message = type === 'email' ? '이메일이 복사되었습니다.' : '전화번호가 복사되었습니다.'

      // react-hot-toast나 다른 toast 라이브러리 사용 예시
      // toast.success(message)
      alert(message) // 임시로 alert 사용

      return true
    } catch (error) {
      console.error('Clipboard copy failed:', error)

      // Fallback for older browsers or server-side
      try {
        if (typeof window !== 'undefined') {
          const textArea = document.createElement('textarea')
          textArea.value = text
          textArea.style.position = 'fixed'
          textArea.style.left = '-999999px'
          textArea.style.top = '-999999px'
          document.body.appendChild(textArea)
          textArea.focus()
          textArea.select()

          const success = document.execCommand('copy')
          document.body.removeChild(textArea)

          if (success) {
            const message = type === 'email' ? '이메일이 복사되었습니다.' : '전화번호가 복사되었습니다.'
            alert(message)
            return true
          }
        }

        throw new Error('Copy command failed')
      } catch (fallbackError) {
        alert('복사에 실패했습니다. 수동으로 복사해주세요.')
        return false
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { copyToClipboard, isLoading }
}
export default useClipboard
