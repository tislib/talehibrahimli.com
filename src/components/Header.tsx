import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    return <header className="site-header">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">

                    <Link to='/'>
                        <a className="site-header__logo">Taleh Ibrahimi</a>
                    </Link>

                    <ul className="site-header__nav hidden-xs">

                        <li>
                            <Link to='/'>
                                <a>About Me</a>
                            </Link>
                        </li>

                        <li>
                            <Link to='/portfolio'>
                                <a>Portfolio</a>
                            </Link>
                        </li>

                        <li>
                            <Link to='/blog'>
                                <a>Blog</a>
                            </Link>
                        </li>

                        <li>
                            <Link to='/contact'>
                                <a>Contact</a>
                            </Link>
                        </li>

                    </ul>
                    <button className="offcanvas-toggle visible-xs">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>

            </div>

        </div>

    </header>;
};
