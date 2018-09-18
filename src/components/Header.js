import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/img/codebushi-logo.svg'

const NavBtn = (props) => (
    <button className={"hamburger hamburger--spin u-no-outline js-toggle-nav" + props.toggleClass} type="button" onClick={props.handleToggleNav}>
        <span className="hamburger-box">
            <span className="hamburger-inner"></span>
        </span>
    </button>
)

const Header = (props) => {
    if (props.isHomepage) {
        return (
            <header className="site-header--noLogo" itemScope itemType="http://schema.org/WPHeader">
                <NavBtn toggleClass={props.toggleClass} handleToggleNav={props.handleToggleNav} />
            </header>
        )
    } else {
        return (
            <header className="site-header" itemScope itemType="http://schema.org/WPHeader">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="logo">
                                <Link to="/"><img itemProp="image" src={logo} alt="Code Bushi" /></Link>
                            </div>
                        </div>
                        <div className="col text-right">
                            <NavBtn toggleClass={props.toggleClass} handleToggleNav={props.handleToggleNav} />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header