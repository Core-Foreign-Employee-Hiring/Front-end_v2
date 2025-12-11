import { I18nParams } from '@/lib/i18n.types'

import initTranslations from '@/i18n/i18n'

import { serverFetchPostDetailData } from '@/lib/server/recruit'

import RecruitDetailView from '@/components/recruit/detail/RecruitDetailView'
import TranslationsProvider from '@/components/common/TranslationsProvider'

const i18nNamespaces = ['common']

interface PageProps {
  params: {
    lang: string
    recruitId: string
  } & I18nParams
}
export default async function PostDetailPage({ params }: PageProps) {
  const lang = params.lang
  const { resources } = await initTranslations(lang, i18nNamespaces)

  const response = await serverFetchPostDetailData(params.recruitId)
  const recruitData = response.data

  if (!recruitData)
    return (
      <div className="flex justify-center py-8">
        <div className="border-main h-8 w-8 animate-spin rounded-full border-b-2" />
      </div>
    )

  return (
    <div className="relative mx-auto min-h-screen w-[375px] bg-white pt-[80px]">
      <TranslationsProvider locale={lang} namespaces={i18nNamespaces} resources={resources}>
        <RecruitDetailView recruitData={recruitData} />
      </TranslationsProvider>
    </div>
  )
}
