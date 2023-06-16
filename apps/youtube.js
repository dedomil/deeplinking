import getApp from "../helpers/getApp.js"

export default (url) => {
  let appDetails = getApp(url);
  let intent_url = (appDetails.url.split("//")[1]).endsWith("/") ? (appDetails.url.split("//")[1]) : `${(appDetails.url.split("//")[1])}/`;
  return {
    appName: appDetails.name,
    intents: {
      android: `intent://${intent_url}#Intent;package=${appDetails.packages.android};scheme=https;end`,
      ios: `${appDetails.packages.ios}://${intent_url}`,
      web: url
    }
  }
}