'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"/api"',
  BASE_URL_WH: '"/api/wh"',
  DOWNLOAD_URL: '"/api/download"',
  PROCESS_KEY: '"process"',
  PROCESS_ID: '"process:7:22508"'
})
