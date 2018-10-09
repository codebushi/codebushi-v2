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
                        <h2 className="font-primary text-uppercase"><strong>&lt; Swag &gt;</strong></h2>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="container text-center">
                        <h3>Developer &amp; Programmer Themed Swag</h3>
                        <p className="mb-5">I've recently started to design some fun stickers and t-shirts that are programmer humor themed. This is mainly stuff that I find funny and wanted a sticker on my laptop, hopefully others will enjoy them as well.</p>

                        <div className="row align-items-center mb-4">
                            <div className="col-lg-6">
                                <Img fluid={this.props.data.jsSeinfeld.childImageSharp.fluid} />
                            </div>
                            <div className="col-lg-6">
                                <Img fluid={this.props.data.jsChill.childImageSharp.fluid} />
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <p>Seinfeld Themed JavaScript Sticker</p>
                                <p><a className="btn btn-primary" href="https://www.redbubble.com/people/techtrade/works/34402378-javascript-seinfeld-style-logo?asc=u&p=sticker" target="blank">Visit Store</a></p>
                            </div>
                            <div className="col-lg-6">
                                <p>JavaScript And Chill</p>
                                <p><a className="btn btn-primary" href="https://www.redbubble.com/people/techtrade/works/34408342-javascript-and-chill?asc=u" target="blank">Visit Store</a></p>
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