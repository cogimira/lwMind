const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  // alias 配置
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
    // config.module.rules.delete("svg");
    // config.module
    //   .rule("svg-smart")
    //   .test(/\.svg$/)
    //   .include.add(resolve("src/assets/icons"))
    //   .end()
    //   .use("svg-sprite-loader")
    //   .loader("svg-sprite-loader")
    //   .options({
    //     symbolId: "[name]"
    //   });
  },

  // devServer: {
  //   // 设置代理
  //   proxy: {
  //     // "/": {
  //     //   target: "http://jiaoyan.testing.svc.k8s.bjt.hetao101.com/", // 域名
  //     //   ws: false, // 是否启用websockets
  //     //   changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //     //   pathRequiresRewrite: {
  //     //     "^/getgraph": "/getgraph",
  //     //     "^/getCypherResult": 'getCypherResult'
  //     //   }
  //     // },
  //     "/knowledgeadmin/teaching/knowledgeadmin/v1": {
  //       target: "https://console.testing6.hetao101.com/",
  //       ws: false,
  //       changOrigin: true,
  //       pathRequiresRewrite: {
  //         // "^/teaching/knowledgeadmin/v1": "/teaching/knowledgeadmin/v1",
  //         "^/knowledgeadmin/teaching/knowledgeadmin/v1":
  //           "/knowledgeadmin/teaching/knowledgeadmin/v1"
  //       }
  //     },
  //     "/knowledgeadminworkspace/teaching/knowledgeadmin/v1": {
  //       target: "https://console.testing6.hetao101.com/",
  //       ws: false,
  //       changOrigin: true,
  //       pathRequiresRewrite: {
  //         // "^/teaching/knowledgeadmin/v1": "/teaching/knowledgeadmin/v1",
  //         "^/knowledgeadminworkspace/teaching/knowledgeadmin/v1":
  //           "/knowledgeadminworkspace/teaching/knowledgeadmin/v1"
  //       }
  //     }
  //     ,
  //     "/knowledgeconsole/teaching/knowledgeconsole/v1" : {
  //       target: "https://console.testing6.hetao101.com",
  //       ws: false,
  //       changOrigin: true,
  //       pathRequiresRewrite: {
  //         "^/knowledgeconsole/teaching/knowledgeconsole/v1":
  //           "^knowledgeconsole/teaching/knowledgeconsole/v1"
  //       }
  //     }
  //   },
  //   overlay: {
  //     warnings: false,
  //     errors: true
  //   }
  // },

  configureWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      config.devtool = "source-map";
    }
  }
};
