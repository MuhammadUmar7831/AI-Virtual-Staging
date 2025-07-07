'use client'
import Form from '@/components/signup/Form'
import OTP from '@/components/signup/OTP'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {
    const [token, setToken] = useState("")
    const [user, setUser] = useState<SignUpBody>()

    return (
        <div className='flex w-full'>
            <div className='2xl:w-[55%] w-[65%] max-lg:w-full max-lg:items-center px-20 max-lg:px-0 pt-5 min-h-[110vh] flex flex-col '>
                <div>
                    <h1 className='text-2xl'>LOGO</h1>
                </div>
                {
                    !user ? (
                        <Form next={({ token, user }) => {
                            setUser(user)
                            setToken(token)
                        }} />
                    ) : (
                        <OTP token={token} user={user} />
                    )
                }


            </div>
            <div className='2xl:w-[45%] w-[35%] max-lg:hidden relative min-h-[110vh]'>
                <div className='absolute top-0 left-0 w-[50%] h-full z-50'>
                    <Image
                        src={'/signup-img1.jpg'}
                        fill
                        alt='signin'
                        className='object-cover rounded-l-2xl'
                    />
                </div>
                <div className='absolute top-0 left-[20%] w-[60%] h-full z-40'>
                    <Image
                        src={'/signup-img2.jpg'}
                        fill
                        alt='signin'
                        className='object-cover rounded-l-2xl'
                    />
                </div>
                <div className='absolute top-0 left-[40%] w-[60%] h-full z-30'>
                    <Image
                        src={'/signup-img3.jpg'}
                        fill
                        alt='signin'
                        className='object-cover rounded-l-2xl'
                    />
                </div>
            </div>

        </div>
    )
}

export default Page
