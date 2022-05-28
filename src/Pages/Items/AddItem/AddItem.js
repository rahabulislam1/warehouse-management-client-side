import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(user);
    const email = user?.email;
    const handleAddItem = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        const sold = event.target.sold.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const data = {
            name, price, description, img, sold, quantity, supplierName, email
        };
        fetch('https://thawing-sands-12388.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
        // .then(data => console.log(data));
    }
    if (!email) {
        navigate('/')
    }
    return (
        <div className='add-items'>
            <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control readOnly type="email" placeholder={user?.email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="name" name='name' placeholder="Product Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text-area" name='description' placeholder="Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" name='price' placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" name='quantity' placeholder="Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" name='supplierName' placeholder="Supplier Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" name='sold' placeholder="Sold" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" name='img' placeholder="Image url" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Add Item
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;