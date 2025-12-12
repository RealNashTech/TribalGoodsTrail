import { ConfigContext, ExpoConfig } from "expo/config";

const androidAdMobAppId = process.env.EXPO_PUBLIC_ADMOB_APP_ID_ANDROID ?? "";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "TribalGoodsTrail",
  slug: "TribalGoodsTrail",
  version: "1.0.1",
  orientation: "default",
  icon: "./assets/images/tribalgoodstraillogo.png",
  scheme: "tribalgoodstrail",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,

  splash: {
    image: "./assets/images/realnashtechsplashicon.png",
    resizeMode: "contain",
    backgroundColor: "#02040A",
  },

  ios: {
    supportsTablet: true,
    infoPlist: {
      NSLocationWhenInUseUsageDescription:
        "Allow location so we can show Native-owned businesses near you and alert you when you're close.",
      NSLocationAlwaysUsageDescription:
        "Allow background location so we can notify you when you're near Native-owned businesses, even if the app is not open.",
      NSLocationAlwaysAndWhenInUseUsageDescription:
        "Allow location in the foreground and background to detect nearby Native-owned businesses.",
      UIBackgroundModes: ["location"],
    },
  },

  android: {
    package: "com.tribalgoodstrailapp",
    versionCode: 3,
    permissions: [
      "ACCESS_FINE_LOCATION",
      "ACCESS_COARSE_LOCATION",
      "ACCESS_BACKGROUND_LOCATION",
      "NOTIFICATIONS",
    ],
    adaptiveIcon: {
      foregroundImage: "./assets/images/tribalgoodstraillogo.png",
      backgroundColor: "#0D1440",
    },
    edgeToEdgeEnabled: true,

    // ⭐ KEEP MAPS WORKING
    config: {
      googleMaps: {
        apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
      },
    },
  },

  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },

  // ⭐⭐⭐ THIS IS REQUIRED FOR ADMOB TO WORK
  plugins: [
    "expo-router",
    [
      "react-native-google-mobile-ads",
      {
        androidAppId: androidAdMobAppId,
      },
    ],
  ],

  experiments: {
    typedRoutes: true,
  },

  extra: {
    router: {},
    eas: {
      projectId: "35b08edf-a5ac-4c27-821b-7c6bc75e6d47",
    },
  },
});
