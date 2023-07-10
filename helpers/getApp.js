module.exports = (url) => {
  let { hostname } = new URL(url);
  /** youtube */
  if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
    return {
      name: "youtube",
      packages: {
        android: "com.google.android.youtube",
        ios: "vnd.youtube"
      },
      url: url.replace("m.youtube.com", "youtube.com").replace("youtu.be/", "youtube.com/watch?v=")
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
  /** snapchat */
  if (hostname.includes("snapchat.com")) {
    return {
      name: "snapchat",
      packages: {
        android: "com.snapchat.android",
        ios: "snapchat"
      },
      url
    }
  }
  /** telegram */
  if (hostname.includes("t.me") || hostname.includes("telegram.me") || hostname.includes("telegram.dog")) {
    return {
      name: "telegram",
      packages: {
        android: "org.telegram.messenger",
        ios: "tg"
      },
      url: url.replace("telegram.me", "t.me").replace("telegram.dog", "t.me")
    }
  }
  /** whatsapp */
  // TODO: wa.me links
  if (hostname.includes("whatsapp.com")) {
    return {
      name: "whatsapp",
      packages: {
        android: "com.whatsapp",
        ios: "whatsapp"
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