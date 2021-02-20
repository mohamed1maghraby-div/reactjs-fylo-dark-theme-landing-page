import React from 'react';
import './Intro.css';
import Navbar from './Navbar';
import IntroContainer from './IntroContainer';

function Intro(){
    return(
        <div className='contanier'>
            <Navbar />
            <IntroContainer />
        </div>
    );
}
export default Intro;