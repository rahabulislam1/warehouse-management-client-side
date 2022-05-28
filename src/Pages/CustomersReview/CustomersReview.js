import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const CustomersReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://thawing-sands-12388.herokuapp.com/myProducts')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div id='reviews'>
            <h2 className='text-center my-5'>Happy Customer</h2>
            <div className='product-container'>
                {
                    reviews.map(review => <Review
                        key={review.id} review={review}></Review>)
                }
            </div>

        </div>
    );
};

export default CustomersReview;