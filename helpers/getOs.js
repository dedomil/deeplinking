module.exports = (useragent) => {
  if (/android/i.test(useragent)) {
    return "android";
  } else if (/iPad|iPhone|iPod/.test(useragent)) {
    return "ios";
  }
  return "web";
}