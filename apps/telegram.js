const getApp = require("../helpers/getApp.js");

module.exports = (url, { fallbackUrl }) => {
  let appDetails = getApp(url);
  let { pathname } = new URL(appDetails.url);
  let params = pathname.split("/").filter(e => !!e);
  let query, option, value;
  if (params[0] == "joinchat") {
    query = "join";
    option = "invite";
    value = params[1] || "";
  } else if (params[0] == "addstickers") {
    query = "addstickers";
    option = "set";
    value = params[1] || "";
  } else if (params[0] == "addemoji") {
    query = "addemoji";
    option = "set";
    value = params[1] || "";
  } else {
    query = "resolve";
    option = "domain";
    value = params[0] || "";
  }
  return {
    appName: appDetails.name,
    intents: {
      android: `${appDetails.packages.ios}://${query}?${option}=${value}`,
      ios: `${appDetails.packages.ios}://${query}?${option}=${value}`,
      web: url
    }
  }
}
