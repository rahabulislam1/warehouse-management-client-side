import React from 'react';
import Banner from '../Banner/Banner';
import CustomersReview from '../CustomersReview/CustomersReview';
import Payment from '../Payment/Payment';
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Payment></Payment>
            <CustomersReview></CustomersReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;