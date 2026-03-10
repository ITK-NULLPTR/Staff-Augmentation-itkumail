 /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      { source: '/faq', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/portfolio', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/our-teams', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/index-four', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/index-three', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/project-single', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/service-single', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/our-services', destination: 'https://itkumail.com/our-news/', permanent: true },
      // { source: '/index-two', destination: 'https://itkumail.com/our-news/', permanent: true },
      // { source: '/index-light', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/blog', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/about-us', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/our-story', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/blog-single', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/contact-us', destination: 'https://itkumail.com/our-news/', permanent: true },
      // { source: '/index-three-light', destination: 'https://itkumail.com/our-news/', permanent: true },
      // { source: '/index-five-light', destination: 'https://itkumail.com/our-news/', permanent: true },
      // { source: '/index-four-light', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/team-single', destination: 'https://itkumail.com/our-news/', permanent: true },
      // { source: '/index-five', destination: 'https://itkumail.com/our-news/', permanent: true },
      // { source: '/index-two-light', destination: 'https://itkumail.com/our-news/', permanent: true },
      { source: '/client-feedback', destination: 'https://itkumail.com/our-news/', permanent: true },
      // Catch-all: har remaining page bhi redirect hoga
      { source: '/:path*', destination: 'https://itkumail.com/our-news/', permanent: true },
    ];
  },
}

module.exports = nextConfig