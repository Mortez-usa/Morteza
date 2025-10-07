/** @type {import('next').NextConfig} */
const nextConfig = {

};

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'gwmwqolzgcnzeiklrvpn.supabase.co',
				pathname: '/storage/v1/object/public/**',
			},
		],
	},
};
