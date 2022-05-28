import React from 'react';
import banner1 from '../../../src/Images/Payment/banner1.jpg';
import banner2 from '../../../src/Images/Payment/banner2.jpg';
import banner3 from '../../../src/Images/Payment/banner3.jpg';
import './Payment.css';

const Payment = () => {
    return (
        <div>
            <h2 className='text-center my-4'>Payment Method</h2>
            <div className='payment'>
                <img src={banner1} alt="" className='mx-4' />
                <img src={banner2} alt="" className='me-3' />
                <img src={banner3} alt="" />
            </div>
        </div>
    );
};

export default Payment;