import getApp from "../helpers/getApp.js"

export default (url) => {
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