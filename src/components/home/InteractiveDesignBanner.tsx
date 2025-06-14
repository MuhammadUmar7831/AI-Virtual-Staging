import VectorDiagonal from '@/icons/VectorDiagonal'
import Image from 'next/image'
import React from 'react'

const InteractiveDesignBanner = () => {
    return (
        <div className="w-full px-6 lg:px-20 3xl:p-16 mt-20 relative">
            <div className="relative h-[130vh] w-full rounded-3xl overflow-hidden">
                <Image
                    src="/home/ai-room-design.jpg"
                    alt="Banner image"
                    fill
                    className="object-cover -z-10"
                    priority
                />
                <div className='relative w-[434px] h-[600px] overflow-hidden left-[65%] translate-y-[120px] rounded-[50px]'>
                    <Image
                        src="/home/wooden-bar.jpg"
                        alt="Banner image"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute bottom-0 left-0 bg-white text-brown-900 p-4 w-[70%] h-[35%] z-10"
                        style={{
                            borderTopRightRadius: '50px',
                            clipPath: 'path("M -1 2 L 10 2 L 10 14 L 1 14 A 1.42 1.42 0 0 1 -1 12 M 10 2")'
                        }}
                    >
                        <p className="text-sm text-gray-600 mb-1">Texture style</p>
                        <h3 className="text-lg font-bold">Wooden</h3>

                        <p className="text-sm text-gray-600 mt-4 mb-1">Location</p>
                        <h3 className="text-lg font-bold">Kitchen</h3>
                    </div>

                </div>
                <h1 className='text-white font-bold text-[20px] m-5 lg:text-[48px] w-[40%] leading-tight translate-y-[500px] lg:m-10'>
                    Transform Your Space Today Try Our AI Designer Now
                </h1>
            </div>
            {/* Button */}
            <button className="bg-secondary flex items-center gap-2 text-white py-[20px] px-[70px] rounded-[14px] z-30 absolute bottom-0 font-semibold">
                Try out <VectorDiagonal stroke='white' />
            </button>
        </div>
    )
}

export default InteractiveDesignBanner
