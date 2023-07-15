const getApp = require("../helpers/getApp.js");

module.exports = (url, { fallbackUrl }) => {
  let appDetails = getApp(url);
  let { pathname, searchParams } = new URL(appDetails.url);
  let urlWithoutHttp = appDetails.url.split("//")[1];
  let intent_url_android = urlWithoutHttp.endsWith("/") ? urlWithoutHttp.slice(0, -1) : urlWithoutHttp;
  let intent_url_ios = "timeline"; // if nothing matches show the timeline
  console.log(pathname);
  if (pathname.includes("/status/")) {
    let id = pathname.split("/status/")[1];
    intent_url_ios = `status?id=${id}`
  } else if (pathname.includes("/search")) {
    let params = new URLSearchParams(searchParams);
    intent_url_ios = `search?query=${params.get("q")}`;
  }
  return {
    appName: appDetails.name,
    intents: {
      android: `intent://${intent_url_android}#Intent;${fallbackUrl ? `S.browser_fallback_url=${fallbackUrl};` : ""}package=${appDetails.packages.android};scheme=https;end`,
      ios: `${appDetails.packages.ios}://${intent_url_ios}`,
      web: url
    }
  }
}
