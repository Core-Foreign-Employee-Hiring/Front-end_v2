/**
 * ISO 날짜 문자열을 상대적 시간 또는 포맷된 날짜로 변환
 * @param dateString - ISO 8601 형식의 날짜 문자열 (예: "2025-08-15T07:24:18.322Z")
 * @returns 상대적 시간 문자열 (예: "5분 전", "1주일 전", "25.11.11")
 */
export const formatRelativeTime = (dateString: string): string => {
  const now = new Date()
  const targetDate = new Date(dateString)

  // 밀리초 단위 차이 계산
  const diffMs = now.getTime() - targetDate.getTime()

  // 각 시간 단위를 밀리초로 정의
  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour
  const week = 7 * day
  const month = 30 * day // 대략적인 한 달

  // 1분 미만
  if (diffMs < minute) {
    return '방금 전'
  }

  // 1시간 미만 - 분 단위
  if (diffMs < hour) {
    const minutes = Math.floor(diffMs / minute)
    return `${minutes}분 전`
  }

  // 1일 미만 - 시간 단위
  if (diffMs < day) {
    const hours = Math.floor(diffMs / hour)
    return `${hours}시간 전`
  }

  // 1주일 미만 - 일 단위
  if (diffMs < week) {
    const days = Math.floor(diffMs / day)
    return `${days}일 전`
  }

  // 1달 미만 - 주 단위
  if (diffMs < month) {
    const weeks = Math.floor(diffMs / week)
    return `${weeks}주일 전`
  }

  // 1달 이상 - 날짜 형식 (YY.MM.DD)
  const year = targetDate.getFullYear().toString().slice(2) // 뒤 2자리
  const monthNumber = (targetDate.getMonth() + 1).toString().padStart(2, '0')
  const date = targetDate.getDate().toString().padStart(2, '0')

  return `${year}.${monthNumber}.${date}`
}
