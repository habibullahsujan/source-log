/** @type {import('next').NextConfig} */




const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },

    ],
  },

};


export async function redirects() {
  return [
    {
      source: 'http://www.theblogsouce.com/',
      destination: 'https://www.theblogsouce.com/',
      permanent: true,
    },
    {
      source: 'http://theblogsouce.com/',
      destination: 'https://www.theblogsouce.com/',
      permanent: true,
    },
    {
      source: 'https://theblogsouce.com/',
      destination: 'https://www.theblogsouce.com/',
      permanent: true,
    },

  ];
}

export default nextConfig
