import Gallery from '@/components/dashboard/Gallery'
import React from 'react'

const page = () => {
    return (
        <div className="mt-10 w-full flex flex-col gap-5">
            <div className='w-full bg-[#F0F0F066] rounded-xl py-5 px-10 shadow-md shadow-[#0000001A]'>
                <h1 className='lg:text-3xl font-bold sm:text-2xl text-xl'>
                    Gallery 🖼️
                </h1>
                <p className='lg:text-xl text-[#00000099] text-lg'>
                    All your images are stored here which you have generated. 
                </p>
            </div>
            <Gallery/>
        </div>
    )
}

export default page
