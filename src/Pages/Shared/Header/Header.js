import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
    }
    // console.log(user);
    const myItems = () => {
        navigate('/myItems');
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">HR Collection</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{ color: 'white' }} as={Link} to="/manageInventories">Manage Inventory</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} href="home#reviews">Review</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} href="blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {user ?
                                <div>
                                    <Navbar.Brand as={Link} to="/addItems">Add Item</Navbar.Brand>
                                    <Button onClick={myItems} variant="primary">My Items</Button>
                                    <Button onClick={logout} variant="primary">Log out</Button>
                                </div>
                                :
                                <Nav.Link style={{ color: 'white' }} as={Link} to="/Login">
                                    Login
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;