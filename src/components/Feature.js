import React from 'react';
import './Feature.css';

function Feature({img,head,text}){
    return(
        <div className='feature'>
            <img src={img} alt='img'/>
            <h2>{head}</h2>
            <p>{text}</p>
        </div>
    );
}
export default Feature;