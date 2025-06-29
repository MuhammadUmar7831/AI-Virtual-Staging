import AccountInformation from '@/components/dashboard/AccountInformation'
import { User } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <div className="mt-10 w-full flex flex-col gap-5">
            <div className='w-full bg-[#F0F0F066] rounded-xl py-10 px-10 shadow-md shadow-[#0000001A]'>
                <h1 className='lg:text-3xl font-bold sm:text-2xl text-xl flex gap-5 items-center'>
                    Account Information <User/>
                </h1>
            </div>
            <AccountInformation/>
        </div>
    )
}

export default page
