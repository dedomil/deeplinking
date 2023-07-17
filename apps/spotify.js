const getApp = require("../helpers/getApp.js");

module.exports = (url, { fallbackUrl }) => {
  let appDetails = getApp(url);
  let { pathname } = new URL(appDetails.url);
  let query = pathname.split("/")[1];
  let value = pathname.split("/")[2];
  return {
    appName: appDetails.name,
    intents: {
      android: `${appDetails.packages.ios}://${query}/${value}`,
      ios: `${appDetails.packages.ios}://${query}/${value}`,
      web: url
    }
  }
}
