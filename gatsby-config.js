module.exports = {
  siteMetadata: {
    title: `Adi Utama`,
    description: `Personal blog`,
    author: `@adiutama`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `adiutama`,
        short_name: `adiutama`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#c62641`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Domine:400,700`,
          `Josefin Sans:400,600,700`
        ]
      }
    }
  ],
}
