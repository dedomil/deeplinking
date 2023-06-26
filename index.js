const apps = require("./apps/index.js");
const getApp = require("./helpers/getApp.js");
const getOs = require("./helpers/getOs.js");

const deeplink = (url) => {
  const { name: app } = getApp(url);
  if (Object.keys(apps).includes(app)) {
    return apps[app](url);
  }
}

module.exports = { deeplink, getApp, getOs }
