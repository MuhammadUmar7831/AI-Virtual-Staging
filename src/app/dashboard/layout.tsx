'use client'
import React, { ReactNode, useState } from 'react'

import Image from 'next/image'
import PrivateRoute from '@/components/PrivateRoute'
import SideBar from '@/components/dashboard/SideBar'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <PrivateRoute>
            
            <div className="flex min-h-screen">
                {/* Sidebar */}
                
                <SideBar/>
                {/* Main Content */}
                <div className="flex-1 bg-[#fdfaf7] overflow-y-auto p-8 overflow-x-hidden">
                    <div className='flex flex-wrap gap-5'>
                        <Image
                            src={'/home/client2.jpg'}
                            alt=''
                            width={50}
                            height={50}
                            className='rounded-full'
                        />
                        <div className=''>
                            <p className='font-bold text-xl '>Muhammad Umar</p>
                            <p className='text-normal text-wrap'>muhammadumer@gmail.com</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </PrivateRoute>
    )
}

export default Layout
