import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = (params) => {

    const { _id, name, img, description, price, supplierName, quantity, sold } = params.product;
    const navigate = useNavigate();
    const navigateDetails = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='product'>
            <div >
                <Card className='card'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Name :{name}</Card.Title>
                        <Card.Text style={{ height: '100px' }}>
                            Specification : {description.slice(0, 150) + '...'}
                        </Card.Text>
                        <Card.Text>
                            Price :{price}
                        </Card.Text>
                        <Card.Text>
                            Supplier Name : {supplierName}
                        </Card.Text>
                        <Card.Text>
                            In Stock :{quantity}
                        </Card.Text>
                        <Card.Text>
                            Already Sold : {sold}
                        </Card.Text>
                    </Card.Body>
                    <Button className='card-button' onClick={() => navigateDetails(_id)} variant="primary">Update Item</Button>
                </Card>
            </div>
        </div>
    );
};

export default Product;