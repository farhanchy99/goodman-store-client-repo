import React from 'react';
import logo from '../../../assets/logo.png'
import { faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-white justify-between items-center px-20 backdrop-blur-sm bg-white/30 mt-10">
                <div>
                    <img src={logo} alt="" />
                    <p>GoodMan Gaming Service<br/>created by Farhan Chowdhury @2022</p>
                </div> 
                <div>
                    <span className=" text-white text-4xl">Social</span> 
                    <div className="grid grid-flow-col gap-4">
                        <Link to={'/'} className="text-2xl"><FontAwesomeIcon icon={faTwitter} className="mr-5"></FontAwesomeIcon></Link>
                        <Link to={'/'} className="text-2xl"><FontAwesomeIcon icon={faFacebookF} className="mr-5"></FontAwesomeIcon></Link>
                        <Link to={'/'} className="text-2xl"><FontAwesomeIcon icon={faYoutube} className="mr-5"></FontAwesomeIcon></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;