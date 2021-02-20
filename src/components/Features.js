import React from 'react';
import './Features.css';
import Feature from './Feature';

function Features(){
    return(
        <div className='features'>
            <div className='contanier'>
                <div className='features-flex'>
                    <Feature 
                    img='images/icon-access-anywhere.svg'
                    head='Access your files, anywhere'
                    text='The ability to use a Smartphone, tablet, Or Computer to access your account means your files follow you everywhere.'
                    />
                    <Feature 
                    img='images/icon-security.svg'
                    head='Security you can trust'
                    text='2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
                    />
                </div>
                <div className='features-flex mob-marg'>
                    <Feature 
                    img='images/icon-collaboration.svg'
                    head='Real-time collaboration'
                    text='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
                    />
                    <Feature 
                    img='images/icon-any-file.svg'
                    head='Store any type of file'
                    text='Whetjer youre sharing holidays photos or work documents, Fylo has you covered allowing all file types to be securely stored and shared.'
                    />
                </div>
            </div>
        </div>
    );
}
export default Features;