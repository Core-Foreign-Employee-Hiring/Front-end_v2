import { authorizedFetch } from '@/lib/common'

/**
 * 합격 아카이브 등록
 */
export const postArchiveData = async (formData: FormData) => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pass-archives`, {
    method: 'POST',
    body: formData,
  })

  const data = await response.json()
  return data
}
