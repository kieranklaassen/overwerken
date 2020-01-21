require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: `Overwerken`,
    description: `Podcast: Overwerken ontmoet iedere aflevering een van de 9 miljoen werkende Nederlanders. Waarom diep doen als het ook oppervlakkig kan? Een geraffineerd evenwicht tussen non-journalistiek en non-sense.`,
    siteUrl: process.env.SITE_URL,
    startUrl: `/podcast`,
    copyright: `© YYYY Overwerken. All rights reserved.`,
    icon: `src/images/icon.png`,
    color: `#AC1563`,
    menuLinks: [
      // {
      //   name: `Home`,
      //   link: `/`
      // },
      // {
      //   name: `Blog`,
      //   link: `/blog`
      // },
      {
        name: `Podcast`,
        link: `/podcast`
      }
      // {
      //   name: `Porfolio`,
      //   link: `/portfolio`
      // },
      // {
      //   name: `Photography`,
      //   link: `/photography`
      // }
    ],
    socialLinks: [
      {
        name: `Instagram`,
        url: `https://www.instagram.com/overwerken/`,
        icon: `instagram`
      },
      {
        name: `Soundcloud`,
        url: `https://soundcloud.com/overwerken`,
        icon: `youtube`
      }
    ]
  },
  plugins: [
    // This is a list of all themes that this starter is using.
    // To disable a theme, remove it here and run `yarn remove @arshad/gatsby-theme-NAME`.
    `@arshad/gatsby-theme-blog-core`,
    `@arshad/gatsby-theme-page-core`,
    `@arshad/gatsby-theme-portfolio-core`,
    `@arshad/gatsby-theme-photo-core`,
    {
      resolve: `@arshad/gatsby-theme-podcast-core`,
      options: {
        feedUrl: `http://feeds.soundcloud.com/users/soundcloud:users:589671126/sounds.rss`,
        podcast: {
          name: `Overwerken Podcast`,
          description: `Overwerken ontmoet iedere aflevering een van de 9 miljoen werkende Nederlanders. Waarom diep doen als het ook oppervlakkig kan? Een geraffineerd evenwicht tussen non-journalistiek en non-sense.`,
          image: `assets/images/podcast.png`,
          social: [
            {
              name: `Apple Podcast`,
              url: `https://podcasts.apple.com/us/podcast/id1454167016`
            },
            {
              name: `Spotify Podcast`,
              url: "https://open.spotify.com/show/4NNG8myXw15eq8LHDGaeQp"
            },
            {
              name: `Google Podcast`,
              url: `https://www.google.com/podcasts?feed=aHR0cDovL2ZlZWRzLnNvdW5kY2xvdWQuY29tL3VzZXJzL3NvdW5kY2xvdWQ6dXNlcnM6NTg5NjcxMTI2L3NvdW5kcy5yc3M%3D`
            }
          ]
        }
      }
    },
    `@arshad/gatsby-theme-phoenix`
  ]
};
