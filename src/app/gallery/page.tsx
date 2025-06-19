import DesignSection from '@/components/gallery/DesignSection'
import AIResultShowcase from '@/components/shared/AIResultShowcase'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <div className="w-full px-6 lg:px-20 3xl:p-16 mt-14">
        <div className=' mx-auto  flex relative justify-center items-center flex-col '>
          <div className='flex justify-center items-center relative left-48 -bottom-3.5 max-md:left-30 max-md:-bottom-0.5'>
            <div className="flex justify-center items-center rounded-xl border border-dashed border-black px-5 py-2">
              {clients.map((url, index) => (
                <Image
                  key={index}
                  className='rounded-full -ml-1.5 max-md:w-[20px] max-md:h-[20px]'
                  width={30}
                  height={30}
                  src={url}
                  alt='logo'
                />
              ))}
            </div>
          </div>
          <div className="relative text-center text-[40px] md:text-[80px] font-normal leading-[1.1]">
            See what community<br className='max-[430px]::hidden' />
            has made using our{" "}
            <span className="relative inline-block">
              AI
              <span className=" max-md:text-[10px] max-md:top-4 max-md:left-12 absolute top-10 left-20 -translate-x-1/2 -rotate-45 bg-gradient-to-b from-[#D6DCFF] to-[#2C2F40] p-2 rounded-[10px] text-[#D5D5D5] text-[14px]">
                Lounge
              </span>
            </span>
          </div>
          <p className="text-center text-[20px] md:text-[32px] text-[#000000] opacity-80 mt-8 leading-10">
            Our AI transforms your space with personalized <br /> interiors that reflect your style, effortlessly.
          </p>

        </div>
      </div>
      <DesignSection/>
      <AIResultShowcase />
      <Footer />
    </>
  )
}

export default page


const clients = [
  "/home/client1.jpg", "/home/client2.jpg", "/home/client4.jpg", "/home/client3.jpg"
]