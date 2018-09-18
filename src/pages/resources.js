import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class ResourcePage extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges;

        return (
            <Layout>
                <Helmet>
                    <title>Web Development Resources | Code Bushi</title>
                    <meta name="description" content="Web development and coding resources to help guide your development journey." />
                </Helmet>

                <div className="banner banner--blog">
                    <div className="banner__content text-center">
                        <div>
                        <h1 className="font-weight-light mb-3"><span className="u-font-secondary text-uppercase">Code</span> <span className="u-font-special">Bushi</span></h1>
                        <h2 className="font-primary text-uppercase"><strong>&lt; Resources &gt;</strong></h2>
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
                                <article className="mb-5" key={post.node.frontmatter.path} itemScope itemType="http://schema.org/Article">
                                    <div className="row align-items-center">
                                        <div className="col">
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

export default ResourcePage

export const resourceQuery = graphql`
    query ResourceQuery {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { eq: "resource" } } }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    frontmatter {
                        title
                        path
                        date(formatString: "MMM. DD, YYYY")
                        dateModified(formatString: "MMM. DD, YYYY")
                    }
                }
            }
        }
    }
`