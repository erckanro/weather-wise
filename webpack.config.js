module.exports = {
  // other webpack configuration...

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ],
  },
};
