import React from 'react';
import './EarlyAccess.css';
import Button from './Button';

function EarlyAccess(){
    return(
        <div className='earlyAccess'>
            <h2>Get early access today</h2>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. if you have any questions, our support tram would be happy to help you.</p>
            <input type='text' placeholder='email@example.com'/>
            <Button text='Get Started' classSize='email-btn'/>
        </div>
    );
}
export default EarlyAccess;