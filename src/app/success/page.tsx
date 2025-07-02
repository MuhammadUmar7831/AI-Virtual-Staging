import React, { Suspense } from 'react'
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import CheckoutSuccess from '@/components/checkout/CheckoutSuccess';
import { ClipLoader } from 'react-spinners';
const page = () => {

    return (
        <>
            <Header />
            <Suspense fallback={<ClipLoader />}>
                <CheckoutSuccess />
            </Suspense>
            <Footer />
        </>
    );
}

export default page
