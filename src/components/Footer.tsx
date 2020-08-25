import React from 'react';

export const Footer = () => {
    return <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">

                    <a href="../index.html" className="site-footer__logo">Doks</a>
                    <hr/>
                    <p className="site-footer__copyright">Copyright &copy; 2017. - Themejack <br/>All rights reserved.</p>
                </div>


                <div className="col-sm-6 align-right">
                    <ul className="social-list">

                        <li>
                            <a href="https://twitter.com/themejack" target="_blank"
                               className="social-list__item social-list__item--twitter">
                                <i className="icon icon--twitter"></i>
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/themejack" target="_blank"
                               className="social-list__item social-list__item--github">
                                <i className="icon icon--github"></i>
                            </a>
                        </li>

                    </ul>

                </div>


            </div>

        </div>

    </footer>;
};
