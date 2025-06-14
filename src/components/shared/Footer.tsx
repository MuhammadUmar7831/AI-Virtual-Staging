import CopyWrite from '@/icons/CopyWrite'
import Facebook from '@/icons/Facebook'
import Instagram from '@/icons/Instagram'
import LinkedIn from '@/icons/LinkedIn'
import Twitter from '@/icons/Twitter'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-secondary p-5">
            <div className='h-full w-full border-dashed border-2 border-b-0 border-[#ffffff7c] rounded-t-xl px-6 lg:px-20 3xl:p-16 pt-16 min-h-[480px] flex flex-col justify-between'>
                <div className='flex justify-between gap-[100px] max-lg:flex-col'>
                    <div className='lg:w-[30%] w-full max-lg:text-center flex flex-col gap-5'>
                        <div>
                            <h1 className='text-white font-bold text-3xl'>LOGO</h1>
                        </div>
                        <p className='font-bold text-white opacity-100 lg:text-[20px] text-[15px]'>Your AI-powered interior design platform transforming how spaces are visualized.</p>
                        <div className='flex gap-2 max-lg:justify-center'>
                            <Link href={''}>
                                <Instagram />
                            </Link>
                            <Link href={''}>
                                <Twitter />
                            </Link>
                            <Link href={''}>
                                <LinkedIn />
                            </Link>
                            <Link href={''}>
                                <Facebook />
                            </Link>
                        </div>
                    </div>
                    <div className='lg:w-[70%] w-full flex justify-between max-lg:flex-col gap-8 max-lg:items-center max-lg:justify-center'>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-white opacity-100 text-[20px] max-lg:text-center'>Pages</h1>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Gallery</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Pricing</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>How to use </Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Why us</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>FAQS</Link>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-white opacity-100 text-[20px] max-lg:text-center'>Styles</h1>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Modern</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Minimalist</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Scandinavian</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Traditional</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Luxury</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Urban Modern</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Industrial</Link>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-white opacity-100 text-[20px] max-lg:text-center'>Features</h1>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Upload Image</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Choose Design Style</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Virtual Staging</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Before/After Viewer</Link>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-white opacity-100 text-[20px] max-lg:text-center'>Who are we for</h1>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Real estate professionals </Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Interior designers</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Architects</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Property developers</Link>
                            <Link href={''} className='text-white opacity-80 mt-4 max-lg:text-center'>Individuals</Link>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mx-5 max-lg:flex-col max-lg:text-center max-lg:mt-10'>
                    <div className='flex gap-2 max-lg:justify-center'>
                        <div className='border-1 rounded-full border-white w-[23px] p-1 flex'>
                            <CopyWrite />
                        </div>
                        <p className='font-normal text-white max-lg:text-center'>All Right Reserved</p>
                    </div>
                    <div>
                        <p className='font-normal text-white'>Terms & conditions  |  Refund policy</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
