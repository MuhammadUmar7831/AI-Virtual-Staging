'use client'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

const CheckoutCancel = () => {
    return (
        <div className='w-full px-6 lg:px-20 3xl:p-16 mt-10 mb-15 flex flex-col justify-center items-center'>
            <div className='bg-[#FFF5F5] py-16 w-full rounded-xl shadow-xl flex justify-center items-center flex-col gap-8'>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-white w-[150px] h-[150px] items-center text-7xl flex justify-center bg-[#de4244] p-8 rounded-full"
                >
                    <FaTimes />
                </motion.div>

                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-[#c82d2f]'>
                    Payment Canceled
                </h1>

                <p className='lg:text-2xl sm:text-xl text-xl mb-2 text-[#00000099] text-center'>
                    Your transaction was canceled before completion.
                </p>

                <p className='lg:text-xl sm:text-lg text-md mb-6 text-[#00000099] text-center max-w-[700px]'>
                    If this was a mistake, don’t worry — you can try again anytime from the pricing page. 
                    No payment has been processed.
                </p>

                <button
                    className='bg-[#cf292c] w-[55%] max-lg:w-full text-white p-5 lg:text-2xl text-lg font-bold rounded-[5.89px] cursor-pointer'>
                    Go Back to Pricing
                </button>

                <p className='lg:text-md sm:text-sm text-sm mt-4 text-[#00000099] text-center max-w-[500px]'>
                    Need help? Contact support or retry the checkout process.
                </p>
            </div>
        </div>
    )
}

export default CheckoutCancel
