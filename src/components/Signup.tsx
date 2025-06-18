'use client'
import Google from '@/icons/Google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const Signup = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(300);
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const [isSignup, setIsSignup] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("")

    const handleSignup = () => {
        if (!userData.email || !userData.name || !userData.password) {
            setError("All fields are required");
            return;
        }
        setIsSignup(true);
    }

    useEffect(() => {
        if (isSignup) {
            if (timer === 0) return

            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [timer, isSignup])

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
            .toString()
            .padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${secs}`;
    };

    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return; // Allow only one digit

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const code = otp.join('');
        console.log('Entered OTP:', code);
        // Add verification logic
    };

    const handleResend = () => {
        setOtp(['', '', '', '']);
        setTimer(300);
        inputRefs.current[0]?.focus();
        // Trigger OTP resend here
    };

    return (
        <div className='flex w-full'>
            <div className='2xl:w-[55%] w-[65%] max-lg:w-full max-lg:items-center px-20 max-lg:px-0 pt-5 min-h-[110vh] flex flex-col '>
                <div>
                    <h1 className='text-2xl'>LOGO</h1>
                </div>
                {
                    !isSignup ? (
                        <div className='mt-20 max-lg:w-[60%] max-sm:w-[80%]'>
                            <h1 className='text-[40px] md:text-[80px] font-normal mb-20'>Sign up</h1>
                            <div className='flex flex-col gap-5 mb-10'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#323A46] text-[13px] font-bold'>You name</p>
                                    <input value={userData.name} onChange={(e) => setUserData({
                                        ...userData, name: e.target.value
                                    })} className='p-2 border-[0.74px] rounded-[5.89px] w-[55%] max-lg:w-full bg-[#FAFAFC] border-[#CBD1D8] text-[#8d9093] outline-none' type="email" placeholder='individual' />
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
                            <button onClick={handleSignup} className='bg-[#2C2F40] w-[55%] max-lg:w-full  text-white p-3 rounded-[5.89px] cursor-pointer'>
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
                            <p className='text-[#4280EF] max-lg:w-full  text-[12.89px] font-medium text-center w-[55%] mt-5 mb-5'>Already have an account? Sign in <Link href={'/signin'} className='border-b-[0.78px]'>here</Link></p>
                        </div>
                    ) : (
                        <div className=' max-md:px-5 translate-y-50 flex gap-10 justify-center flex-col lg:w-[60%]'>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-[#7E8B9E] text-[15px] text-center'>Don&apos;t Reload, You will Lose your Progress.</p>
                                <h1 className='text-[25px] md:text-[45px] text-cenfont-normal'>Verify OTP</h1>
                                <p className='text-[#7E8B9E] text-[15px] text-center'>Enter the OTP sent to your email. The code will expire in <span className='font-bold'>{formatTime(timer)}</span></p>
                            </div>
                            <div className="flex justify-center gap-3">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => { inputRefs.current[index] = el!; }}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleChange(e.target.value, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        className="w-12 h-12 border border-gray-400 rounded text-center text-xl outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ))}
                            </div>
                            <div className='flex items-center flex-col'>
                                <button onClick={() => handleVerify()} className='bg-[#2C2F40] w-full  text-white p-3 rounded-[5.89px] cursor-pointer'>
                                    Verify OTP
                                </button>
                                <button onClick={() => handleResend()} className='mt-5 font-bold cursor-pointer'>
                                    Resend Code
                                </button>
                            </div>
                        </div>
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

export default Signup
