module.exports = {
	siteMetadata: {
		title: "dadJokes()"
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-plugin-styled-components"
		},
		"gatsby-plugin-sharp",
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
        trackingId: "UA-130195764-1",
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: ["/preview/**", "/do-not-track/me/too/"],
				// Enables Google Optimize using your container Id
				optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
				// Any additional create only fields (optional)
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: "example.com"
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "gatsby-starter-default",
				short_name: "starter",
				start_url: "/",
				background_color: "#44e3dc",
				theme_color: "#44e3dc",
				display: "minimal-ui",
				icon: "./public/icons/favicon-256.png" // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
