'use client';
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import toast from 'react-hot-toast';
import { PulseLoader } from 'react-spinners';
import { checkoutApiCall } from '@/api/payment';

const CheckoutMain = () => {
    const [imageCount, setImageCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        setIsLoading(true);
        if (imageCount === 0) {
            toast.error("You cannot checkout with 0 Images");
            setIsLoading(false);
            return;
        }
        //Temporary purpose -> To fetch the image count on the success page
        localStorage.setItem("image count", String(imageCount));

        const res = await checkoutApiCall(imageCount);
        if (!res) {
            toast.error("Failed in payment");
            return;
        }
        if (res.startsWith("https://checkout.stripe.com")) {
            window.location.href = res;
        } else {
            toast.error("Invalid checkout URL received");
        }

        setIsLoading(false);
    }

    return (
        <div className='w-full px-6 lg:px-20 3xl:p-16 mt-10 mb-15 flex flex-col justify-center items-center'>
            <div className='flex justify-between items-center w-full max-md:flex-col gap-10'>
                <div className='bg-[#F8F8F8] md:min-h-[460px] md:w-[48%] w-full rounded-2xl flex flex-col justify-between shadow-xl p-12 space-y-5'>
                    <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold'>
                        Customize your plan
                    </h1>
                    <p className='lg:text-2xl sm:text-xl text-xl mb-6'>
                        Please enter amount of images you want to buy
                    </p>

                    <div className='w-full mt-10'>
                        <Slider
                            min={0}
                            max={100}
                            value={imageCount}
                            step={1}
                            marks={{
                                0: '0',
                                50: '50',
                                100: '100',
                            }}
                            onChange={(val) => setImageCount(val as number)}
                            trackStyle={[{
                                background: 'linear-gradient(to right, #2C2F40, #D6DCFF)',
                                height: 10,
                            }]}
                            railStyle={{
                                backgroundColor: '#e0e0e0',
                                height: 10,
                            }}
                            handleStyle={[{
                                borderColor: '#2C2F40',
                                backgroundColor: '#000',
                                height: 22,
                                width: 22,
                                marginTop: -6,
                                boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                            }]}
                        />

                        <p className=' mt-8 text-lg  text-[#000000B2] lg:text-2xl md:text-xl font-semibold'>
                            {imageCount} images selected
                        </p>
                    </div>
                    <button className='bg-[#34A853] md:w-[40%] w-[80%] py-2 px-5 rounded-2xl text-[#FFFFFFB2] cursor-pointer'>
                        Buy 30 images at $50
                    </button>
                </div>
                <div className='bg-[#2C2F40] md:min-h-[460px] md:w-[48%] w-full rounded-2xl shadow-xl p-12 space-y-8 text-white justify-between flex flex-col'>
                    <div>
                        <p className='lg:text-2xl md:text-xl text-lg mb-5'>Discount you availed from base price</p>
                        <h1 className='lg:text-7xl sm:text-5xl text-3xl font-bold'>20%</h1>
                    </div>
                    <div>
                        <p className='lg:text-xl text-sm mb-5'>Total Amount to be payed</p>
                        <h1 className='lg:text-7xl sm:text-5xl text-3xl font-bold'>$55</h1>

                    </div>
                </div>
            </div>
            <button onClick={handleCheckout} className='bg-gradient-to-r text-[#F8F8F8] text-xl font-semibold rounded-xl from-[#1f212e] to-[#b4b3b3] px-10 py-5 md:mt-24 mt-16 w-[80%] md:w-[50%] cursor-pointer hover:opacity-90 flex items-center justify-center'>
                {
                    !isLoading ? <span>Proceed to checkout</span> : <PulseLoader size={15} color='white' />
                }
            </button>
        </div>
    );
};

export default CheckoutMain;
