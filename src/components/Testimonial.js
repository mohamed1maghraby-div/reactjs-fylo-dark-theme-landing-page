import React from 'react';
import './Testimonial.css';

function Testimonial({text,img,auth,job}){
    return(
        <div className='testimonial'>
            <p>{text}</p>
            <div className='auth-container'>
                <img src={img} alt='auther' />
                <div className='auth-text'>
                    <h5>{auth}</h5>
                    <p>{job}</p>
                </div>
            </div>
        </div>
    );
}
export default Testimonial;