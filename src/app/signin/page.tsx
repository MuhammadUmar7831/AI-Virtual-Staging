"use client"
import { googleAuthApiCall, signinApiCall } from '@/api/auth'
import Google from '@/icons/Google'
import { auth, googleProvider } from '@/lib/firebase'
import { signInWithPopup } from 'firebase/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

const Page = () => {
    const [data, setData] = useState<SignInBody>({
        email: '',
        password: ''
    })
    const router = useRouter()

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const res = await signinApiCall(data);
        if (res) {
            localStorage.setItem('token', res.data.token);
            router.push("/dashboard")
        }
    }

    async function handleGoogleClick() {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const token = await user.getIdToken();

        const res = await googleAuthApiCall({ token });
        if (res) {
            localStorage.setItem('token', res.data.token);
            router.push("/dashboard")
        }
    }

    return (
        <div className='flex w-full'>
            <div className='2xl:w-[55%] w-[65%] max-lg:w-full max-lg:items-center px-20 max-lg:px-0 pt-5 min-h-[110vh] flex flex-col '>
                <div>
                    <h1 className='text-2xl'>LOGO</h1>
                </div>
                <form onSubmit={handleSubmit} className='mt-20 max-lg:w-[60%] max-sm:w-[80%]'>
                    <h1 className='text-[40px] md:text-[80px] font-normal mb-20'>Login</h1>
                    <div className='flex flex-col gap-5 mb-10'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#323A46] text-[13px] font-bold'>Email</p>
                            <input
                                className='p-2 border-[0.74px] rounded-[5.89px] w-[55%] max-lg:w-full bg-[#FAFAFC] border-[#CBD1D8] text-[#8d9093] outline-none'
                                type="email"
                                placeholder='commitcommunity@gmail.com'
                                value={data.email}
                                onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#323A46] text-[13px] font-bold'>Password</p>
                            <input
                                className='p-2 border-[0.74px] rounded-[5.89px] w-[55%] max-lg:w-full  bg-[#FAFAFC] border-[#CBD1D8] text-[#8d9093] outline-none'
                                type="password"
                                placeholder='*********'
                                value={data.password}
                                onChange={(e) => setData(prev => ({ ...prev, password: e.target.value }))}
                            />
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='bg-[#2C2F40] w-[55%] max-lg:w-full  text-white p-3 rounded-[5.89px] cursor-pointer'>
                        Login
                    </button>
                    <div className='flex w-[55%] justify-center items-center gap-0.5 my-5 max-lg:w-full '>
                        <div className='w-[50%] h-[0.1px] bg-[#7E8B9E]'></div>
                        <p className='text-[10px] text-[#7E8B9E]'>OR</p>
                        <div className='w-[50%] h-[0.5px] bg-[#7E8B9E]'></div>
                    </div>
                    <button
                        onClick={handleGoogleClick}
                        type='button'
                        className='border-2 border-[#E0E3E8] w-[55%] text-black p-3 rounded-[5.89px] cursor-pointer flex justify-center items-center gap-2 max-lg:w-full '>
                        <Google />
                        <p className='text-[#7E8B9E] text-[12.89px] font-medium'>Login with Google</p>
                    </button>
                    <p className='text-[#4280EF] max-lg:w-full  text-[12.89px] font-medium text-center w-[55%] mt-5'>Don&apos;t have an account? Sign up <Link href={'/signup'} className='border-b-[0.78px]'>here</Link></p>
                </form>

            </div>
            <div className='2xl:w-[45%] w-[35%] max-lg:hidden block min-h-[110vh] relative top-0'>
                <Image
                    src={'/signin.jpg'}
                    fill
                    alt='signin'
                    className='object-fill rounded-l-3xl'
                />
            </div>
        </div>
    )
}

export default Page
