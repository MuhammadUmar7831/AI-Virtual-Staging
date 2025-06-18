import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex w-full'>
            <div className='2xl:w-[55%] w-[65%] max-lg:w-full max-lg:items-center px-20 max-lg:px-0 pt-5 min-h-[110vh] flex flex-col '>
                <div>
                    <h1 className='text-2xl'>LOGO</h1>
                </div>
                <div className='lg:mt-52 mt-20 max-lg:w-[60%] max-sm:w-[80%]'>
                    <div className='flex flex-col gap-5 mb-10'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#323A46] text-[13px] font-bold'>You name</p>
                            <input className='p-2 border-[0.74px] rounded-[5.89px] w-[55%] max-lg:w-full bg-[#FAFAFC] border-[#CBD1D8] text-[#8d9093] outline-none' type="email" placeholder='individual' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#323A46] text-[13px] font-bold'>Why you want to use this platform</p>
                            <input className='p-2 border-[0.74px] rounded-[5.89px] w-[55%] max-lg:w-full  bg-[#FAFAFC] border-[#CBD1D8] text-[#8d9093] outline-none' type="text" placeholder='Start typing' />
                        </div>
                    </div>
                    <div className=' '>
                        <Link href={'/dashboard'} className='bg-[#2C2F40] block w-[55%] max-lg:w-full text-white p-3 rounded-[5.89px] cursor-pointer text-center'>
                            Enter Dashboard
                        </Link>
                    </div>
                </div>

            </div>
            <div className='2xl:w-[45%] w-[35%] max-lg:hidden relative min-h-[110vh]'>
                <div className='absolute top-0 left-0 w-[40%] h-full z-50'>
                    <Image
                        src={'/signup-img4.jpg'}
                        fill
                        alt='signin'
                        className='object-cover rounded-l-2xl'
                    />
                </div>
                <div className='absolute top-0 left-[20%] w-[55%] h-full z-40'>
                    <Image
                        src={'/signup-img6.jpg'}
                        fill
                        alt='signin'
                        className='object-cover rounded-l-2xl'
                    />
                </div>
                <div className='absolute top-0 left-[40%] w-[60%] h-full z-30'>
                    <Image
                        src={'/signup-img5.jpg'}
                        fill
                        alt='signin'
                        className='object-cover rounded-l-2xl'
                    />
                </div>
            </div>

        </div>
    )
}

export default page
