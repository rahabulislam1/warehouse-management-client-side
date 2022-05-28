import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Inventory.css';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    const handleDelivered = event => {
        event.preventDefault();
        const name = product.name;
        const description = product.description;
        const price = product.price;
        const img = product.img;
        const supplierName = product.supplierName;
        const email = user.email;
        if (product.quantity > 0) {
            const quantity = parseInt(product.quantity) - 1;
            const sold = parseInt(product.sold) + 1;
            const updatedProduct = { quantity, sold };
            const newProduct = { name, description, price, img, quantity: updatedProduct.quantity, sold: updatedProduct.sold, supplierName, email }
            setProduct(newProduct);
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                })

        }
    }
    const handleAddQuantity = event => {
        event.preventDefault();
        const name = product.name;
        const description = product.description;
        const price = product.price;
        const img = product.img;
        const newQuantity = event.target.quantity.value;
        const quantity = parseInt(product.quantity) + parseInt(newQuantity);
        const sold = product.sold;
        const supplierName = product.supplierName;
        const email = user.email;
        const updatedProduct = { quantity, sold };
        const newProduct = { name, description, price, img, quantity: updatedProduct.quantity, sold: updatedProduct.sold, supplierName, email }
        setProduct(newProduct);
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })

    }
    const handleUpdateItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        const sold = event.target.sold.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const email = user.email;
        const updatedData = {
            name, price, description, img, sold, quantity, supplierName, email
        };
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div className='inventory'>
            <div className='product-details'>
                <div>
                    <img src={product.img} alt="" />
                    <div className='w-100 mx-auto'>
                        <div>
                            <Form onSubmit={handleAddQuantity}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Want to Restock?</Form.Label>
                                    <Form.Control name='quantity' className='w-50' type="number" placeholder="Enter Amount" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Restock
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className='ms-2'>
                    <h2>Name : {product.name}</h2>
                    <p>Description : {product.description}</p>
                    <p>Price : {product.price}</p>
                    <p>Quantity : {product.quantity}</p>
                    <p>Sold : {product.sold}</p>
                    <p>Supplier Name : {product.supplierName}</p>
                    <Button onClick={handleDelivered} variant="success">
                        Delivered
                    </Button>
                </div>

            </div>

            <div className='add-items'>
                <h2 className='text-center'>Update this product ?</h2>
                <Form onSubmit={handleUpdateItem}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control readOnly type="email" placeholder={user.email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control readOnly type="name" name='name' placeholder={product.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text-box" name='description' placeholder="Description" />
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
                        Update Item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Inventory;