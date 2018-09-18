import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

import '../assets/scss/main.scss'

class Template extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showNav: false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            showNav: !this.state.showNav
        });
    }

    render() {

        const { children } = this.props

        let toggleClass = '';
        let isHomepage = true;

        if (this.state.showNav) {
            toggleClass = ' show-nav'
        }

        return (
            <div className={'body' + toggleClass} itemScope itemType="http://schema.org/WebSite">
                <link itemProp="url" href="https://codebushi.com/"/>
                <div itemScope itemType="http://schema.org/WebPage">
                    <Header handleToggleNav={this.toggleNav} toggleClass={toggleClass} isHomepage={isHomepage} />
                    <Navigation handleToggleNav={this.toggleNav} data={this.props.data} />
                    <main itemScope itemProp="mainContentOfPage">
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Template