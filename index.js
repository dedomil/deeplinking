const apps = require("./apps/index.js");
const getApp = require("./helpers/getApp.js");
const getOs = require("./helpers/getOs.js");

const deeplink = (url, options) => {
  const { name: app } = getApp(url);
  if (Object.keys(apps).includes(app)) {
    return apps[app](url, options);
  }
}

module.exports = { deeplink, getApp, getOs }
