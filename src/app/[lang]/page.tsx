import GATracker from '@/components/common/GoogleAnalytics'
import { getRequestClient } from '@/app/getRequestClient'
import { serverFetchAllPosts } from '@/lib/server/recruit'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import RecruitList from '@/components/recruit/RecruitList'
import { I18nParams } from '@/lib/i18n.types'
import TranslationsProvider from '@/components/common/TranslationsProvider'
import initTranslations from '@/i18n/i18n'

const DEFAULT_SIZE = 20

const i18nNamespaces = ['common']

interface PageProps {
  params: Promise<I18nParams>
}
export default async function Home({ params }: PageProps) {
  const queryClient = getRequestClient()

  const { lang } = await params
  const { resources } = await initTranslations(lang, i18nNamespaces)

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['jobs'],
    queryFn: ({ pageParam }) => serverFetchAllPosts({ page: pageParam as number, size: DEFAULT_SIZE }),
    initialPageParam: 1,
    pages: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage || !lastPage.data) {
        return undefined
      }

      const { page, totalPages } = lastPage.data

      if (page < totalPages) {
        return page + 1
      }

      return undefined
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TranslationsProvider locale={lang} namespaces={i18nNamespaces} resources={resources}>
        <GATracker />
        <RecruitList lang={lang} />
      </TranslationsProvider>
    </HydrationBoundary>
  )
}
