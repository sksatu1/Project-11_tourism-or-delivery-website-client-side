import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Headers = () => {
    const { user, logOut } = useAuth();
    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">SK Travel Planner </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>

                        <Nav.Link as={HashLink} to="/home#places">Places</Nav.Link>
                        {user.email && <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>}

                        {user.email && <Nav.Link as={Link} to="/allOrders">All Orders</Nav.Link>}

                        {user.email &&
                            <Nav.Link as={Link} to="/addPlace">Add Place</Nav.Link>
                        }

                        {!user.displayName ?
                            <Nav.Link as={Link} to="/login">Login</Nav.Link> : <button className="btn-logout" onClick={logOut}>Log Out</button>
                        }
                        <Navbar.Text>
                            Signed in as: {user.displayName && <Link style={{ textDecoration: "none" }} to="/login">{user.displayName}</Link>}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




            {/* <nav>
                <Link to="/">Home</Link>
                <HashLink to="/home#places">Places</HashLink>
                <Link to="/places/add">Add User</Link>
            </nav> */}
        </>
    );
};

export default Headers;