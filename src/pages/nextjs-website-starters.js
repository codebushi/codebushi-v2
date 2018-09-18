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

class NextjsStarters extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet>
                    <title>Next.js Website Starters and Templates | Code Bushi</title>
                    <meta name="description" content="Next.js static website starters and templates, build with React.js." />
                </Helmet>

                <div className="banner banner--nextjs-starters">
                    <div className="banner__content text-center">
                        <div>
                            <h1 className="text-uppercase"><strong>Next.js <br /> Starters and Templates</strong></h1>
                        </div>
                    </div>
                </div>

                <section className="section section--shaded py-5 text-center">
                    <div className="container">
                        <p className="lead mb-0">New to Next.js? Check out the <a href="#getStarted">Getting Started</a> guide for a quick overview.</p>
                        <p className="lead mb-0">Here's also some great resources for <Link to="/learning-javascript-and-react/">learning JavaScript and React.js.</Link></p>
                    </div>
                </section>

                <div className="container-fluid" style={{padding: '20px'}}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="p-5 text-center">
                                <h2 className="mb-4">Next.js Dimension</h2>
                                <p className="lead mb-4">A fully responsive, single page React.js website template. Built using Next.js and designed by <a href="https://html5up.net/dimension">HTML5 UP</a>. Great for a quick profile or portfolio site.</p>
                                <p>
                                    <a href="http://nextjs-dimension.surge.sh/" title="Preview Template" className="social-icon-link u-link-white" target="blank"><span className="fi-monitor"></span></a>
                                    <a href="https://github.com/codebushi/nextjs-starter-dimension" title="View code on Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
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
                                <h2 className="mb-4">Next.js Forty</h2>
                                <p className="lead mb-4">A colorful website template featuring a landing page layout and many styled elements. Built using Next.js and designed by <a href="https://html5up.net/forty">HTML5 UP</a>.</p>
                                <p>
                                    <a href="http://nextjs-forty.surge.sh/" title="Preview Template" className="social-icon-link u-link-white" target="blank"><span className="fi-monitor"></span></a>
                                    <a href="https://github.com/codebushi/nextjs-starter-forty" title="View code on Github" className="social-icon-link u-link-white" target="blank"><span className="fi-social-github"></span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <Img fluid={this.props.data.gatsbyForty.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid newsletter text-center" style={{padding: '40px 20px'}}>
                    <div className="container">
                        <p className="lead">Sign up and receive an email alert when the next Next.js Starter is released!</p>
                        <SubscribeForm {...formProps}/>
                        <p className="mt-2 mb-0"><small><em>Your email will never be shared or used for spam!</em></small></p>
                    </div>
                </div>

                <section id="getStarted" className="section py-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Getting Started with Next.js</h2>
                        <p><a href="https://github.com/zeit/next.js/" target="blank">Next.js</a> is a framework for server-rendered or statically-exported React.js apps. With these templates, we'll focus mainly on the static site features of Next.js. You'll need to have <a href="https://nodejs.org/en/download/">Node.js</a> and npm installed on your machine.</p>

                        <p>Let's use the Next.js Dimension Starter:</p>

                        <div className="gatsby-highlight">
                            <pre className="language-bash">
                                <code className="language-bash">
                                    <span className="token comment"># Clone the repository</span><br />
                                    <span className="token function">git clone</span> https://github.com/codebushi/nextjs-starter-dimension.git<br /><br />

                                    <span className="token function">cd</span> nextjs-starter-dimension/<br /><br />
                                    <span className="token comment"># Install npm packages</span><br />
                                    <span className="token function">npm install</span><br /><br />
                                    <span className="token comment"># Start up the next.js dev server, browse to http://localhost:3000/</span><br />
                                    <span className="token function">npm run dev</span>
                                </code>
                            </pre>
                        </div>

                        <p>Next.js can be used as a normal React framework with server side rendering and code splitting built in. It can also generate static websites if configured properly. We already have the static site configurations in place, you just need to build and export the site.</p>

                        <div className="gatsby-highlight">
                            <pre className="language-bash">
                                <code className="language-bash">
                                    <span className="token comment"># Build and export the site, the static files are generated in the out/ folder</span><br />
                                    <span className="token function">npm run</span> export
                                </code>
                            </pre>
                        </div>

                        <p>Your static site will be created in a new folder called <code className="language-text">out</code>. To learn more about Next.js, visit their <a href="https://learnnextjs.com/" target="blank">official tutorial.</a></p>

                    </div>
                </section>

            </Layout>
        )
    }
}

export default NextjsStarters

export const pageQuery = graphql`
    query NextjsStartersQuery {
        gatsbyDimension:file(relativePath: { eq: "template-gatsby-dimension.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        gatsbyForty:file(relativePath: { eq: "template-gatsby-forty.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`