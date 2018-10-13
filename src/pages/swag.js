import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

class SwagPage extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet>
                    <title>About Code Bushi</title>
                    <meta name="description" content="About Code Bushi" />
                </Helmet>

                <div className="banner banner--blog">
                    <div className="banner__content text-center">
                        <div>
                        <h1 className="font-weight-light mb-3"><span className="u-font-secondary text-uppercase">Code</span> <span className="u-font-special">Bushi</span></h1>
                        <h2 className="font-primary text-uppercase"><strong>&lt; Swag &amp; Stickers &gt;</strong></h2>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="container text-center">
                        <h3>Developer &amp; Programmer Themed Swag</h3>
                        <p className="mb-5">I've recently started to design some fun stickers and T-Shirts that are programmer humor themed. This is mainly stuff that I find funny and wanted a sticker on my laptop, hopefully others will enjoy them as well.</p>

                        <div className="row align-items-center mb-4">
                            <div className="col-lg-6">
                                <Img fluid={this.props.data.jsSeinfeld.childImageSharp.fluid} />
                            </div>
                            <div className="col-lg-6">
                                <Img fluid={this.props.data.jamStack.childImageSharp.fluid} />
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <p>Retro TV JavaScript Design</p>
                                <p><a className="btn btn-sm btn-primary mx-1" href="#" target="blank">Coming Soon</a></p>
                            </div>
                            <div className="col-lg-6">
                                <p>JAM STACK Rock N' Roll Design</p>
                                <p>
                                    <a className="btn btn-sm btn-primary mx-1" href="https://www.redbubble.com/people/techtrade/works/34472993-jam-stack-rocker-design?asc=u&p=sticker" target="blank">Stickers</a>
                                    <a className="btn btn-sm btn-primary mx-1" href="https://www.redbubble.com/people/techtrade/works/34472993-jam-stack-rocker-design?asc=u&p=t-shirt" target="blank">Shirts</a>
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 mb-5"></div>

                        <div className="row align-items-center mb-4">
                            <div className="col-lg-6">
                                <Img fluid={this.props.data.jsPower.childImageSharp.fluid} />
                            </div>
                            <div className="col-lg-6">
                                <Img fluid={this.props.data.jsChill.childImageSharp.fluid} />
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <p>JavaScript Power Magazine Design</p>
                                <p>
                                    <a className="btn btn-sm btn-primary mx-1" href="https://www.redbubble.com/people/techtrade/works/34444816-javascript-power?asc=u&p=sticker" target="blank">Stickers</a>
                                    <a className="btn btn-sm btn-primary mx-1" href="https://www.redbubble.com/people/techtrade/works/34444816-javascript-power?asc=u&p=t-shirt" target="blank">Shirts</a>
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <p>JavaScript And Chill</p>
                                <p>
                                    <a className="btn btn-sm btn-primary mx-1" href="https://www.redbubble.com/people/techtrade/works/34408342-javascript-and-chill?asc=u&p=sticker" target="blank">Stickers</a>
                                    <a className="btn btn-sm btn-primary mx-1" href="https://www.redbubble.com/people/techtrade/works/34408342-javascript-and-chill?asc=u&p=t-shirt" target="blank">Shirts</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </Layout>
        )
    }
}

export default SwagPage

export const swagQuery = graphql`
    query swagQuery {
        jamStack:file(relativePath: { eq: "jam-stack.png" }) {
            childImageSharp {
                fluid(maxWidth: 690) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        jsPower:file(relativePath: { eq: "js-power.png" }) {
            childImageSharp {
                fluid(maxWidth: 690) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        jsSeinfeld:file(relativePath: { eq: "js-seinfeld.png" }) {
            childImageSharp {
                fluid(maxWidth: 690) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        jsChill:file(relativePath: { eq: "js-and-chill.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 690) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`