'use client'
import Create from '@/icons/Create'
import SparklingWhite from '@/icons/SparklingWhite'
import React, { useState } from 'react'

const AccountInformation = () => {
    const userInfo = {
        name: 'Muhammad Umar',
        email: 'umar@gmail.com',
    }

    const [isForm, setIsForm] = useState(false);

    const handleEditInformation = () => {
        setIsForm(false);
    }
    return (
        <div
            className={`w-full min-h-[90vh] bg-[#F0F0F066] rounded-t-lg p-16 relative `}
            style={{
                boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)' // top shadow
            }}
        >
            <div className={`flex flex-col gap-5 ${isForm && 'blur-[1.5px]'}`}>
                <div className='p-2 text-white mb-10 font-bold h-[70px] w-[70px] bg-[#E54335] rounded-full text-2xl flex justify-center items-center'>
                    {
                        userInfo.name.split(' ').map((initial, index) => (
                            <span className='' key={index}>{initial[0]}</span>
                        ))
                    }
                </div>
                <div className='space-y-5 mb-5'>
                    <p className=' font-semibold'>
                        Your name
                    </p>
                    <h1 className='text-[#646464] text-2xl font-semibold'>{userInfo.name}</h1>
                </div>
                <div className='space-y-5'>
                    <p className=' font-semibold'>
                        Your email
                    </p>
                    <h1 className='text-[#646464] text-2xl font-semibold'>{userInfo.email}</h1>
                </div>
                <div className='flex gap-2 items-center'>
                    <Create />
                    <p className='text-[#4B84FF] cursor-pointer border-b-1' onClick={() => setIsForm(true)}>
                        Edit Information
                    </p>
                </div>
            </div>
            <div className='w-full flex justify-center items-center h-full'>
                {
                    isForm && (
                        <div className='rounded-xl min-h-[400px] shadow-2xl flex lg:w-[50%] w-[80%] justify-center items-center bg-gradient-to-t from-[#9ffcff] to-[#a8e3af] absolute lg:px-20 flex-col px-5'>
                            <div className='flex flex-col gap-2 w-full'>
                                <p className='font-bold'>
                                    Name
                                </p>
                                <input type="text" className='bg-[#f0f0f0f9] outline-0 p-2 rounded-md' />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <p className='font-bold'>
                                    Email
                                </p>
                                <input type="text" className='bg-[#f0f0f0f9] outline-0 p-2 rounded-md' />
                            </div>
                            <button
                                onClick={handleEditInformation}
                                className={`bg-gradient-to-r from-[#7981b1] to-[#3d3434] hover:opacity-90 text-white  rounded-3xl font-semibold shadow-lg 
                     transition duration-300 mt-6 flex justify-center items-center gap-3 cursor-pointer py-3 px-8
                    `}
                            >
                                <SparklingWhite />
                                Save
                            </button>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default AccountInformation
