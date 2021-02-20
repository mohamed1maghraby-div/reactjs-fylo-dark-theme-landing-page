import React from 'react';
import './Button.css';

function Button({text,classSize}){
    return(
        <button className={classSize}>{text}</button>
    );
}
export default Button;