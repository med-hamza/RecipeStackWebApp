module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        // Add file-loader rule for images
        webpackConfig.module.rules.push({
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        });
  
        return webpackConfig;
      },
    },
  };