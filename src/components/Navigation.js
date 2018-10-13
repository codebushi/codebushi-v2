import React from 'react'
import { Link } from 'gatsby'

const Navigation = (props) => (
    <div className="nav-mobile">
        <nav className="nav-main" itemScope itemType="http://schema.org/SiteNavigationElement">
            <ul className="nav-main__list">
                <li><Link itemProp="url" to="/" onClick={props.handleToggleNav}><span itemProp="name">Home</span></Link></li>
                <li><Link itemProp="url" to="/gatsby-starters/" onClick={props.handleToggleNav}><span itemProp="name">Gatsby.js Starters</span></Link></li>
                <li><Link itemProp="url" to="/nextjs-website-starters/" onClick={props.handleToggleNav}><span itemProp="name">Next.js Starters</span></Link></li>
                {<li><Link itemProp="url" to="/swag/" onClick={props.handleToggleNav}><span itemProp="name">Swag &amp; Stickers</span></Link></li>}
                <li><Link itemProp="url" to="/blog/" onClick={props.handleToggleNav}><span itemProp="name">Blog Articles</span></Link></li>
                <li><Link itemProp="url" to="/resources/" onClick={props.handleToggleNav}><span itemProp="name">Resources</span></Link></li>
                <li><Link itemProp="url" to="/about/" onClick={props.handleToggleNav}><span itemProp="name">About</span></Link></li>
            </ul>
        </nav>
    </div>
)

export default Navigation