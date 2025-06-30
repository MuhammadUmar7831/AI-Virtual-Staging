'use client';
import React, { useState } from 'react';
import DownArrow from '@/icons/DownArrow';
import SparklingWhite from '@/icons/SparklingWhite';
import Upload2 from '@/icons/Upload2';
import Image from 'next/image';
import { CircleX, Search } from 'lucide-react';
import { generateImageApiCall } from '@/api/dashboard';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

const areaOptions = [
    'Master Bedroom',
    'Dining Room',
    'Living Room',
    'Bedroom',
    'Home Office',
    'Kitchen',
    'Bathroom',
    'Kids Room',
];

const styleOptions = [
    'Contemporary',
    'Farmhouse',
    'Modern',
    'Scandinavian',
    'Industrial',
    'Midcentury',
    'Luxury',
    'Coastal',
    'Standard',
];

const GenerateImage = () => {
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedStyle, setSelectedStyle] = useState('');
    const [sizeError, setSizeError] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [isGenerated, setIsGenerated] = useState(false);
    const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const maxSize = 4 * 1024 * 1024; // 4MB
        if (file.size > maxSize) {
            setSizeError(true);
            setPreviewUrl(null);
            setImageFile(null);
            return;
        }

        setSizeError(false);
        setPreviewUrl(URL.createObjectURL(file));
        setImageFile(file);
    };

    const handleGenerate = async () => {
        if (!imageFile || !selectedArea || !selectedStyle) {
            alert('Please select image, area, and style.');
            return;
        }

        setLoading(true);
        const res = await generateImageApiCall(imageFile, selectedArea, selectedStyle);

        if (res) {
            toast.success("Image Generated Successfully");
            setGeneratedImageUrl(res.data.data.result);
            setIsGenerated(true);
            return;
        }

        toast.error("Failed to generate image");

        setLoading(false);
    };



    return (
        <AnimatePresence mode='wait'>
            {
                (isGenerated || generatedImageUrl) ? (
                    <motion.div key="first"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }} className='mt-10 w-full flex justify-center flex-col gap-2'>
                        <div className='w-full bg-[#F0F0F066] rounded-xl py-10 px-10 shadow-md shadow-[#0000001A]'>
                            <h1 className='lg:text-3xl font-bold sm:text-2xl text-xl flex gap-2 items-center'>
                                Result <Search />
                            </h1>
                        </div>
                        <div
                            className='w-full min-h-[90vh] bg-[#F0F0F066] rounded-t-lg p-3 gap-24 flex max-lg:flex-col'
                            style={{
                                boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)' // top shadow
                            }}
                        >
                            <div className='w-[60%] h-[60vh] relative max-lg:w-full rounded-xl'>
                                <div className='w-full h-full'>
                                    <Image
                                        src={generatedImageUrl !== null ? generatedImageUrl : ''}
                                        alt='Ai image'
                                        fill
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        className='object-cover rounded-xl'
                                    />
                                </div>
                            </div>
                            <div className='w-[40%] z-50'>
                                More IMAGES
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div key="second"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }} className="mt-10 w-full h-full flex justify-center flex-col items-center">
                        {/* Upload box */}
                        <div className="p-3 bg-[#F0F0F0] w-[60%] h-[65%] max-xl:w-[100%] rounded-2xl">
                            {
                                !previewUrl ? (
                                    <label
                                        className="rounded-2xl w-full h-full p-3 flex flex-col gap-2 justify-center items-center 
                        cursor-pointer hover:bg-[#ffffffa3] transition-all duration-300 customize-border1"
                                    >
                                        <Upload2 width={100} height={100} />
                                        <p className="text-[#2F2F2F] text-xl">Upload Image</p>
                                        <p className="text-xs text-[#2F2F2F]">(JPEG, PNG, WEBP)</p>

                                        <input
                                            type="file"
                                            accept=".jpg,.jpeg,.png,.webp"
                                            className="hidden"
                                            onChange={(e) => handleImageChange(e)}
                                        />
                                    </label>
                                ) : (
                                    <div className='w-full h-full relative rounded-xl'>
                                        <div onClick={() => setPreviewUrl(null)} className='absolute cursor-pointer top-0 p-1 z-100 right-0 bg-gradient-to-r from-[#000000] to-[#282828] rounded-full m-1'>
                                            <CircleX size={30} color='white' />
                                        </div>
                                        <Image
                                            src={previewUrl}
                                            alt='Preview URL'
                                            fill
                                            className='rounded-xl'
                                        />
                                    </div>
                                )
                            }


                            {sizeError && (
                                <p className="text-red-500 text-sm font-medium mt-3 text-center">
                                    File size must be less than or equal to 4MB.
                                </p>
                            )}
                        </div>

                        {/* Dropdowns */}
                        <div className="flex justify-between w-[60%] max-xl:w-[100%] max-sm:flex-col max-sm:items-center mt-10 gap-5">
                            {/* Area Dropdown */}
                            <div className="w-[50%] max-sm:w-full flex flex-col gap-2">
                                <p className="text-xl font-bold">Area</p>
                                <div className="bg-[#F0F0F0] relative rounded-xl flex justify-between items-center px-4 cursor-pointer">
                                    <select
                                        className="w-full p-2.5 py-5 bg-transparent outline-none text-[#2c2c2c] text-base appearance-none cursor-pointer"
                                        value={selectedArea}
                                        onChange={(e) => setSelectedArea(e.target.value)}
                                    >
                                        <option value="" disabled>
                                            Select Area
                                        </option>
                                        {areaOptions.map((area, index) => (
                                            <option key={index} value={area}>
                                                {area}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-6">
                                        <DownArrow />
                                    </div>
                                </div>
                            </div>

                            {/* Style Dropdown */}
                            <div className="w-[50%] max-sm:w-full flex flex-col gap-2">
                                <p className="text-xl font-bold">Style</p>
                                <div className="bg-[#F0F0F0] relative rounded-xl flex justify-between items-center px-4 cursor-pointer">
                                    <select
                                        className="w-full p-2.5 py-5 bg-transparent outline-none text-[#2c2c2c] text-base appearance-none cursor-pointer"
                                        value={selectedStyle}
                                        onChange={(e) => setSelectedStyle(e.target.value)}
                                    >
                                        <option value="" disabled>
                                            Select Style
                                        </option>
                                        {styleOptions.map((style, index) => (
                                            <option key={index} value={style}>
                                                {style}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-6">
                                        <DownArrow />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Generate Button */}
                        <div className="w-[60%] mt-10 max-xl:w-[100%]">
                            <button
                                onClick={handleGenerate}
                                disabled={loading}
                                className={`bg-gradient-to-r from-[#2C2F40] to-[#D6DCFF] text-white px-6 py-6 rounded-lg font-bold shadow-lg 
                         transition duration-300 mt-6 flex justify-center items-center gap-3 cursor-pointer w-full text-2xl
                         ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
                            >
                                <SparklingWhite />
                                {loading ? 'Generating...' : 'Generate'}
                            </button>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
};

export default GenerateImage;
