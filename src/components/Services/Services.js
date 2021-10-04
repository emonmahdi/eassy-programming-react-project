import React from 'react';
import './Services.css'
import img from './js.png'
import pythonImg from './pyhton2.png'
import cImage from './cp.png'
import phpImage from './php.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faLaptopCode} />
const Services = () => {
    return (
        <div className='services-body'>
            <div className="section-title">
                <h2 className='fw-bold p-2'>Courses</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                        <div className="col-md-6">
                        <div className="single-course bg-light">
                            <div className="card text-start">
                                 <img src={img} className='img-fluid card-img-top' alt="" />
                                 <div className="card-body">
                                    <h2 className='text-left'>Javascript</h2>
                                    <p>Javascript is hight level lanuage. The world demandable laguage in javascript.</p> 
                                 </div> 
                                 <div className="card-footer">
                                    <div className="price d-flex justify-content-between align-items-center">
                                        <h3 className='fw-bold'>$100</h3>
                                        <p className='pt-3 fw-bold'>{element} 100 Lesson </p>
                                    </div> 
                                 </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-course bg-light">
                            <div className="card text-start">
                                 <img src={pythonImg} className='img-fluid card-img-top' alt="" />
                                 <div className="card-body">
                                    <h2 className='text-left'>Python</h2>
                                    <p>Python is hight level lanuage. The world demandable laguage in Python.</p> 
                                 </div> 
                                 <div className="card-footer">
                                    <div className="price d-flex justify-content-between align-items-center">
                                        <h3 className='fw-bold'>$110</h3>
                                        <p className='pt-3 fw-bold'>{element} 80 Lesson </p>
                                    </div> 
                                 </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-course bg-light">
                            <div className="card text-start">
                                 <img src={cImage} className='img-fluid card-img-top' alt="" />
                                 <div className="card-body">
                                    <h2 className='text-left'>C Programming</h2>
                                    <p>C Programming is hight level lanuage. The world demandable laguage in C Programming.</p> 
                                 </div> 
                                 <div className="card-footer">
                                    <div className="price d-flex justify-content-between align-items-center">
                                        <h3 className='fw-bold'>$50</h3>
                                        <p className='pt-3 fw-bold'>{element} 40 Lesson </p>
                                    </div> 
                                 </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-course bg-light">
                            <div className="card text-start">
                                 <img src={phpImage} className='img-fluid card-img-top' alt="" />
                                 <div className="card-body">
                                    <h2 className='text-left'>Php</h2>
                                    <p>Python is hight level lanuage. The world demandable laguage in Php.</p> 
                                 </div> 
                                 <div className="card-footer">
                                    <div className="price d-flex justify-content-between align-items-center">
                                        <h3 className='fw-bold'>$70</h3>
                                        <p className='pt-3 fw-bold'>{element} 50 Lesson </p>
                                    </div> 
                                 </div>
                            </div> 
                        </div>
                    </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sidebar">
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Services;