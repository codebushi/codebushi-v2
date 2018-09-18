import React from 'react'
import { Link } from 'gatsby'

import logoDark from '../assets/img/codebushi-logo-dark.svg'

const Footer = (props) => (
    <footer className="site-footer pt-4 pb-4" style={{borderTop: '1px solid #222'}} itemScope itemType="http://schema.org/WPFooter">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-lg-left">
                    <ul className="site-footer__nav nav-list">
                        <li><Link to="/"><span>Home</span></Link></li>
                        <li><Link to="/gatsby-starters/"><span>Gatsby.js Starters</span></Link></li>
                        <li><Link to="/nextjs-website-starters/"><span>Next.js Starters</span></Link></li>
                        <li><Link to="/blog/"><span>Blog Articles</span></Link></li>
                        <li><Link to="/resources/"><span>Resources</span></Link></li>
                        <li><Link to="/about/"><span>About</span></Link></li>
                    </ul>
                </div>
                <div className="col-md-6 text-center text-lg-right">
                    <p className="mt-md-3">
                        <a href="https://github.com/codebushi" title="Code Bushi's Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                    </p>
                </div>
            </div>

            <div className="text-center mt-2">
                <div className="site-footer__logo">
                    <Link to="/"><img itemProp="image" src={logoDark} alt="Code Bushi" /></Link>
                </div>
                <p className="mt-2"><Link to="/" className="u-link-white"><small>&copy; 2018 Code Bushi</small></Link></p>
            </div>
        </div>
    </footer>
)

export default Footer