import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Guide = () => {
    return (
        <div className="my-3">
            <h1 className="fw-bolder">OUR TOUR GUIDE</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card shadow">
                        <img src="https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/img50.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Sony Madison</h3>
                            <h5 className="card-title">Travel Guide</h5>
                            <div className='d-flex justify-content-evenly px-5 fs-3'>
                                <FaFacebookSquare />
                                <FaTwitterSquare></FaTwitterSquare>
                                <FaInstagramSquare />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow">
                        <img src="https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/img54.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">Alison White</h3>
                            <h5 className="card-title">Travel Guide</h5>
                            <div className='d-flex justify-content-evenly px-5 fs-3'>
                                <FaFacebookSquare />
                                <FaTwitterSquare></FaTwitterSquare>
                                <FaInstagramSquare />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow">
                        <img src="https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/img55.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">William Hobb</h3>
                            <h5 className="card-title">Travel Guide</h5>
                            <div className='d-flex justify-content-evenly px-5 fs-3'>
                                <FaFacebookSquare />
                                <FaTwitterSquare></FaTwitterSquare>
                                <FaInstagramSquare />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;