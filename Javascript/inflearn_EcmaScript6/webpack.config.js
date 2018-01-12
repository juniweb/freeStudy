module.exports ={
  entry: {
    entry: './13_module/entry.js'
  },
  output: {
    filename: './13_module/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modulse/,
        loader: 'babel-loader',
        options: {
          presets: [[
            'env', {
              target: {
                browsers: ['last 2 versions']
              }
            }
          ]]
        }
      }
    ]
  }
};