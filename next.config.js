/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: false,
}

module.exports = nextConfig 

const fs = require('fs');
module.exports = {
  serverRuntimeConfig: {
      secret: 'd41e70e6-d71f-41e4-b44a-6747e43519fd'
  },
  publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'https://zde4h.sse.codesandbox.io/api' // development api
          : 'https://zde4h.sse.codesandbox.io/api' // production api
  },
  webpack: (config, { isServer }) => {
      if (isServer) {
          // reset users json on codesandbox every 10 minutes because 
          // the same json data is viewed by all users
          setInterval(() => {
              const defaultUsers = [];
              fs.writeFileSync('Login/data/users.json', JSON.stringify(defaultUsers, null, 4));
              console.log('users reset to default in next.config.js');
          }, 10 * 60 * 1000);
      }

      return config;
  }
}
