import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useItems from '../../../Hooks/useItems';

const MyItem = (params) => {
    const { _id, name, description, img, price, supplierName, email, sold, quantity } = params.item;
    const [user] = useAuthState(auth);
    const [items, setItems] = useItems();
    const navigate = useNavigate();
    // if (!user) {
    //     navigate('/');
    // }
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://stark-thicket-17199.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                        window.location.reload();
                    }
                })
        }
    };
    return (
        <div>
            <div className='product'>
                <Card className='card'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Name :{name}</Card.Title>
                        <Card.Text style={{ height: '100px' }}>
                            Specification : {description.slice(0, 200) + '...'}
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
                    <Button className='card-button' onClick={() => handleDelete(_id)} variant="danger">Delete Item</Button>
                </Card>
            </div>
        </div>
    );
};

export default MyItem;