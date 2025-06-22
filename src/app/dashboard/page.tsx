import DownArrow from '@/icons/DownArrow'
import SparklingWhite from '@/icons/SparklingWhite'
import Upload2 from '@/icons/Upload2'
import React from 'react'

const page = () => {
    return (
        <div className='mt-10 w-full h-full flex justify-center flex-col items-center'>
            <div className='bg-[#F0F0F0] w-[60%] h-[65%] rounded-2xl p-3 max-xl:w-[100%]'>
                <div className='w-full h-full gap-2 flex-col customize-border1 flex justify-center items-center'>
                    <Upload2 width={100} height={100} />
                    <p className='text-[#2F2F2F] text-xl'>Upload Image</p>
                    <p className='text-xs text-[#2F2F2F]'>(JPEG, PNG, SVG)</p>
                </div>
            </div>
            <div className='flex justify-between w-[60%] max-xl:w-[100%] max-sm:flex-col max-sm:items-center mt-10 gap-5 max-'>
                <div className='w-[50%] max-sm:w-full flex flex-col gap-2'>
                    <p className='text-xl font-bold'>Area</p>
                    <div className='bg-[#F0F0F0] rounded-xl flex justify-between items-center pr-2'>
                        <input placeholder='Area' className=' w-full p-2.5 py-5 outline-0' />

                        <DownArrow />

                    </div>
                </div>
                <div className='w-[50%] max-sm:w-full flex flex-col gap-2'>
                    <p className='text-xl font-bold'>Style</p>
                    <div className='bg-[#F0F0F0] rounded-xl flex justify-between items-center pr-2'>
                        <input placeholder='Modern' className=' w-full p-2.5 py-5 outline-0' />

                        <DownArrow />

                    </div>
                </div>
            </div>
            <div className='w-[60%] mt-10 max-xl:w-[100%]'>
                <button className="bg-gradient-to-r from-[#2C2F40] to-[#D6DCFF] text-white px-6 py-6 rounded-lg font-bold shadow-lg hover:opacity-90 transition duration-300 mt-6 flex justify-center items-center gap-3 cursor-pointer w-full text-2xl">
                   <SparklingWhite/> Generate
                </button>
            </div>
        </div>
    )
}

export default page
