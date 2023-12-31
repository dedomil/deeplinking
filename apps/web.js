const getApp = require("../helpers/getApp.js");

module.exports = (url, { fallbackUrl }) => {
  let appDetails = getApp(url);
  return {
    appName: appDetails.name,
    intents: {
      android: appDetails.url,
      ios: appDetails.url,
      web: appDetails.url
    }
  }
}