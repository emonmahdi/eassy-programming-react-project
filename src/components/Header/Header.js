import React from 'react';
import image from './header.jpeg'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faLaptopCode} />
const Header = () => {
    return (
        <div>  
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <div class="container">
                    <a class="navbar-brand text-secondary fw-bold
                    " href="/home"> {element} Easy-Programming</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="/about" className='nav-link'>About</a>
                        </li>
                        <li class="nav-item">
                            <a href="/services" className='nav-link'>Services</a>
                        </li>
                        <li class="nav-item">
                            <a href="/contact" className='nav-link'>Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div className="header-top">
                <div className="container">
                     <h1 className='text-light'>You Can Learn Best and Easy Way Programming by <span className='text-warning'>Easy-Programming </span> </h1>
                </div>
                
            </div>
        </div>
    );
};

export default Header;