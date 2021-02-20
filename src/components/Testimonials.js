import React from 'react';
import './Testimonials.css';
import Testimonial from './Testimonial';

function Testimonials(){
    return(
        <div className='contanier'>
            <div className='testimonials'>
                <Testimonial
                    text='Fylo has improved our team productivity by an order of magnitude. Since making the Switch our team has become a well-oiled collaboration machine.'
                    img='images/profile-1.jpg'
                    auth='Satish Patel'
                    job='Founder & CEO, Huddle'
                />
                <Testimonial
                    text='Fylo has improved our team productivity by an order of magnitude. Since making the Switch our team has become a well-oiled collaboration machine.'
                    img='images/profile-2.jpg'
                    auth='Bruce Mckenzie'
                    job='Founder & CEO, Huddle'
                />
                <Testimonial
                    text='Fylo has improved our team productivity by an order of magnitude. Since making the Switch our team has become a well-oiled collaboration machine.'
                    img='images/profile-1.jpg'
                    auth='Iva Boyed'
                    job='Founder & CEO, Huddle'
                />
            </div>
        </div>
    );
}
export default Testimonials;