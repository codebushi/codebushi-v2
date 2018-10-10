import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import logo from '../assets/img/codebushi-icon-white.svg'

class BlogIndex extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges

        return (
            <Layout>
                <Helmet>
                    <title>{this.props.data.site.siteMetadata.title}</title>
                    <meta name="description" content={this.props.data.site.siteMetadata.description} />
                </Helmet>

                <div className="banner banner--home">
                    <div className="banner__content text-center">
                        <div className="pb-8">
                            <div className="container-fluid">
                                <div className="home-logo">
                                    <img src={logo} alt="Code Bushi" />
                                </div>
                                <h1 className="font-weight-light mb-3"><span className="u-font-secondary text-uppercase">Code</span> <span className="u-font-special">Bushi</span></h1>
                                <h2 className="mb-3 u-font-primary">Web development tips and resources to elevate your coding journey.</h2>
                            </div>
                        </div>
                        <div className="banner__arrow animation-fadeInOut">
                            <span className="fi-chevron-down h2"></span>
                        </div>
                    </div>
                    <Img className="banner__image" fluid={this.props.data.bannerImage.childImageSharp.fluid} />
                </div>

                <div className="container">

                    {posts.map(post => {
                        if (post.node.path !== '/404/') {

                            const datePublished = post.node.frontmatter.date;
                            const dateModified = post.node.frontmatter.dateModified;
                            let dateContent;

                            if (!dateModified) {
                                dateContent = (
                                    <p className="mb-2 small"><span itemProp="datePublished">{datePublished}</span></p>
                                )
                            } else {
                                dateContent = (
                                    <p className="mb-2 small">
                                        <span itemProp="datePublished">{datePublished}</span>
                                        <em> (Updated: <span itemProp="dateModified">{dateModified}</span>)</em>
                                    </p>
                                )
                            }

                            return (
                                <article className="post" key={post.node.frontmatter.path} itemScope itemType="http://schema.org/Article">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <Link to={post.node.frontmatter.path} className="u-hover-fade">
                                                <Img fluid={post.node.frontmatter.image.childImageSharp.fluid} />
                                            </Link>
                                        </div>
                                        <div className="col-lg-6">
                                            <h3 className="post__title mt-4 mt-lg-0" itemProp="name headline">
                                                <Link to={post.node.frontmatter.path}>
                                                    {post.node.frontmatter.title}
                                                </Link>
                                            </h3>
                                            {dateContent}
                                            <p className="post__excerpt" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                                        </div>
                                    </div>
                                    <meta itemProp="author" content="Hunter Chang" />
                                </article>
                            )
                        }
                    })}

                </div>

                <section className="section section--shaded py-6">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <Img fluid={this.props.data.gatsbyTemplate.childImageSharp.fluid} />
                            </div>
                            <div className="col-lg-6">
                                <div className="py-4 text-center">
                                    <h3 className="mb-4">Gatsby.js &amp; Next.js Starters</h3>
                                    <p className="mb-4">View our collection of website templates for Gatsby.js and Next.js. Gatsby is a static site generator which uses modern web technologies such as React.js, Webpack, and GraphQL. Next.js is a framework for server side rendered React apps and also generates static websites.</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p><Link to="/gatsby-starters/" className="btn btn-block btn-outline-secondary">Gatsby.js Templates</Link></p>
                                        </div>
                                        <div className="col-md-6">
                                            <p><Link to="/nextjs-website-starters/" className="btn btn-block btn-outline-secondary">Next.js Templates</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*<section className="section py-6">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="py-4 text-center">
                                    <h3 className="mb-4">Dev Humor Swag &amp; Stickers</h3>
                                    <p className="mb-4">Check out the Swag page for some fun programmer humor stickers and swag.</p>
                                    <p><Link to="/swag/" className="btn btn-outline-secondary">Swag &amp; Stickers</Link></p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <Img fluid={this.props.data.jsSeinfeld.childImageSharp.fluid} />
                            </div>
                        </div>
                    </div>
                </section>*/}

                <section className="section py-6">
                    <div className="container">
                        <h2 className="mb-4">About Code Bushi</h2>
                        <p className="lead">Code Bushi aims to provide web development resources, techniques, and trends to help guide your coding journey. Modern web development is constantly changing and it can be a struggle trying to keep up with the latest standards and best practices. With Code Bushi, I hope to highlight some interesting tools and resources for the modern web.</p>
                        <p className="lead">Code Bushi was started by me, <Link to="/about">Hunter Chang</Link>, as a way to document and share my coding experiences. I've been a professional web developer and designer for over 8 years and I still love discovering and creating cool things on the web.</p>
                    </div>
                </section>

            </Layout>
        )
    }
}

export default BlogIndex

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
                author
                description
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { featured: { eq: true } } }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    frontmatter {
                        title
                        path
                        date(formatString: "MMM. DD, YYYY")
                        dateModified(formatString: "MMM. DD, YYYY")
                        image {
                            childImageSharp{
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        gatsbyTemplate:file(relativePath: { eq: "gatsby-template.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 690) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        bannerImage:file(relativePath: { eq: "bg-banner-home-min.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1920) {
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
    }
`