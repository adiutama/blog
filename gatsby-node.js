const path = require('path')

module.exports = {
  onCreateWebpackConfig ({ actions }) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        },
      },
    })
  },
}
