'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const FAQs = () => {
    const [openItems, setOpenItems] = useState(new Set());

    const faqData = [
        {
            id: 1,
            question: "Can I upgrade or change my plan after signing up?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle. You can manage your plan from your account settings or contact our support team for assistance."
        },
        {
            id: 2,
            question: "Is there a free trial or demo version available before purchase?",
            answer: "Is there a free trial or demo version available before purchase? Is there a free trial or demo version available before purchase?"
        },
        {
            id: 3,
            question: "Are there any hidden costs or additional fees?",
            answer: "No, we believe in transparent pricing. All costs are clearly outlined in our pricing plans. There are no setup fees, hidden charges, or surprise costs. You only pay for what you see in your selected plan."
        },
        {
            id: 4,
            question: "Do you charge separately for each room or offer bundled packages?",
            answer: "We offer both options to suit different needs. You can choose to pay per room for maximum flexibility, or select one of our bundled packages which offer better value for multiple rooms. Bundled packages include discounts for 3+ rooms."
        },
        {
            id: 5,
            question: "Do you charge separately for each room or offer bundled packages?",
            answer: "We offer flexible pricing options including both per-room pricing and comprehensive bundled packages. Our bundled packages provide significant savings for customers managing multiple rooms or properties."
        }
    ];

    const toggleItem = (id: number) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    return (
        <div className="w-full px-6 lg:px-20 3xl:p-16 my-20">
            <h1 className="text-center text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-normal">
                FAQS
            </h1>
            <div className='flex justify-center items-center gap-4'>
                <Link href={''} className='font-normal text-[18px] sm:text-[17px] md:text-[20px] text-[#737373]'>
                    About us
                </Link>
                <Link href={''} className='font-normal py-4 px-8 rounded-xl text-[18px] sm:text-[17px] md:text-[20px] bg-secondary text-white'>
                    Pricing
                </Link>
            </div>
            <div className="space-y-4">
                {faqData.map((faq) => (
                    <div
                        key={faq.id}
                        className="border-b-2 border-gray-400"
                    >
                        <button
                            onClick={() => toggleItem(faq.id)}
                            className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors duration-200 group"
                        >
                            <span className="  font-medium lg:text-lg text-[16px] pr-4transition-colors duration-200 lg:mx-5">
                                {faq.question}
                            </span>
                            <div className="flex-shrink-0 ml-4 text-3xl cursor-pointer">
                                {openItems.has(faq.id) ? (
                                    "-"
                                ) : (
                                    "+"
                                )}
                            </div>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems.has(faq.id)
                                    ? 'max-h-96 opacity-100 pb-6'
                                    : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="text-black opacity-75 leading-relaxed pr-10 lg:mx-5 lg:text-lg text-[16px">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;