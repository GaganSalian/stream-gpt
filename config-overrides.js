const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    zlib: require.resolve('browserify-zlib'),
    stream: require.resolve('stream-browserify'),
    path: require.resolve('path-browserify'),
    buffer: require.resolve('buffer/'),
    querystring: require.resolve('querystring-es3'),
    assert: require.resolve('assert/'),  // Add assert
    util: require.resolve('util/'),      // Add util
    fs: false                            // Ignore fs module (as it's a Node.js-only module)
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};
