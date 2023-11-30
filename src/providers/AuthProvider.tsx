'use client'
import { useAuth } from '@/hooks/useAuth'
import { useEffect, type PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation"
import { ACCESS_TOKEN } from '@/constants/auth.constants';
import { LOGIN, REGISTER } from '@/config/url.config';


export default function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const {user, isLoggedIn} = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      window.localStorage.setItem(ACCESS_TOKEN, user?.jwt || '')
    }
  }, [user, isLoggedIn])

  useEffect(() => {
    if (pathname !== LOGIN && pathname !== REGISTER) {
      const isLoggedIn = !!window.localStorage.getItem(ACCESS_TOKEN)
      if (!isLoggedIn) return router.push(LOGIN)
    }
  },[pathname, isLoggedIn])

 return <>{children}</>
}