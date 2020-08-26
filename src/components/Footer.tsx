import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <p className="site-footer__copyright">Copyright &copy; 2020. - Taleh Ibrahimli <br/>All rights reserved.</p>
                </div>
                <div className="col-sm-6 align-right">
                    <a href='https://www.facebook.com/taleh.ibrahimli' className='social-link'>
                        <FontAwesomeIcon icon={faFacebookF} fixedWidth size='2x'/>
                    </a>
                    <a href='https://www.linkedin.com/in/taleh-ibrahimli-b7511b66' className='social-link'>
                        <FontAwesomeIcon icon={faLinkedin} fixedWidth size='2x'/>
                    </a>
                    <a onClick={() => alert('@TalehIbrahimli')} className='social-link'>
                        <FontAwesomeIcon icon={faTelegram} fixedWidth size='2x'/>
                    </a>
                    <a href='https://github.com/tislib' className='social-link'>
                        <FontAwesomeIcon icon={faGithub} fixedWidth size='2x'/>
                    </a>

                </div>


            </div>

        </div>

    </footer>;
};
