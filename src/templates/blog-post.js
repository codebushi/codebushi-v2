import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import ReactDisqusComments from "react-disqus-comments";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon } from 'react-share'

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const siteTitle = this.props.data.site.siteMetadata.title
        const shareUrl = 'https://codebushi.com' + post.frontmatter.path
        const datePublished = post.frontmatter.date
        const dateModified = post.frontmatter.dateModified
        const featuredImg = post.frontmatter.image.childImageSharp.sizes.src

        let dateContent;

        if (!dateModified) {
            dateContent = (
                <p className="mb-4 small">
                    <span itemProp="datePublished">{datePublished}</span>
                    <meta itemProp="dateModified" content={datePublished} />
                </p>
            )
        } else {
            dateContent = (
                <p className="mb-4 small">
                    Updated on: <span itemProp="dateModified">{dateModified}</span>
                    <meta itemProp="datePublished" content={datePublished} />
                </p>
            )
        }

        return (
            <Layout>
                <article className="post-single" style={{paddingTop:'4rem'}} itemScope itemType="http://schema.org/Blog">
                    <Helmet>
                        <title>{`${post.frontmatter.title} | Code Bushi`}</title>
                        <meta name="author" content="Hunter Chang" />
                        <meta name="description" content={post.frontmatter.description} />
                        <link rel="amphtml" href={`https://codebushi.com/amp${post.frontmatter.path}`} />
                    </Helmet>

                    <div itemProp="blogPost" itemScope itemType="http://schema.org/BlogPosting">
                        <meta itemScope itemProp="mainEntityOfPage" itemType="https://schema.org/WebPage" itemID="https://google.com/article" />

                        <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                            <meta itemProp="name" content="Code Bushi" />
                            <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                                <meta itemProp="url" content="https://codebushi.com/codebushilogo.png" />
                                <meta itemProp="width" content="400" />
                                <meta itemProp="height" content="110" />
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">

                                    <h1 className="post-title h2" itemProp="headline">{post.frontmatter.title}</h1>

                                    {dateContent}

                                    <Img className="mb-5" sizes={post.frontmatter.image.childImageSharp.sizes} />
                                    <meta itemProp="image" content={'https://codebushi.com'+featuredImg} />

                                    {post.frontmatter.disclosure ? <p><em>(This post may contain affiliate links. Please read my <Link to="/disclosure">disclosure</Link> for more info)</em></p> : undefined}

                                    <div className="pb-4" itemProp="text" dangerouslySetInnerHTML={{ __html: post.html }} />

                                    <hr />

                                    <div className="d-flex justify-content-center">
                                        <FacebookShareButton url={shareUrl} quote={post.frontmatter.title} className="mr-3">
                                            <FacebookIcon size={32} round />
                                        </FacebookShareButton>
                                        <TwitterShareButton url={shareUrl} title={post.frontmatter.title} className="mr-3">
                                            <TwitterIcon size={32} round />
                                        </TwitterShareButton>
                                        <RedditShareButton url={shareUrl} title={post.frontmatter.title} windowWidth={660} windowHeight={460}>
                                            <RedditIcon size={32} round />
                                        </RedditShareButton>
                                    </div>

                                    <hr />

                                    <div className="mb-5 mt-5">
                                        <ReactDisqusComments
                                            shortname="hunter-chang"
                                            title={post.frontmatter.title}
                                            url={shareUrl}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div itemProp="author" itemScope itemType="http://schema.org/Person">
                            <meta itemProp="name" content="Hunter Chang" />
                        </div>
                    </div>
                </article>
            </Layout>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                dateModified(formatString: "MMMM DD, YYYY")
                path
                description
                disclosure
                image {
                    childImageSharp{
                        sizes(maxWidth: 920) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
            }
        }
    }
`