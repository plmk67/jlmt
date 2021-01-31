module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "wGmQXQsbZ71BWCiBUsCsYAzRtcZ_OMG_KFXBCX61myA",
        spaceId: "y8xs8bpyk93r",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
