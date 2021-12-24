import { useRouter } from 'next/router'

export function useLanguage() {
  const router = useRouter()
  return router.asPath.includes('/en') ? 'EN' : 'ES'
}
