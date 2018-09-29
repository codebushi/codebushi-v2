import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

import SubscribeForm from '../components/SubscribeForm'

const formProps = {
    action: 'https://hunterchang.us17.list-manage.com/subscribe/post?u=d8b54a1bbe98f0c81add64e56&amp;id=bbf0c0ef12',
    messages: {
        inputPlaceholder: "Email Address",
        btnLabel: "Subscribe",
        sending: "Working...",
        success: "Please check your email to complete the subscription process. Thank you!",
        error: "Please enter a valid email address."
    },
    styles: {
        sending: {
            fontSize: 14,
            color: "auto"
        },
        success: {
            fontSize: 14,
            color: "green"
        },
        error: {
            fontSize: 14,
            color: "red"
        }
    }
}

class GatsbyStarters extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet>
                    <title>Gatsby.js Starters and Templates | Code Bushi</title>
                    <meta name="description" content="A collection of React.js website starters and templates for Gatsby.js" />
                </Helmet>

                <div className="banner banner--gatsby-starters">
                    <div className="banner__content text-center">
                        <div>
                            <h1 className="text-uppercase"><strong>Gatsby.js <br /> Starters and Templates</strong></h1>
                        </div>
                    </div>
                </div>

                <section className="section section--shaded py-5 text-center">
                    <div className="container">
                        <p className="lead mb-0">New to Gatsby? Check out the <a href="#getStarted">Getting Started</a> guide for a quick overview.</p>
                        <p className="lead mb-0">Here's also some great resources for <Link to="/learning-javascript-and-react/">learning JavaScript and React.js.</Link></p>
                    </div>
                </section>

                <div className="container-fluid" style={{padding: '20px'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="p-5 text-center">
                                <h2 className="mb-4">Gatsby Dimension V2</h2>
                                <p className="lead mb-4">A fully responsive, single page React.js website template. Built using Gatsby.js and designed by HTML5 UP. Great for a quick profile or portfolio site. <em>Updated to Gatsby V2!</em></p>
                                <p>
                                    <a href="http://gatsby-dimension-v2.surge.sh/" title="Preview Template" className="social-icon-link u-link-white" target="blank"><span className="fi-monitor"></span></a>
                                    <a href="https://github.com/codebushi/gatsby-starter-dimension-v2" title="View code on Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Img fluid={this.props.data.gatsbyDimension.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{padding: '20px'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2">
                            <div className="p-5 text-center">
                                <h2 className="mb-4">Gatsby Forty V2</h2>
                                <p className="lead mb-4">A colorful website template featuring a landing page, two hero banner styles, and a generic page. Built using Gatsby.js and designed by HTML5 UP. <em>Updated to Gatsby V2!</em></p>
                                <p>
                                    <a href="http://gatsby-forty-v2.surge.sh/" title="Preview Template" className="social-icon-link u-link-white" target="blank"><span className="fi-monitor"></span></a>
                                    <a href="https://github.com/codebushi/gatsby-starter-forty-v2" title="View code on Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <Img fluid={this.props.data.gatsbyForty.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{padding: '20px'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="p-5 text-center">
                                <h2 className="mb-4">Gatsby Strata V2</h2>
                                <p className="lead mb-4">This super simple site features a lightbox style photo gallery. Fully responsive and perfect for displaying your work. Designed by HTML5 UP. <em>Updated to Gatsby V2!</em></p>
                                <p>
                                    <a href="http://gatsby-strata.surge.sh/" title="Preview Template" className="social-icon-link u-link-white" target="blank"><span className="fi-monitor"></span></a>
                                    <a href="https://github.com/codebushi/gatsby-starter-strata-v2" title="View code on Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Img fluid={this.props.data.gatsbyStrata.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{padding: '20px'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2">
                            <div className="p-5 text-center">
                                <h2 className="mb-4">Gatsby Stellar V2</h2>
                                <p className="lead mb-4">A scroll friendly, responsive site. Supports single or multiple pages. Has smooth scrolling to the different sections of the page. Designed by HTML5 UP. <em>Updated to Gatsby V2!</em></p>
                                <p>
                                    <a href="http://gatsby-stellar.surge.sh/" title="Preview Template" className="social-icon-link u-link-white" target="blank"><span className="fi-monitor"></span></a>
                                    <a href="https://github.com/codebushi/gatsby-starter-stellar-v2" title="View code on Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <Img fluid={this.props.data.gatsbyStellar.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{padding: '20px'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="p-5 text-center">
                                <h2 className="mb-4">Gatsby Photon V2</h2>
                                <p className="lead mb-4">Great single page site that can be a landing page or a portfolio website. Custom grid elements made with CSS Grid! Original design by HTML5 UP. <em>Updated to Gatsby V2!</em></p>
                                <p>
                                    <a href="http://gatsby-photon.surge.sh/" title="Preview Template" className="social-icon-link u-link-white" target="blank"><span className="fi-monitor"></span></a>
                                    <a href="https://github.com/codebushi/gatsby-starter-photon-v2" title="View code on Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Img fluid={this.props.data.gatsbyPhoton.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid newsletter text-center" style={{padding: '40px 20px'}}>
                    <div className="container">
                        <p className="lead">Sign up and receive an email alert when the next Gatsby Starter is released!</p>
                        <SubscribeForm {...formProps}/>
                        <p className="mt-2 mb-0"><small><em>Your email will never be shared or used for spam!</em></small></p>
                    </div>
                </div>

                <section id="getStarted" className="section py-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Getting Started with Gatsby</h2>
                        <p>To use <a href="https://www.gatsbyjs.org/">Gatsby.js</a>, make sure you have <a href="https://nodejs.org/en/download/">Node.js</a> and npm installed on your machine. Gatsby starters can be installed via the Gatsby CLI tool or by cloning a GitHub repository. Let's explore the CLI tool by first installing it.</p>

                        <div className="gatsby-highlight">
                            <pre className="language-bash">
                                <code className="language-bash">
                                    <span className="token comment"># Install the Gatsby CLI tool globally on your machine</span><br />
                                    <span className="token function">npm install</span> --global gatsby-cli
                                </code>
                            </pre>
                        </div>

                        <p>The convention for starting a new Gatsby site with the CLI is:</p>

                        <div className="gatsby-highlight">
                            <pre className="language-bash">
                                <code className="language-bash">
                                    <span className="token function">gatsby new</span> [SITE_DIRECTORY] [URL_OF_STARTER_GITHUB_REPO]
                                </code>
                            </pre>
                        </div>

                        <p>Let's try installing the Gatsby Dimension Starter:</p>

                        <div className="gatsby-highlight">
                            <pre className="language-bash">
                                <code className="language-bash">
                                    <span className="token function">gatsby new</span> gatsby-starter-dimension https://github.com/codebushi/gatsby-starter-dimension-v2
                                </code>
                            </pre>
                        </div>

                        <p>This will create a new directory called <code className="language-text">gatsby-starter-dimension</code> and clone the repository into it. It will also automatically run <code className="language-text">npm install</code> in the directory for you. Now we just need to go into the new directory and boot up Gatsby.</p>

                        <div className="gatsby-highlight">
                            <pre className="language-bash">
                                <code className="language-bash">
                                    <span className="token function">cd</span> gatsby-starter-dimension<br /><br />
                                    <span className="token comment"># Start the dev site, browse to http://localhost:8000/</span><br />
                                    <span className="token function">gatsby develop</span>
                                </code>
                            </pre>
                        </div>

                        <p>If you don't want to use the Gatsby CLI tool, you can just clone the repository and manually run <code className="language-text">npm install</code> inside the folder, followed by <code className="language-text">gatsby develop</code>. Check out the official <a href="https://www.gatsbyjs.org/tutorial/">Gatsby Tutorials</a> for more information.</p>

                    </div>
                </section>

            </Layout>
        )
    }
}

export default GatsbyStarters

export const fluidImage = graphql`
fragment fluidImage on File {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
}
`;

export const pageQuery = graphql`
    query GatsbyStartersQuery {
        gatsbyDimension:file(relativePath: { eq: "template-gatsby-dimension.jpg" }) {
            ...fluidImage
        }
        gatsbyForty:file(relativePath: { eq: "template-gatsby-forty.jpg" }) {
            ...fluidImage
        }
        gatsbyStrata:file(relativePath: { eq: "template-gatsby-strata.jpg" }) {
            ...fluidImage
        }
        gatsbyStellar:file(relativePath: { eq: "template-gatsby-stellar.jpg" }) {
            ...fluidImage
        }
        gatsbyPhoton:file(relativePath: { eq: "template-gatsby-photon.jpg" }) {
            ...fluidImage
        }
    }
`