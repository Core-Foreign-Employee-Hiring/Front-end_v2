import { useState, useCallback } from 'react'

// T는 모달에 전달할 데이터의 타입 (기본값은 null)
export const useModal = <T = any>(initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)
  const [content, setContent] = useState<T | null>(null)

  // 모달 열기 (데이터가 있다면 함께 저장)
  const open = useCallback((data?: T) => {
    if (data) setContent(data)
    setIsOpen(true)
  }, [])

  // 모달 닫기
  const close = useCallback(() => {
    setIsOpen(false)
    // 닫을 때 데이터를 초기화하고 싶다면 아래 주석 해제
    setContent(null)
  }, [])

  // 토글 (필요한 경우)
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return {
    isOpen,
    content,
    open,
    close,
    toggle,
    setIsOpen, // 필요하다면 직접 제어권도 노출
  }
}
