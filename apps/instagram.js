const getApp = require("../helpers/getApp.js");

module.exports = (url) => {
  let appDetails = getApp(url);
  let urlWithoutHttp = appDetails.url.split("//")[1];
  let intent_url = urlWithoutHttp.endsWith("/") ? urlWithoutHttp.slice(0, -1) : urlWithoutHttp;
  return {
    appName: appDetails.name,
    intents: {
      android: `intent://${intent_url}#Intent;package=${appDetails.packages.android};scheme=https;end`,
      ios: `${appDetails.packages.ios}://${intent_url}`,
      web: url
    }
  }
}
