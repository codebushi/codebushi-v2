import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

class AboutPage extends React.Component {
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
                        <h2 className="font-primary text-uppercase"><strong>&lt; About &gt;</strong></h2>
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <p>Welcome to Code Bushi! My name is Hunter Chang and I've been a professional web developer and designer for over 8 years. I started my career building and customizing Wordpress sites for various small businesses. My main focus became HTML, CSS, and jQuery as I got to know the ins and outs of creating custom Wordpress themes. Later on I developed themes for popular ecommerce platforms such as Shopify and Bigcommerce.</p>
                                <p>A few years ago I started shifting more and more towards JavaScript development, learning front-end frameworks such as Angular.js and React.js. The change was challenging but also rewarding, as I grew and became more confident as a programmer. I currently work as a front-end engineer for <a href="https://www.marketing360.com/" target="blank">Marketing 360</a>.</p>
                                <p>I really enjoy learning and experimenting with the latest tools for the web, so I started Code Bushi as a way to share my discoveries. The web changes so fast that if you're not trying out new technologies, you can be left behind very quickly. Hopefully you'll find the tutorials and resources on this site helpful, thanks for checking out Code Bushi!</p>
                            </div>
                            <div className="col-lg-6">
                                <Img fluid={this.props.data.aboutHunter.childImageSharp.fluid} />
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        )
    }
}

export default AboutPage

export const aboutQuery = graphql`
    query AboutQuery {
        aboutHunter:file(relativePath: { eq: "about-hunter-chang.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 690) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`