const withMDX = require('@next/mdx')()
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    //Next.js 可以静态类型链接，以防止使用 next/link 时出现错别字和其他错误，提高页面之间导航时的类型安全性
    // typedRoutes: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

module.exports = withMDX(nextConfig);
