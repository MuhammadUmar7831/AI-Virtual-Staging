'use client'

import { useRouter, usePathname } from 'next/navigation'
import { getUserApiCall } from '@/api/user'
import { useUserStore } from '@/lib/store'
import { ReactNode, useEffect, useState } from 'react'
import { FiShield } from 'react-icons/fi'
import Header from './shared/Header'
import Footer from './shared/Footer'

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
  }, [user, pathname, router, setUser])

  if (!checked) return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 px-4">
        {/* Spinner with icon overlay */}
        <div className="relative w-20 h-20">
          {/* Spinning circle */}
          <div className="w-full h-full border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>

          {/* Pulsing shield icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <FiShield className="text-blue-600 text-2xl animate-pulse" />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Authenticating...</h2>
          <p className="text-gray-600 text-sm mt-1">
            Verifying your credentials securely. Please wait.
          </p>
        </div>

        {/* Bouncing dots */}
        <div className="flex space-x-1 mt-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>

        {/* Security badge */}
        <div className="flex items-center bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-xl text-sm mt-6 shadow-sm">
          <FiShield className="mr-2 text-green-600" />
          Secure authentication powered by end-to-end encryption
        </div>
      </div>
      <Footer />
    </>
  );

  return children
}
