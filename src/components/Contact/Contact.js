import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="section-title text-start">
                            <h2 className='fw-bold'>Get In Touch</h2>
                            <p className='mt-4'>Have a question or just want to say hi? We'd love to hear from you. </p>
                        </div>

                        <form action="" className='form-body'>
                            <div className="name-email mb-3 d-flex justify-content-arround">
                                <input className='form-control me-3 ' type="text" placeholder='Your Name' />
                                <input className='form-control' type="email" placeholder='Your Email' />
                            </div>
                            <input type="text" placeholder='Subject' className='form-control mb-3' />
                            <textarea className='form-control mb-3' placeholder='Message' ></textarea>
                            <input className='btn btn-primary' type="submit" value='Send Message' />
                        </form>
                    </div>
                    <div className="col-md-4 address-body">
                        <div className="address bg-info text-light p-3 rounded-3">
                            <h4>Address : </h4>
                            <p>Dhaka Bonani, Bangladesh .</p>
                        </div>
                        <div className="address bg-info text-light p-3 rounded-3">
                            <h4>Phone : </h4>
                            <p>01908131513</p>
                        </div>
                        <div className="address bg-info text-light p-3 rounded-3">
                            <h4>Email us directly : </h4>
                            <p>info@gmail.com</p>
                        </div>
                        <div className="address bg-info text-light p-3 rounded-3">
                            <h4>Follow us: </h4>
                            <p>info@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;