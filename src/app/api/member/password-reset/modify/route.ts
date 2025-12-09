import { apiCallServer } from '@/lib/api.server'
import { ModifyPWRequestDataType } from '@/types/auth'

export async function PATCH(request: Request) {
  try {
    const modifyData: ModifyPWRequestDataType = await request.json()

    if (!modifyData) {
      return Response.json({ error: 'modifyData is required' }, { status: 500 })
    }

    const endpoint = `/api/v2/member/password-reset/modify`

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(modifyData),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
