import BillingInfo from '@/components/dashboard/BillingInfo'
import React from 'react'

const page = () => {
  return (
    <div className="mt-10 w-full flex flex-col gap-5">
      <div className='w-full bg-[#F0F0F066] rounded-xl py-10 px-10 shadow-md shadow-[#0000001A]'>
        <h1 className='lg:text-3xl font-bold sm:text-2xl text-xl'>
          Billing information 🏦
        </h1>
      </div>
      <BillingInfo/>
    </div>
  )
}

export default page
