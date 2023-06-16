import apps from "../apps/index.js";
import getApp from "../helpers/getApp.js";

const deeplink = (url) => {
  const { name: app } = getApp(url);
  if (Object.keys(apps).includes(app)) {
    return apps[app](url);
  }
}

export default { deeplink, getApp }
