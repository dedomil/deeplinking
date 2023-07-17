const getApp = require("../helpers/getApp.js");

module.exports = (url, { fallbackUrl }) => {
  let appDetails = getApp(url);
  let { pathname } = new URL(appDetails.url);
  let params = pathname.split("/").filter(e => !!e);
  let query, value;
  if (params[0] == "pin") {
    query = "pin";
    value = params[1] || "";
  } else {
    query = "user";
    value = params[0] || "";
  }
  let urlWithoutHttp = appDetails.url.split("//")[1];
  let intent_url = urlWithoutHttp.endsWith("/") ? urlWithoutHttp.slice(0, -1) : urlWithoutHttp;
  return {
    appName: appDetails.name,
    intents: {
      android: `intent://${intent_url.replace(/^[^.]+\./g, "")}#Intent;${fallbackUrl ? `S.browser_fallback_url=${fallbackUrl};` : ""}package=${appDetails.packages.android};scheme=https;end`,
      ios: `${appDetails.packages.ios}://${query}/${value}`,
      web: url
    }
  }
}
