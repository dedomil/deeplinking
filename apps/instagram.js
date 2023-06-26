const getApp = require("../helpers/getApp.js");

module.exports = (url) => {
  let appDetails = getApp(url);
  let intent_url = appDetails.url.split("//")[1];
  return {
    appName: appDetails.name,
    intents: {
      android: `intent://${intent_url}#Intent;package=${appDetails.packages.android};scheme=https;end`,
      ios: `${appDetails.packages.ios}://${intent_url}`,
      web: url
    }
  }
}
