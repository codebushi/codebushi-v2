module.exports = {
  siteMetadata: {
    siteUrl: `https://codebushi.com`,
    title: "Code Bushi | Web Development Resources, Trends, & Techniques",
    author: "Hunter Chang",
    description: "Code Bushi aims to provide web development resources, trends, & techniques to elevate your coding journey."
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/resources`,
        name: "resources",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 920,
              backgroundColor: 'transparent'
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-115990515-1'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Code Bushi`,
        short_name: `Code Bushi`,
        start_url: `/`,
        background_color: `#0f1621`,
        theme_color: `#f72060`,
        display: `minimal-ui`,
        icon: `src/assets/img/website-icon.png`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
