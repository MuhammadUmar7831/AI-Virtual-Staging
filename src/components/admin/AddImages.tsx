'use client'
import React, { useEffect, useMemo, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { addBalanceApiCall, getAllUserApiCall } from '@/api/admin';
import CustomSkeleton from '../CustomSkeleton';

interface FetchedUserType {
    _id: string;
    name: string;
    email: string;
    balance: number;
}

const AddImages = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUserId, setSelectedUserId] = useState<string>('');
    const [imageCount, setImageCount] = useState<string>('');
    const [error, setError] = useState('');
    const [usersData, setUsersData] = useState<FetchedUserType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const filteredUsers = useMemo(() => {
        return usersData.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [usersData, searchTerm]);

    useEffect(() => {
        const fetchAllUsers = async () => {
            const data = await getAllUserApiCall();
            if (data) {
                setUsersData(data.data);
                setIsLoading(false);
            }
        }
        fetchAllUsers();
    }, [])

    const handleAddImages = async (userId: string) => {
        if (Number(imageCount) < 1) {
            setError("Number must be greater than 0")
            return;
        }
        setError("");
        const balance = Number(imageCount) * 15;
        await addBalanceApiCall(userId, { balance: balance });
        setImageCount('');
    };

    return (
        <div className='w-full relative shadow-lg h-[95vh] p-4 rounded-xl bg-[#F0F0F0] mt-6 '>
            <div className=" mx-auto p-4   h-full flex flex-col customize-border1">
                {/* Search Bar */}
                <div className="sticky top-0 z-10">
                    <div className="flex items-center border rounded-md px-3 py-2 mb-4 bg-[#FAFAFC] border-[#CBD1D8]">
                        <FaSearch className="text-gray-400 mr-2" size={30} />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className='p-2 rounded-[5.89px] w-full text-[#8d9093] outline-none text-3xl max-sm:w-[80%]'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Scrollable User List */}
                {
                    isLoading ? (
                        <CustomSkeleton/>
                    ) : (
                        <div className="overflow-y-auto flex-1 space-y-4 pr-2">
                            {filteredUsers.map((user) => (
                                <div key={user._id} className="border border-[#2F2F2F66] rounded-md p-4 shadow-sm hover:shadow-md transition-all duration-700">
                                    <div
                                        className="flex sm:items-center sm:justify-between cursor-pointer max-sm:flex-col justify-center gap-2"
                                        onClick={() =>
                                            selectedUserId === user._id ? setSelectedUserId('') : setSelectedUserId(user._id)
                                        }
                                    >
                                        <div className="flex items-center space-x-3 max-[500px]:flex-col">
                                            <div className='rounded-full sm:h-[50px] sm:w-[50px] h-[30px] w-[30px]  bg-[#E54335] flex justify-center items-center gap-0.5'
                                            >
                                                {
                                                    user.name.split(' ').map((initial, index) => (
                                                        <span key={index} className='text-white sm:text-md text-sm'>
                                                            {initial[0]}
                                                        </span>
                                                    ))

                                                }
                                            </div>
                                            <div>
                                                <p className='font-bold sm:text-xl max-[500px]:text-center'>{user.name}</p>
                                                <p className='text-normal text-wrap max-sm:text-xs max-[500px]:text-center'>{user.email}</p>
                                            </div>
                                        </div>
                                        <span onClick={() => { setError(''); setImageCount("1"); }} className="text-md text-gray-600 bg-gradient-to-r from-[#e0e0e1] to-[#D6DCFF] p-2 rounded-xl text-center">
                                            {selectedUserId === user._id ? 'Hide' : 'Add Images'}
                                        </span>
                                    </div>

                                    <AnimatePresence initial={false}>
                                        {selectedUserId === user._id && (
                                            <motion.div
                                                className=""
                                                key="input-area"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="mt-4 flex items-center sm:space-x-2 max-sm:flex-col max-sm:gap-2">
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        placeholder="Number of images"
                                                        value={imageCount}
                                                        onChange={(e) => setImageCount(e.target.value)}
                                                        className="p-3 border-[0.74px] w-full rounded-[5.89px] bg-[#FAFAFC] border-[#CBD1D8] text-[#8d9093] outline-none"
                                                    />
                                                    <button
                                                        className="bg-gradient-to-r from-[#2C2F40] to-[#D6DCFF] py-2 px-10 text-white rounded-lg font-bold shadow-lg hover:opacity-90 flex justify-center items-center cursor-pointer text-2xl max-sm:px-5 max-sm:text-sm max-sm:w-full"
                                                        onClick={() => handleAddImages(user._id)}
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                                {
                                                    error && (<p className="text-white font-semibold sm:font-bold text-sm p-2 rounded-xl mt-2  bg-gradient-to-r from-[#b43d1f] to-[#c97554dd] inline-block text-center ">{error}</p>)
                                                }
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default AddImages;
