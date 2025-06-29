'use client';
import React, { useState } from 'react';
import DownArrow from '@/icons/DownArrow';
import SparklingWhite from '@/icons/SparklingWhite';
import Upload2 from '@/icons/Upload2';
import axios from '@/api/axios'
import Image from 'next/image';

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

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("IN HANDLE IMAGE");
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

        try {
            setLoading(true);

            // Step 1: Get Presigned URL
            const presignRes = await axios.post('https://ai-vs-backend.vercel.app/generate/presign-url', {
                filename: imageFile.name,
                prefix: 'input/',
            })

            console.log('✅ Presigned URL response:', presignRes.data);
            const { upload_url, public_url, content_type } = presignRes.data.data;

            // Step 2: Upload image using fetch PUT
            const uploadRes = await fetch(upload_url, {
                method: 'PUT',
                headers: {
                    'Content-Type': content_type,
                },
                body: imageFile,
            });

            if (!uploadRes.ok) {
                throw new Error('Image upload failed.');
            }

            // Step 3: Call generate endpoint
            const generateRes = await axios.post('https://ai-vs-backend.vercel.app/generate/', {
                image_url: public_url,
                space: selectedArea,
                style: selectedStyle,
            });

            const result = generateRes;
            console.log('✅ Generation result:', result);
            alert('Image generated successfully!');
        } catch (error) {
            console.error('❌ Upload or generate error:', error);
            alert(error || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="mt-10 w-full h-full flex justify-center flex-col items-center">
            {/* Upload box */}
            <div className="p-3 bg-[#F0F0F0] w-[60%] h-[65%] max-xl:w-[100%] rounded-2xl">
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

                {sizeError && (
                    <p className="text-red-500 text-sm font-medium mt-3 text-center">
                        File size must be less than or equal to 4MB.
                    </p>
                )}

                {previewUrl && (
                    <div className="mt-4 flex justify-center">
                        <Image src={previewUrl} alt="Preview" className="max-h-64 rounded-xl" />
                    </div>
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
        </div>
    );
};

export default GenerateImage;
