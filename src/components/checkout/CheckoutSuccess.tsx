'use client'
import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { getCheckoutDetailsApiCall } from '@/api/payment';
import { ClipLoader } from 'react-spinners';

const CheckoutSuccess = () => {
    const [val, setVal] = useState("");
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getSessionDetails () {
            if (searchParams) {
                const sessionId = searchParams.get("session_id");
                if (sessionId !== null) {
                    const data = await getCheckoutDetailsApiCall(sessionId);
                    if (data) {
                        setIsLoading(false);
                        setVal(String(data.data.images));
                    }
                }
            }
        }
        getSessionDetails();
    }, [searchParams]);
    return (
        <div className='w-full px-6 lg:px-20 3xl:p-16 mt-10 mb-15 flex flex-col justify-center items-center'>
            <div className='bg-[#F8F8F8] py-16 w-full rounded-xl shadow-xl flex justify-center items-center flex-col gap-8'>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-white w-[150px] h-[150px] items-center text-7xl flex justify-center bg-[#19e919] p-8 rounded-full"
                >
                    <FaCheck />
                </motion.div>
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold'>Payment Successful</h1>
                <p className='lg:text-2xl sm:text-xl text-xl mb-6 text-[#00000099]'>
                    Please enter amount of images you want to buy
                </p>
                <h1 className='lg:text-8xl md:text-6xl sm:text-4xl text-3xl font-bold flex justify-center items-center'>
                    {isLoading ? <ClipLoader size={80}/> : <span>{val} Images</span>} 
                </h1>
                <button
                    className='bg-[#2C2F40] w-[55%] max-lg:w-full  text-white p-5 lg:text-2xl text-lg font-bold rounded-[5.89px] cursor-pointer'>

                    Enter Dashboard
                </button>
                <p className='lg:text-2xl sm:text-xl text-xl mb-6 text-[#00000099]'>
                    Your can update your image storage anytime from your dashboard 
                </p>
            </div>
        </div>
    )
}

export default CheckoutSuccess
