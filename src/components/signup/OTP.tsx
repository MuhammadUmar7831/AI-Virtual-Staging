'use client'
import { signupApiCall, signupVerifyApiCall } from '@/api/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';

const OTP = ({ token, user }: { token: string, user: SignUpBody }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(300);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const router = useRouter()


  useEffect(() => {
    if (timer === 0) return

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer])

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

  const handleVerify = async () => {
    const code = otp.join('');
    const res = await signupVerifyApiCall({
      token,
      otp: code
    })
    if (res) {
      localStorage.setItem('token', res.data.token)
      router.push('/dashboard')
    }
  };

  const handleResend = async () => {
    setOtp(['', '', '', '']);
    setTimer(300);
    inputRefs.current[0]?.focus();
    const res = await signupApiCall(user);
    if (res) {
      toast.success('An OTP is resend to your email')
    }
  };

  return (
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

export default OTP
