/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};
const { parsed: myEnv } = require('dotenv').config();

module.exports = { ...nextConfig, env: { ...myEnv } };
