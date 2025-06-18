import Google from '@/icons/Google'
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
                <div className='mt-20 max-lg:w-[60%] max-sm:w-[80%]'>
                    <h1 className='text-[40px] md:text-[80px] font-normal mb-20'>Sign up</h1>
                    <div className='flex flex-col gap-5 mb-10'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#323A46] text-[13px] font-bold'>Email</p>
                            <input className='p-2 border-[0.74px] rounded-[5.89px] w-[55%] max-lg:w-full bg-[#FAFAFC] border-[#CBD1D8] text-[#8d9093] outline-none' type="email" placeholder='commitcommunity@gmail.com' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#323A46] text-[13px] font-bold'>Password</p>
                            <input className='p-2 border-[0.74px] rounded-[5.89px] w-[55%] max-lg:w-full  bg-[#FAFAFC] border-[#CBD1D8] text-[#8d9093] outline-none' type="password" placeholder='*********' />
                        </div>
                    </div>
                    <button className='bg-[#2C2F40] w-[55%] max-lg:w-full  text-white p-3 rounded-[5.89px] cursor-pointer'>
                        Sign up
                    </button>
                    <div className='flex w-[55%] justify-center items-center gap-0.5 my-5 max-lg:w-full '>
                        <div className='w-[50%] h-[0.1px] bg-[#7E8B9E]'></div>
                        <p className='text-[10px] text-[#7E8B9E]'>OR</p>
                        <div className='w-[50%] h-[0.5px] bg-[#7E8B9E]'></div>
                    </div>
                    <Link href={'/signup/information'} className=' border-2 border-[#E0E3E8] w-[55%] text-black p-3 rounded-[5.89px] cursor-pointer flex justify-center items-center gap-2 max-lg:w-full '>
                        <Google />
                        <p className='text-[#7E8B9E] text-[12.89px] font-medium'>Start with Google</p>
                    </Link>
                    <p className='text-[#4280EF] max-lg:w-full  text-[12.89px] font-medium text-center w-[55%] mt-5'>Already have an account? Sign in <Link href={'/signin'} className='border-b-[0.78px]'>here</Link></p>
                </div>

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

export default page
