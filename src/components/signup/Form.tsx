'use client'
import { googleAuthApiCall, signupApiCall } from '@/api/auth'
import Google from '@/icons/Google'
import { auth, googleProvider } from '@/lib/firebase'
import { signInWithPopup } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

interface Props {
  next: ({ token, user }: { token: string, user: SignUpBody }) => void
}

const Form = (props: Props) => {
  const [userData, setUserData] = useState<SignUpBody>({
    name: "",
    email: "",
    password: ""
  });
  const router = useRouter()
  const [error, setError] = useState("")

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault()
    if (!userData.email || !userData.name || !userData.password) {
      setError("All fields are required");
      return;
    }

    const res = await signupApiCall(userData);

    if (res) {
      props.next({ token: res.data.token, user: userData })

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
    <form onSubmit={handleSignup} className='mt-20 max-lg:w-[60%] max-sm:w-[80%]'>
      <h1 className='text-[40px] md:text-[80px] font-normal mb-20'>Sign up</h1>
      <div className='flex flex-col gap-5 mb-10'>
        <div className='flex flex-col gap-1'>
          <p className='text-[#323A46] text-[13px] font-bold'>You name</p>
          <input value={userData.name} onChange={(e) => setUserData({
            ...userData, name: e.target.value
          })} className='p-2 border-[0.74px] rounded-[5.89px] w-[55%] max-lg:w-full bg-[#FAFAFC] border-[#CBD1D8] text-[#8d9093] outline-none' type="text" placeholder='individual' />
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-[#323A46] text-[13px] font-bold'>Email</p>
          <input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} required className='p-2 border-[0.74px] rounded-[5.89px] w-[55%] max-lg:w-full bg-[#FAFAFC] border-[#CBD1D8] text-[#8d9093] outline-none' type="email" placeholder='commitcommunity@gmail.com' />
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-[#323A46] text-[13px] font-bold'>Password</p>
          <input value={userData.password} onChange={(e) => setUserData({
            ...userData, password: e.target.value
          })} required className='p-2 border-[0.74px] rounded-[5.89px] w-[55%] max-lg:w-full  bg-[#FAFAFC] border-[#CBD1D8] text-[#8d9093] outline-none' type="password" placeholder='*********' />
        </div>
        <div>{error}</div>
      </div>
      <button type='submit' className='bg-[#2C2F40] w-[55%] max-lg:w-full  text-white p-3 rounded-[5.89px] cursor-pointer'>
        Sign up
      </button>
      <div className='flex w-[55%] justify-center items-center gap-0.5 my-5 max-lg:w-full '>
        <div className='w-[50%] h-[0.1px] bg-[#7E8B9E]'></div>
        <p className='text-[10px] text-[#7E8B9E]'>OR</p>
        <div className='w-[50%] h-[0.5px] bg-[#7E8B9E]'></div>
      </div>
      <button
        type='button'
        onClick={handleGoogleClick}
        className=' border-2 border-[#E0E3E8] w-[55%] text-black p-3 rounded-[5.89px] cursor-pointer flex justify-center items-center gap-2 max-lg:w-full '>
        <Google />
        <p className='text-[#7E8B9E] text-[12.89px] font-medium'>Start with Google</p>
      </button>
      <p className='text-[#4280EF] max-lg:w-full  text-[12.89px] font-medium text-center w-[55%] mt-5 mb-5'>Already have an account? Sign in <Link href={'/signin'} className='border-b-[0.78px]'>here</Link></p>
    </form>
  )
}

export default Form
