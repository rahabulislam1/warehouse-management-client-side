import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';

const Review = (params) => {
    const { id, name, rating, img, review } = params.review;
    return (
        <div className='product'>
            <Card className='card product-2'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name :{name}</Card.Title>
                    <Card.Text>
                        Review : {review}
                    </Card.Text>
                    <Card.Text>
                        Rating :{rating}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;