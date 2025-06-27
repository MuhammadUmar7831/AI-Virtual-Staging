'use client'
import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    FaSignOutAlt,
    FaChevronLeft,
    FaChevronRight,
    FaChevronRight as ArrowRight,
} from 'react-icons/fa'
import Sparkling from '@/icons/Sparkling'
import Image from 'next/image'
import { CirclePlus } from 'lucide-react'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const pathname = usePathname()

    // Handle active links
    const isAddImages = pathname === '/admin' || pathname === '/admin/'

    const linkBaseClasses = 'text-md flex items-center gap-2 px-6 py-4 font-bold text-white'
    const activeClasses = 'bg-white/10 text-white font-medium py-4'

    return (
        <div className="flex max-h-screen">
            {/* Sidebar */}
            <div
                className={`${collapsed ? 'w-[80px]' : 'w-[320px]'
                    } bg-gradient-to-b from-[#000000] to-[#4A5282] text-white flex flex-col justify-between transition-all duration-300`}
            >
                <div>
                    {/* Plan Info and Toggle */}
                    <div className="p-6 border-b border-white/10">
                        <div className="flex justify-between items-center">
                            {!collapsed ? (
                                <div>
                                    <h3 className="text-xl font-bold">BALANCE</h3>
                                    <p className="text-xs text-gray-400">12 Images left</p>
                                </div>
                            ) : (
                                <div className="text-sm font-semibold m-1">MU</div>
                            )}
                            <button
                                onClick={() => setCollapsed(!collapsed)}
                                className="bg-white/10 hover:bg-white/20 text-xs p-1 rounded cursor-pointer"
                            >
                                {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
                            </button>
                        </div>

                        {!collapsed && (
                            <button className="mt-5 bg-[#1A1B22] text-white w-full px-10 py-5 rounded text-sm flex justify-center items-center gap-2">
                                <Sparkling />
                                Upgrade plan
                            </button>
                        )}
                    </div>

                    {/* Navigation Items */}
                    <nav className="mt-2 flex flex-col gap-1">

                        {/* Add images */}
                        <Link
                            href="/admin"
                            className={`${linkBaseClasses} ${isAddImages ? activeClasses : ''}`}
                        >
                            <CirclePlus size={22} />
                            {!collapsed && <span className="flex-1">Add Images</span>}
                            {!collapsed && isAddImages && <ArrowRight size={12} />}
                        </Link>
                    </nav>
                </div>

                {/* Logout Button */}
                <div className="p-6">
                    <button className="w-full flex items-center justify-center gap-2 bg-[#BF1111] py-4 text-md hover:bg-red-700 rounded-2xl cursor-pointer">

                        {!collapsed ? 'Logout' : <FaSignOutAlt />}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-[#fdfaf7] overflow-y-auto p-8 max-sm:px-2 py-10 overflow-x-hidden">
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
    )
}

export default Layout
