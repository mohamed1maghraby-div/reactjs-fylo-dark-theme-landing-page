import React from 'react';
import './IntroContainer.css';
import Button from './Button';

function IntroContainer(){
    return(
        <div className='introContainer'>
            <img src='images/illustration-intro.png' alt='illustration-intro' />
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>Fylo stores all you most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <Button text='Get Started' /*classSize='email-btn'*//>
        </div>
    );
}
export default IntroContainer;