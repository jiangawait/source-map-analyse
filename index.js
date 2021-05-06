'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/source-map-analysis.cjs.min.js')
} else {
  module.exports = require('./dist/source-map-analysis.cjs.js')
}

module.exports.default = module.exports
