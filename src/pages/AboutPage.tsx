import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';

import './AboutPage.scss';

export const AboutPage = () => {
    return (<>
        <div className="hero-subheader">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="align-container" data-mh>
                            <div className="align-inner">
                                <p className="hero-subheader__desc">
                                    I am Java Software Architect with 9 years hands'on experience.
                                    <br/>
                                    I love programming, Travelling, Making Coffee, Solving Complex Problems
                                </p>
                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </div>

        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="content center">
                        <a href='https://www.facebook.com/taleh.ibrahimli' className='social-link'>
                            <FontAwesomeIcon icon={faFacebookF} fixedWidth size='4x'/>
                        </a>
                        <a href='https://www.linkedin.com/in/taleh-ibrahimli-b7511b66' className='social-link'>
                            <FontAwesomeIcon icon={faLinkedin} fixedWidth size='4x'/>
                        </a>
                        <a onClick={() => alert('@TalehIbrahimli')} className='social-link'>
                            <FontAwesomeIcon icon={faTelegram} fixedWidth size='4x'/>
                        </a>
                        <a href='https://github.com/tislib' className='social-link'>
                            <FontAwesomeIcon icon={faGithub} fixedWidth size='4x'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

    </>);
};
