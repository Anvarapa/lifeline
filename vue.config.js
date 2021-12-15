module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/lifeline/'
      : '/'
  ,
  devServer:{
    proxy: 'https://mylifeline.tech'
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
};
