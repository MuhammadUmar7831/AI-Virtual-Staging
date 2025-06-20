"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='px-6 md:px-30  py-6 3xl:p-16 flex justify-between items-center'>
            <div>
                Logo
            </div>
            <nav className="hidden md:flex gap-10 3xl:gap-28 cursor-pointer">
                <Link className="font-normal" href="/pricing">Pricing</Link>
                <Link className="font-normal" href="/gallery">Gallery</Link>
            </nav>
            <div className='gap-5 hidden md:flex items-center'>
                <Link href={'/signin'} className='font-normal cursor-pointer'>
                    Sign in
                </Link>
                <Link href={'/signup'} className='bg-secondary text-white p-[10px] px-[20px] rounded-2xl cursor-pointer font-normal'>
                    Sign up
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="mr-2 mt-2 text-4xl md:hidden" onClick={() => setIsOpen(true)}>
                =
            </button>

            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-50 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Sidebar Menu */}
            <aside
                className={`fixed top-0 right-0 h-full w-64 bg-primary text-black shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-5 border-b">
                    <span className="font-medium">Menu</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="transform rotate-45"
                    >
                        +
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-6 p-5">
                    <Link className="font-normal" href="/pricing">Pricing</Link>
                    <Link className="font-normal" href="/gallery">Gallery</Link>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <Link href={'/signin'} className='font-normal cursor-pointer'>
                            Sign in
                        </Link>
                        <Link href={'/signup'} className='bg-secondary text-white p-[10px] px-[20px] rounded-[20px] cursor-pointer font-normal w-[50%]'>
                            Sign up
                        </Link>
                    </div>
                </nav>
            </aside>
        </header>
    )
}

export default Header
