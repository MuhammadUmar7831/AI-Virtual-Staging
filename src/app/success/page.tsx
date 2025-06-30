import React from 'react'
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import CheckoutSuccess from '@/components/checkout/CheckoutSuccess';
const page = () => {

    return (
        <>
            <Header />
            <CheckoutSuccess/>
            <Footer />
        </>
    );
}

export default page
