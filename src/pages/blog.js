import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

class BlogPage extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges;

        return (
            <Layout>
                <Helmet>
                    <title>Web Development Blog | Code Bushi</title>
                    <meta name="description" content="Code Bushi's blog for web development resources, tips, and trends. Exploring topics such as React.js, Gatsby.js, Static Site Generators, and much more." />
                </Helmet>

                <div className="banner banner--blog">
                    <div className="banner__content text-center">
                        <div>
                        <h1 className="font-weight-light mb-3"><span className="u-font-secondary text-uppercase">Code</span> <span className="u-font-special">Bushi</span></h1>
                        <h2 className="font-primary text-uppercase"><strong>&lt; Blog Articles &gt;</strong></h2>
                        </div>
                    </div>
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
                                                <Img sizes={post.node.frontmatter.image.childImageSharp.sizes} />
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

            </Layout>
        )
    }
}

export default BlogPage

export const blogQuery = graphql`
    query BlogQuery {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { eq: "blog" } } }
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
                                sizes(maxWidth: 800) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`