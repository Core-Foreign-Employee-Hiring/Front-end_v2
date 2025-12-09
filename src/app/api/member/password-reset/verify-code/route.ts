import { apiCallServer } from '@/lib/api.server'

export async function POST(request: Request) {
  try {
    const code: string = await request.json()

    if (!code) {
      return Response.json({ error: 'code is required' }, { status: 500 })
    }

    const endpoint = `/api/v2/member/password-reset/verify-code`

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer(endpoint, {
      method: 'POST',
      body: JSON.stringify(code),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
