import VectorWhite from '@/icons/VectorDiagonal'
import Image from 'next/image'
import React from 'react'

const clients = [
    "/home/client1.jpg", "/home/client2.jpg", "/home/client3.jpg"
]
const WhyUs = () => {

    return (
        <div className="w-full px-6 lg:px-20 3xl:p-16 mt-14">
            <h1 className='text-center text-[40px] md:text-[80px] font-normal'>Why us?</h1>
            <p className='text-center text-[20px] md:text-[32px] text-[#000000] opacity-80'>
                Changing the way the interior design industry works with top-<br className='hidden md:block' />
                notch AI generation.
            </p>

            <div className='w-full mt-14 flex flex-col lg:flex-row gap-10 justify-between'>
                {/* Left Card */}
                <div className='w-full lg:w-[48%] bg-[#2C2F40] rounded-2xl p-5'>
                    <div className='border-2 border-dashed border-white rounded-2xl flex flex-col justify-between items-center px-5 pt-5 pb-6 gap-6 h-full'>
                        <Image
                            src={"/home/iphone.png"}
                            width={640}
                            height={478}
                            alt='Iphone'
                        />
                        <p className='text-center text-white text-[20px] md:text-[32px] font-medium'>
                            Accessibility becomes our strength with our seamless and easy-to-use interface.
                        </p>
                        <button className="bg-white flex items-center gap-2 py-[16px] px-[50px] rounded-[14px] z-30 font-bold cursor-pointer">
                            Try out <VectorWhite stroke='black' />
                        </button>
                    </div>
                </div>


                {/* Right Card */}
                <div className='w-full lg:w-[48%] bg-[#D6DCFF] rounded-2xl flex flex-col justify-between'>
                    <p className='text-[20px] md:text-[32px] font-medium mt-14 mx-[52px] text-center'>
                        Trusted by top-notch interior designers and real estate agents for our high-quality image generation to increase client conversion with
                    </p>
                    <div className='flex justify-center items-center mt-4'>
                        <div className="flex justify-center items-center rounded-xl border border-dashed border-black px-5 py-2">
                            {clients.map((url, index) => (
                                <Image
                                    key={index}
                                    className='rounded-full -ml-1'
                                    width={20}
                                    height={20}
                                    src={url}
                                    alt='logo'
                                />
                            ))}
                        </div>
                    </div>
                    <div className='mt-4'>
                        <Image
                            src={'/home/kitchen.jpg'}
                            alt='kitchen'
                            width={640}
                            height={480}
                            className='rounded-t-4xl w-full h-auto object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
