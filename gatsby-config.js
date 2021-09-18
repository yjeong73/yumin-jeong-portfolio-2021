module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Yumin Jeong Portfolio 2021",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
            {
              resolve: "gatsby-source-filesystem",
              options: {
                name: `projects`,
                path: `${__dirname}/projects`,
          },
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        "gatsby-plugin-anchor-links",
    ],
};
