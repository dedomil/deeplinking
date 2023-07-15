const getApp = require("../helpers/getApp.js");

module.exports = (url, { fallbackUrl }) => {
  let appDetails = getApp(url);
  let { pathname } = new URL(appDetails.url);
  let query = pathname.split("/")[1];
  let value = pathname.split("/")[2];
  return {
    appName: appDetails.name,
    intents: {
      android: `spotify://${query}/${value}`,
      ios: `spotify://${query}/${value}`,
      web: url
    }
  }
}
