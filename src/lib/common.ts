import Cookies from 'js-cookie'

/**
 * 기본 api 요청 함수
 * @param input
 * @param init
 * @param retry
 */
export const authorizedFetch = async (input: RequestInfo, init: RequestInit = {}, retry = true): Promise<Response> => {
  const accessToken = Cookies.get('accessToken')
  const isFormData = init.body instanceof FormData

  const headers: Record<string, string> = {
    ...(init.headers as Record<string, string>),
    Authorization: `Bearer ${accessToken}`,
  }

  if (!isFormData && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json'
  }

  const response = await fetch(input, {
    ...init,
    headers,
    credentials: 'include',
  })

  if (response.status === 401 && retry) {
    const refreshed = await refreshAccessToken()
    if (refreshed) {
      return authorizedFetch(input, init, false)
    }
  }

  return response
}

/**
 * refreshToken을 이용해 accessToken 재발급
 */
const refreshAccessToken = async (): Promise<boolean> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/member/token-reissue`, {
      method: 'GET',
      credentials: 'include', // refreshToken이 쿠키에 있다고 가정
    })

    if (!res.ok) {
      console.warn('🔐 Refresh token 만료 또는 유효하지 않음')
      Cookies.remove('accessToken') // 로그인 상태 초기화
      Cookies.remove('refreshToken') // 로그인 상태 초기화
      return false
    }

    const newAccessToken = res.headers.get('Authorization')
    const newRefreshToken = res.headers.get('Authorization-Refresh')

    if (newAccessToken && newRefreshToken) {
      Cookies.set('accessToken', newAccessToken)
      Cookies.set('refreshToken', newRefreshToken)
      return true
    }

    return false
  } catch (e) {
    console.error('🚨 토큰 갱신 실패:', e)
    return false
  }
}

/**
 * 세계 나라 데이터 불러오는 api
 */
export const nationalityInfoData = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2', {
    method: 'GET',
  })
  return await response.json()
}
