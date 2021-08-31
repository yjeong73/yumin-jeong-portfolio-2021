module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Testing Website",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
            {
              resolve: "gatsby-source-filesystem",
              options: {
                name: `blog`,
                path: `${__dirname}/blog`,
          },
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
            {
              resolve: "gatsby-plugin-anchor-links",
              options: {
                offset: -100
          }
      },
    ],
};
