import React from 'react';
import './StayProductive.css';
import {Link} from 'react-router-dom';

function StayProductive(){
    return(
        <div className='contanier'>
            <div className='stayProductive'>
                <div className='stay-l'>
                    <img src='images/illustration-stay-productive.png' alt='illustration-stay-productive'/>
                </div>
                <div className='stay-r'>
                    <h1>Stay productive, wherever you are</h1>
                    <p>Never let location be an issue when accessing your files. Fylo you covered for all of your life storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    <Link to='/'>See how Fylo works <img src='images/icon-arrow.svg' alt='icon-arrow' /></Link>
                </div>
            </div>
        </div>
    );
}
export default StayProductive;