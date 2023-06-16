import getApp from "../helpers/getApp.js"

export default (url) => {
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
