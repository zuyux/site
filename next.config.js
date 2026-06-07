/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// Allow loading images from the external IPFS host used in the project.
		domains: ["ipfs.io"],
		remotePatterns: [
			{ protocol: 'https', hostname: 'ipfs.io' },
		],
	},
}

module.exports = nextConfig
