import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className='footer'>
            <div className='contanier'>
                        <img src='images/logo.svg' alt='logo'/>
                <div className='footer-contanier'>
                    <div className='footer-section sec-1'>
                        <div className='footer-flex'>
                            <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                    <div className='footer-section sec-2'>
                        <div className='footer-flex'>
                            <i class="fa fa-phone fa-lg" aria-hidden="true"></i>
                            <p>+1-543-123-4567</p>
                        </div>
                        <div className='footer-flex'>
                            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                    <div className='footer-section sec-3'>
                        <Link to='/'>About Us</Link>
                        <Link to='/'>Jobs</Link>
                        <Link to='/'>Press</Link>
                        <Link to='/'>Blog</Link>
                    </div>
                    <div className='footer-section sec-4'>
                        <Link to='/'>Contact Us</Link>
                        <Link to='/'>Terms</Link>
                        <Link to='/'>Privacy</Link>
                    </div>
                    <div className='footer-section sec-5'>
                    <div className='footer-flex mobile-center'>
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;