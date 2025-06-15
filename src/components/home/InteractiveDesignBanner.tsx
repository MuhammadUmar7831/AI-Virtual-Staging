import VectorDiagonal from '@/icons/VectorDiagonal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InteractiveDesignBanner = () => {
    return (
        <div className="w-full px-6 lg:px-20 3xl:p-16 mt-20 relative">
            <div className="relative h-[130vh] w-full rounded-3xl overflow-hidden">
                <Image
                    src="/home/ai-room-design.jpg"
                    alt="Banner image"
                    fill
                    className="object-cover -z-10 inverted-radius"
                    priority
                />
                <div className="flex w-[292px] h-[77px] max-sm:w-[200px] max-sm:h-[60px] rounded-[5px] absolute top-[30%] left-[50%]  z-[100] border-[4px] bg-[rgba(77,77,77,0.3)] gap-5 max-md:gap-2 max-sm:left-[30%] backdrop-blur-[12px] border-[#e1d9d985]">
                    <div className='w-[40%] h-[100%] relative flex items-center'>
                        <Image
                            src={'/home/wooden-card-img1.jpg'}
                            fill
                            alt='image'
                            className='rounded-xl my-auto'
                        />
                    </div>
                    <div className='flex flex-col justify-center text-white'>
                        <h1>Style</h1>
                        <p className='font-bold text-2xl max-sm:text-xl'>Traditional</p>
                    </div>
                </div>


                <div className='relative w-[434px] h-[600px] overflow-hidden left-[65%] translate-y-[120px] rounded-[50px]'>
                    <Image
                        src="/home/wooden-bar.jpg"
                        alt="Banner image"
                        fill
                        className="object-cover inverted-radius1"
                        priority
                    />
                    <div className="absolute bottom-0 left-0 bg-white text-brown-900 p-4 w-[90%] rounded-br-4xl h-[47%]  -z-10 flex justify-center-safe items-start flex-col pl-5 pt-20 max-sm:pl-2"
                    >
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-600 mb-1">Texture style</p>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold">Wooden</h3>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-600 mb-1">Location</p>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold">Kitchen</h3>

                    </div>

                </div>
                <h1 className='text-white font-bold text-[20px] m-5 lg:text-[48px] w-[40%] absolute top-[55%] leading-tight lg:mx-15'>
                    Transform Your Space Today Try Our AI Designer Now
                </h1>
            </div>
            <div className="flex w-[200px] h-[77px] max-sm:w-[170px] max-sm:h-[60px] rounded-[10px] absolute max-lg:top-[70%] max-2xl:top-[65%] top-[78%] right-[10%]  z-[100] border-[4px] bg-[rgba(77,77,77,0.3)] gap-5 max-md:gap-2 max-sm:right-[10%] backdrop-blur-[12px] border-[#e1d9d985]">
                <div className='w-[30%] h-[100%] relative flex items-center bg-amber-950 rounded-xl'>
                </div>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='font-light'>Color</h1>
                    <p className='font-bold text-2xl max-sm:text-xl'>#73512D</p>
                </div>
            </div>
            {/* Button */}
            <Link href={''} className="bg-secondary cursor-pointer flex items-center gap-2 text-white py-[20px] px-[70px] rounded-[14px] z-30 absolute bottom-0 font-semibold">
                Try out <VectorDiagonal stroke='white' />
            </Link>
        </div>
    )
}

export default InteractiveDesignBanner
