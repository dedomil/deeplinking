const getApp = require("../helpers/getApp.js");

module.exports = (url) => {
  let appDetails = getApp(url);
  let { host, pathname, search } = new URL(appDetails.url);
  let params = pathname.split("/").filter(e => !!e);
  let query, option, value;
  if (host == "chat.whatsapp.com") {
    query = "chat";
    option = "?code";
    value = `=${params[0]}` || "";
  } else if (host == "call.whatsapp.com") {
    query = "call";
    option = `/${params[0]}` || "voice";
    value = `/${params[1]}` || "";
  } else if (host == "api.whatsapp.com") {
    query = "send";
    option = `/${search}`;
    value = "";
  }
  return {
    appName: appDetails.name,
    intents: {
      android: `${appDetails.packages.ios}://${query}${option}${value}`,
      ios: `${appDetails.packages.ios}://${query}${option}${value}`,
      web: url
    }
  }
}
