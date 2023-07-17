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
      links: {
        android: "https://play.google.com/store/apps/details?id=com.google.android.youtube",
        ios: "https://apps.apple.com/us/app/youtube-watch-listen-stream/id544007664"
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
      links: {
        android: "https://play.google.com/store/apps/details?id=com.instagram.android",
        ios: "https://apps.apple.com/in/app/instagram/id389801252"
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
      links: {
        android: "https://play.google.com/store/apps/details?id=com.twitter.android",
        ios: "https://apps.apple.com/us/app/twitter/id333903271"
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
      links: {
        android: "https://play.google.com/store/apps/details?id=com.spotify.music",
        ios: "https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580"
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
      links: {
        android: "https://play.google.com/store/apps/details?id=com.snapchat.android",
        ios: "https://apps.apple.com/us/app/snapchat/id447188370"
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
      links: {
        android: "https://play.google.com/store/apps/details?id=org.telegram.messenger",
        ios: "https://apps.apple.com/us/app/telegram-messenger/id686449807"
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
      links: {
        android: "https://play.google.com/store/apps/details?id=com.whatsapp",
        ios: "https://apps.apple.com/us/app/whatsapp-messenger/id310633997"
      },
      url
    }
  }
  /** pinterest */
  if (hostname.includes("pinterest.com")) {
    return {
      name: "pinterest",
      packages: {
        android: "com.pinterest",
        ios: "pinterest"
      },
      links: {
        android: "https://play.google.com/store/apps/details?id=com.pinterest",
        ios: "https://apps.apple.com/us/app/pinterest/id429047995"
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