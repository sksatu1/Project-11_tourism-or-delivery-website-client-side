import { Button, Container } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <Container>
                <h1>404</h1>
                <h2>Sorry! The page you are looking for is not available</h2><br />
                <Link to="/home"><Button variant="danger">Back to Home</Button></Link>
            </Container>
        </div>
    );
};

export default NotFound;