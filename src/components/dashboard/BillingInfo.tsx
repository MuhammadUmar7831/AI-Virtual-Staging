import Checkmark from '@/icons/Checkmark'
import React from 'react'

const BillingInfo = () => {
    return (
        <div className='space-y-5'>
            <div className='bg-[#F0F0F066] rounded-xl  w-full flex max-sm:flex-col' style={{
                boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.1)' // top shadow
            }}>
                <div className='w-[45%] md:m-12 m-6 max-sm:w-full'>
                    <p className='lg:text-xl text-sm'>Active Plan</p>
                    <h1 className='lg:text-5xl sm:text-3xl text-xl font-bold'>Free</h1>
                    <p className='lg:text-xl text-sm'>monthly</p>
                    <div className='mt-5'>
                        <p className='flex items-center gap-1'>
                            <Checkmark />
                            1 image free/month
                        </p>
                        <p className='flex items-center gap-1'>
                            <Checkmark />
                            Gallery storage
                        </p>
                        <p className='flex items-center gap-1'>
                            <Checkmark />
                            regenerate
                        </p>
                    </div>
                </div>
                <div className='w-[55%] max-sm:w-full bg-[#2C2F40] rounded-xl text-white md:p-12 p-6 relative flex flex-col  justify-between'>
                    <div>
                        <p className='lg:text-xl text-sm mb-5'>Next payment</p>
                        <h1 className='lg:text-5xl sm:text-3xl text-xl font-bold'>$0/month</h1>
                    </div>
                    <div>

                        <p className='lg:text-2xl md:text-xl text-lg max-sm:text-[14px]'>Due: June 24,2025</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F0F0F066] rounded-xl  w-full flex flex-col p-12 gap-5 max-md:p-6' style={{
                boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.1)' // top shadow
            }}>
                <h1 className='lg:text-3xl sm:text-xl text-lg font-bold'>Billing Details</h1>
                <div className='w-full space-y-5'>
                    <div className='w-full flex justify-between max-sm:flex-col gap-5'>
                        <div className='w-[48%] max-sm:w-full p-5 max-md:p-2 flex bg-[#EEEEEE] rounded-xl justify-between'>
                            <p className='text-[#0000004D] text-lg font-semibold max-lg:text-sm'>
                                Billing cycle
                            </p>
                            <p className='text-lg font-semibold max-lg:text-sm'>
                                Monthly
                            </p>
                        </div>
                        <div className='w-[48%] max-sm:w-full p-5 max-md:p-2 flex bg-[#EEEEEE] rounded-xl justify-between'>
                            <p className='text-[#0000004D] text-lg font-semibold max-lg:text-sm'>
                                Total amount
                            </p>
                            <p className='text-lg font-semibold max-lg:text-sm'>
                                $20
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-between max-sm:flex-col gap-5'>
                        <div className='w-[48%] max-sm:gap-5 max-sm:w-full p-5 flex max-md:p-2 bg-[#EEEEEE] rounded-xl justify-between'>
                            <p className='text-[#0000004D] text-lg font-semibold max-lg:text-sm'>
                                Next payment
                            </p>
                            <p className='text-lg font-semibold max-lg:text-sm'>
                                July 25, 2025
                            </p>
                        </div>
                        <div className='w-[48%] max-sm:gap-5 max-sm:w-full p-5 flex max-lg:p-2 bg-[#EEEEEE] rounded-xl justify-between items-center'>
                            <p className='text-[#0000004D] text-lg font-semibold max-lg:text-sm'>
                                Subscription start
                            </p>
                            <p className='text-lg font-semibold max-lg:text-sm'>
                                June 25, 2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#F0F0F066] space-y-5 rounded-xl  w-full p-12 max-md:p-6' style={{
                boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.1)' // top shadow
            }}>
                <h1 className='lg:text-3xl sm:text-xl text-lg font-bold'>Billing Details</h1>
                <p className='text-[#999374] font-semibold g:text-2xl sm:text-xl text-sm'>We want to inform you that in case of cancellation, you will lose all your premium features.</p>
                <button className='bg-[#E20F0F] px-5 py-2 rounded-xl text-white font-semibold cursor-pointer'>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default BillingInfo
