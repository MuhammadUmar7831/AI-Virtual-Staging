'use client'

import { useRouter, usePathname } from 'next/navigation'
import { getUserApiCall } from '@/api/user'
import { useUserStore } from '@/lib/store'
import { ReactNode, useEffect, useState } from 'react'

interface PrivateRouteProps {
  children: ReactNode
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { user, setUser } = useUserStore()
  const [checked, setChecked] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await getUserApiCall()
        if (!res) {
          router.push('/signin')
          return
        }

        const fetchedUser = res.data
        setUser(fetchedUser)

        if (fetchedUser.role === 'admin' && !pathname.startsWith('/admin')) {
          router.push('/admin')
        } else if (fetchedUser.role === 'customer' && !pathname.startsWith('/dashboard')) {
          router.push('/dashboard')
        } else {
          setChecked(true)
        }
      } catch (error) {
        console.error(error)
        router.push('/signin')
      }
    }

    if (!user) {
      verifyUser()
    } else {
      if (user.role === 'admin' && !pathname.startsWith('/admin')) {
        router.push('/admin')
      } else if (user.role === 'customer' && !pathname.startsWith('/dashboard')) {
        router.push('/dashboard')
      } else {
        setChecked(true)
      }
    }
  }, [])

  if (!checked) return <div className="p-4">Loading...</div>

  return children
}
