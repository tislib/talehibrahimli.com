import React from 'react';
import './App.css';

declare function mainScript(): void;


class App3 extends React.Component<any, any> {
    render() {
        return (
            <span>test2</span>
        );
    }

    asd() {
        console.log('asd');
    }
}

class App2 extends React.Component<any, any> {


    render() {
        console.log(this.props.children);
        // React.Children.forEach(this.props, function(child) {
        //     console.log(child.type.DisplayName);
        // });

        return (
            <span>test1</span>
        );
    }
}

class App extends React.Component<any, any> {
    render() {
        return (
            <>
                <header className="site-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">

                                <a href="../index.html" className="site-header__logo">Taleh Ibrahimi</a>


                                <ul className="site-header__nav hidden-xs">

                                    <li><a href="/blue/">About Me</a></li>

                                    <li><a href="/blue/manage-content">Portfolio</a></li>

                                    <li><a href="/blue/404">Blog</a></li>

                                    <li><a href="/blue/404">Contact</a></li>

                                </ul>
                                <button className="offcanvas-toggle visible-xs">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                            </div>

                        </div>

                    </div>

                </header>

                <div className="hero-subheader">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="align-container" data-mh>
                                    <div className="align-inner">

                                        <h1 className="hero-subheader__title">Getting Started</h1>


                                        <p className="hero-subheader__desc">In this section you'll find basic information about Doks and how
                                            to
                                            install
                                            it and use it properly. If you're first time user then you should read Getting Started section
                                            first.</p>


                                        <a href="../configuration/index.html" className="btn btn--dark btn--rounded btn--w-icon">
                                            <i className="icon icon--arrow-right"></i>
                                            Configuration
                                        </a>


                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="content">
                                    <h2 id="what-is-doks">What is Doks?</h2>
                                    <p>Doks is <a href="https://jekyllrb.com/">Jekyll</a> theme created for project documentations.<br/>
                                        You can use it with <a href="https://pages.github.com/">GitHub</a> and <a
                                            href="https://about.gitlab.com/features/pages/">GitLab Pages</a> as well as a standalone
                                        project.
                                    </p>

                                    <h2 id="what-is-jekyll">What is Jekyll?</h2>
                                    <p><a href="https://jekyllrb.com/">Jekyll</a> is a simple, blog-aware, static site generator. It takes a
                                        template directory containing raw text files in various formats, runs it through a converter
                                        (like <a
                                            href="https://daringfireball.net/projects/markdown/">Markdown</a>) and <a
                                            href="https://github.com/Shopify/liquid/wiki">Liquid</a> renderer, and spits out a complete,
                                        ready-to-publish static website suitable for serving with your favourite web server.</p>

                                    <div className="callout callout--info">
                                        <p><strong>Full Jekyll documentation</strong> You can find full Jekyll documentation <a
                                            href="https://jekyllrb.com/docs/home/" target="blank">here</a>.</p>
                                    </div>

                                    <h2 id="install-jekyll">Install Jekyll</h2>
                                    <h3 id="requirements">Requirements</h3>
                                    <p>Installing Jekyll should be straight-forward if all requirements are met. Before you start, make sure
                                        your
                                        system has the following:</p>

                                    <ul>
                                        <li>GNU/Linux, Unix, or macOS</li>
                                        <li><a href="https://www.ruby-lang.org/en/downloads/">Ruby</a> version 2.0 or above, including all
                                            development headers
                                        </li>
                                        <li><a href="https://rubygems.org/pages/download">RubyGems</a></li>
                                        <li><a href="https://gcc.gnu.org/install/">GCC</a> and <a
                                            href="https://www.gnu.org/software/make/">Make</a>
                                            (in case your system doesn’t have them installed, which you can check by running <code
                                                className="highlighter-rouge">gcc -v</code> and <code className="highlighter-rouge">make
                                                -v</code> in your
                                            system’s command line interface)
                                        </li>
                                    </ul>

                                    <h3 id="install-with-rubygems">Install with RubyGems</h3>
                                    <p>The best way to install Jekyll is via <a href="https://rubygems.org/pages/download">RubyGems</a>. At
                                        the
                                        terminal prompt, simply run the following command to install Jekyll:</p>

                                    <div className="language-sh highlighter-rouge">
                                        <div className="highlight"><pre className="highlight"><code><span className="nv">$ </span>gem install jekyll
</code></pre>
                                        </div>
                                    </div>

                                    <p>All of Jekyll’s gem dependencies are automatically installed by the above command, so you won’t have
                                        to
                                        worry about them at all.</p>

                                    <div className="callout callout--info">
                                        <p><strong>Full Jekyll installation guide</strong> You can find full Jekyll installation guide <a
                                            href="https://jekyllrb.com/docs/installation/" target="blank">here</a>.</p>
                                    </div>

                                    <h2 id="install-doks">Install Doks</h2>
                                    <h3 id="download">Download</h3>
                                    <p>Download your Doks theme from ThemeForest (you should get <code
                                        className="highlighter-rouge">doks.zip</code>)
                                        and unzip it.</p>

                                    <h3 id="start-development-server">Start development server</h3>
                                    <p>Jekyll comes with a built-in development server that will allow you to preview what the generated
                                        site
                                        will
                                        look like in your browser locally.</p>

                                    <p>You can run this commands inside theme folder:</p>

                                    <div className="language-sh highlighter-rouge">
                                        <div className="highlight"><pre className="highlight"><code><span className="nv">$ </span>jekyll serve
<span className="c"># A development server will run at http://localhost:4000/</span>
<span className="c"># Auto-regeneration: enabled. Use `--no-watch` to disable.</span>

<span className="nv">$ </span>jekyll serve <span className="nt">--no-watch</span>
<span className="c"># Same as `jekyll serve` but will not watch for changes.</span>

<span className="nv">$ </span>jekyll serve <span className="nt">--detach</span>
<span className="c"># Same as `jekyll serve` but will detach from the current terminal.</span>
<span className="c"># If you need to kill the server, you can `kill -9 1234` where "1234" is the PID.</span>
<span className="c"># If you cannot find the PID, then do, `ps aux | grep jekyll` and kill the instance.</span>
</code></pre>
                                        </div>
                                    </div>

                                    <h2 id="directory-structure">Directory structure</h2>
                                    <p>This is Doks basic directory structure which looks like this:</p>

                                    <div className="language-sh highlighter-rouge">
                                        <div className="highlight"><pre className="highlight"><code>doks/
├── doks-theme/ <span className="c"># Doks theme source files.</span>
├── _config.yml <span className="c"># Stores Jekyll configuration data.</span>
├── .eslintrc <span className="c"># ESlint configuration file.</span>
├── .gitignore <span className="c"># Git related file which specifies intentionally untracked files to ignore.</span>
├── .gitlab-ci.yml <span className="c"># File used by GitLab Runner to manage your project's jobs.</span>
├── .htaccess <span className="c"># Configuration file for use on web servers running the Apache Web Server software.</span>
├── 404.md <span className="c"># Error 404 layout markdown template.</span>
├── default.md <span className="c"># Default layout markdown template.</span>
├── favicon.ico <span className="c"># Favicon icon.</span>
└── index.md <span className="c"># Homepage layout markdown template.</span>
</code></pre>
                                        </div>
                                    </div>

                                    <h2 id="icons">Icons</h2>
                                    <p>List of icons you can use in some places such as social list in footer or buttons in homepage
                                        layout.</p>

                                    <h2 id="change-log">Change Log</h2>
                                    <p>All notable changes to this project will be documented here.
                                        This project adheres to <a href="http://semver.org/">Semantic Versioning</a>.</p>

                                    <h3 id="v100---2017-12-08">[v1.0.0] - 2017-12-08</h3>
                                    <p>Initial release.</p>

                                    <h2 id="credits">Credits</h2>
                                    <p>List of vendor assets we used to create this theme:</p>
                                    <ul>
                                        <li><a href="https://github.com/twbs/bootstrap">Bootstrap</a> (<a
                                            href="https://github.com/twbs/bootstrap/blob/master/LICENSE">MIT License</a>)
                                        </li>
                                        <li><a href="https://github.com/necolas/normalize.css">normalize.css</a> (<a
                                            href="https://github.com/necolas/normalize.css/blob/master/LICENSE.md">MIT License</a>)
                                        </li>
                                        <li><a href="http://jquery.com">jQuery</a> (<a href="https://tldrlegal.com/license/mit-license">MIT
                                            License</a>)
                                        </li>
                                        <li><a href="https://github.com/liabru/jquery-match-height">jquery-match-height</a> (<a
                                            href="https://github.com/liabru/jquery-match-height/blob/master/LICENSE">MIT License</a>)
                                        </li>
                                        <li><a href="https://github.com/simple-icons/simple-icons">simple-icons</a> (<a
                                            href="https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md">CC0-1.0 License</a>)
                                        </li>
                                        <li><a href="https://github.com/colebemis/feather">feather</a> (<a
                                            href="https://github.com/colebemis/feather/blob/master/LICENSE">MIT License</a>)
                                        </li>
                                        <li><a href="https://fonts.google.com/specimen/Montserrat">Montserrat</a> (<a
                                            href="http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&amp;id=OFL">SIL Open Font
                                            License,
                                            1.1</a>)
                                        </li>
                                        <li><a href="https://fonts.google.com/specimen/Noto+Sans">Noto Sans</a> (<a
                                            href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache License, version 2.0</a>)
                                        </li>
                                        <li><a href="https://fonts.google.com/specimen/Source+Code+Pro">Source Code Pro</a> (<a
                                            href="http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&amp;id=OFL">SIL Open Font
                                            License,
                                            1.1</a>)
                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <div className="col-md-4 col-md-offset-1">
                                <div className="sections-list-wrapper">
                                    <div className="sections-list js-sections js-affix js-scrollspy hidden-xs hidden-sm"></div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="js-footer-area">

                    <nav className="page-nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">


                                    <a href="../configuration/index.html" className="page-nav__item page-nav__item--next">
                                        Configuration
                                        <i className="icon icon--arrow-right"></i>
                                    </a>

                                </div>

                            </div>

                        </div>

                    </nav>


                    <div className="micro-nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <a href="../index.html" className="micro-nav__back">
                                        <i className="icon icon--arrow-left"></i>
                                        Back to homepage
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>


                    <footer className="site-footer">
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

                    </footer>


                </div>
            </>
        );
    }

    componentDidMount() {
        mainScript();
    }
}

export default App;
