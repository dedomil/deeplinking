export default (url) => {
  let { hostname } = new URL(url);
  /** youtube */
  if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
    return {
      name: "youtube",
      packages: {
        android: "com.google.android.youtube",
        ios: "vnd.youtube"
      },
      url: url.replace("m.youtube.com", "youtube.com").replace("youtu.be", "youtube.com")
    }
  }
  /** instagram */
  if (hostname.includes("instagram.com")) {
    return {
      name: "instagram",
      packages: {
        android: "com.instagram.android",
        ios: "vnd.instagram"
      },
      url
    }
  }
  /** twitter */
  if (hostname.includes("twitter.com") || hostname.includes("twttr.com")) {
    return {
      name: "twitter",
      packages: {
        android: "com.twitter.android",
        ios: "twitter"
      },
      url: url.replace("twttr.com", "twitter.com")
    }
  }
  /** spotify */
  if (hostname.includes("spotify.com")) {
    return {
      name: "spotify",
      packages: {
        android: "com.spotify.music",
        ios: "spotify"
      },
      url
    }
  }
  return {
    name: "web",
    packages: {
      android: "",
      ios: ""
    },
    url
  }
}