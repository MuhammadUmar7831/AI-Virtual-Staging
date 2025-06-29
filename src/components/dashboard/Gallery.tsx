import NoImage from '@/icons/NoImage'
import SparklingWhite from '@/icons/SparklingWhite'
import Image from 'next/image'
import React from 'react'

const Gallery = () => {
    const images: string[] = [
        // '/gallery/image1.jpg',
        // '/gallery/image2.jpg',
        // '/gallery/image3.jpg',
    ]
    return (
        <div
            className='w-full min-h-[90vh] bg-[#F0F0F066] rounded-t-lg p-3 relative'
            style={{
                boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)' // top shadow
            }}
        >
            {
                images.length > 0 ? (
                    <>

                        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
                            {images.map((src, index) => (
                                <div key={index} className="relative h-[250px] w-full overflow-hidden shadow-md">
                                    <Image
                                        src={src}
                                        alt={`Image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-5 right-5">
                            <button
                                className={`bg-gradient-to-r from-[#2C2F40] to-[#D9D9D9] text-white px-6 py-6 rounded-3xl font-bold shadow-lg  
                     transition duration-300 mt-6 flex justify-center items-center gap-3 cursor-pointer text-2xl
                    `}
                            >
                                <SparklingWhite />
                                Add more images
                            </button>
                        </div>
                    </>
                ) : (
                    <div className='flex h-[60vh] items-center justify-center flex-col gap-2'>
                        <NoImage />
                        <h1 className='lg:text-3xl font-bold sm:text-2xl text-xl'>
                            No files
                        </h1>
                        <p className='lg:text-xl text-[#00000099] text-lg text-center'>
                            Seems like you haven&apos;t generated any image yet.
                        </p>
                        <button
                            className={`bg-gradient-to-r from-[#2C2F40] to-[#D9D9D9] hover:opacity-90 text-white px-6 py-6 rounded-3xl font-semibold shadow-lg 
                     transition duration-300 mt-6 flex justify-center items-center gap-3 cursor-pointer text-2xl
                    `}
                        >
                            <SparklingWhite />
                            Generate Image
                        </button>
                    </div>
                )
            }
        </div>

    )
}

export default Gallery
