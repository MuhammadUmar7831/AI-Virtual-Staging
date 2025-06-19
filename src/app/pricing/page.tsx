import FAQs from '@/components/shared/FAQs'
import Footer from '@/components/shared/Footer'
import GalleryShowcase from '@/components/shared/GalleryShowcase'
import Header from '@/components/shared/Header'
import Checkmark from '@/icons/Checkmark'
import VectorDiagonal from '@/icons/VectorDiagonal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <div className='w-full px-6 lg:px-20 3xl:p-16 mt-10 mb-15'>

        <div className="">
          <div className='gap-5 flex flex-col'>
            <h1 className='text-center text-[40px] md:text-[75px] font-normal'>Pricing</h1>
            <p className='text-center text-[20px] md:text-[30px] text-[#000000] opacity-80'>
              Get the best value for every dollar spent
            </p>
          </div>
          <div className='flex justify-between items-center max-lg:flex-col gap-10 my-17'>
            <div className='lg:w-[30%] md:w-[80%] w-[90%] bg-[#D6DCFF] min-h-[470px] rounded-[20px] shadow-2xl border-5 border-[#5d6fd306] flex flex-col justify-between'>
              <div className='m-10'>
                <h1 className='font-bold text-[28px] md:text-[45px]'>Free</h1>
                <p className='font-[400] text-[13px] md:text-[20px]'>Trial use</p>
                <div className='mt-8 gap-5 flex flex-col'>
                  <p className='font-[600] text-[13px] md:text-[20px]'>What&apos;s included</p>
                  <div className='flex items-center gap-2'>
                    <Checkmark />
                    <p className='md:text-[14px] text-[10px] font-[400]'>1 image per month</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Checkmark />
                    <p className='md:text-[14px] text-[10px] font-[400]'>high-quality download</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Checkmark />
                    <p className='md:text-[14px] text-[10px] font-[400]'>all styles and room types</p>
                  </div>
                </div>
              </div>
              <Link href={''} className=' bg-[#D6DCFF] border-3 rounded-2xl h-[60px] flex justify-center items-center mb-5 mx-2 gap-2'>
                <p className='text-[15px] md:text-[20px] font-[400] flex justify-center items-center'>
                  Generate image
                </p>
                <VectorDiagonal stroke='black' />
              </Link>
            </div>
            <div className='lg:w-[70%] md:w-[80%] w-[90%] bg-secondary text-white min-h-[470px] rounded-[20px] shadow-2xl flex flex-col justify-between'>
              <div className='flex justify-between relative'>
                <p className='bg-[#D6DCFF] rounded-[10px] text-black text-[10px] p-2 flex justify-center items-center w-[80px] h-[24px] mx-10 my-5'>
                  Most popular
                </p>
                <div className='bg-[#d6dcffc0] xl:w-[175px] xl:h-[163px] lg:w-[155px] lg:h-[145px] w-[165px] h-[150px] absolute right-[30px] max-sm:w-[100px] max-sm:h-[90px] max-sm:right-[17px] rounded-b-3xl p-2'>
                  <div className='w-full h-full border-2 border-t-0 border-dashed rounded-b-3xl flex flex-col relative items-center'>
                    <p className='text-[15px] max-md:text-[10px] text-center pt-2'>Starting from</p>
                    <p className='text-[50px] max-md:text-[22px] text-center font-bold'>$15</p>
                    <p className='text-[15px] max-md:text-[10px] text-center absolute bottom-[10px] xl:bottom-[20px]'>per image</p>
                  </div>
                </div>
              </div>
              <div className='mx-10 my-5'>
                <h1 className='font-bold text-[28px] md:text-[50px]'>Customizable
                </h1>
                <p className='font-[300] text-[10px] md:text-[17px] opacity-70'>Customize your plan — pay only for what you use.</p>
                <div className='mt-8 gap-5 flex flex-col'>
                  <p className='font-[600] text-[13px] md:text-[20px]'>What&apos;s included</p>
                  <div className='flex gap-10'>
                    <div className='flex flex-col gap-5'>
                      <div className='flex items-center gap-2'>
                        <Checkmark />
                        <p className='md:text-[14px] text-[10px] font-[400] opacity-90'>As many images you want according to use case</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Checkmark />
                        <p className='md:text-[14px] text-[10px] font-[400] opacity-90'>More images, more discount</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Checkmark />
                        <p className='md:text-[14px] text-[10px] font-[400] opacity-90'>all styles and room types</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                      <div className='flex items-center gap-2'>
                        <Checkmark />
                        <p className='md:text-[14px] text-[10px] font-[400] opacity-90'>High-quality downloads</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Checkmark />
                        <p className='md:text-[14px] text-[10px] font-[400] opacity-90'>Watermark removal</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Checkmark />
                        <p className='md:text-[14px] text-[10px] font-[400] opacity-90'>Editing and replacement </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href={''} className=' bg-[#1C1D25] rounded-2xl h-[60px] flex justify-center items-center mb-5 mx-2 gap-2'>
                <p className='text-[15px] md:text-[20px] font-[400] flex justify-center items-center'>
                  Select Plan
                </p>
                <VectorDiagonal stroke='white' />
              </Link>
            </div>
          </div>
          <div className="h-[130vh] w-full relative mb-10 rounded-3xl overflow-hidden">
            {/* Background Image */}
            <Image
              src="/pricing/banner.jpg"
              alt="Banner image"
              fill
              className="object-cover"
              priority
            />

            {/* Semi-transparent overlay */}
            <div className='absolute inset-0 bg-black opacity-50'></div>

            {/* Inner border */}
            <div className='absolute inset-0 p-4 '>
              <div className='w-full h-full gap-20 customize-border flex-col flex justify-center items-center'>
                <h1 className='text-white lg:text-[80px] md:text-[60px] text-[40px] text-center mx-40 max-xl:mx-10'>Bring your home to life.
                  The future of interior
                  design is here.</h1>
                <Link href={''} className=' bg-white rounded-2xl h-[80px] flex justify-center items-center mb-5 mx-2 gap-2 px-15 max-lg:px-10'>
                  <p className='text-[15px] md:text-[22px] font-[500] flex justify-center items-center'>
                    Buy plan now
                  </p>
                  <VectorDiagonal stroke='black' />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      <GalleryShowcase color='secondary' />
      <FAQs />
      <Footer />
    </>
  )
}

export default page
