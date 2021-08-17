/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          HomeTab: {
            screens: {
              HomeScreen: "home",
            },
          },
          StatsTab: {
            screens: {
              StatsScreen: "stats",
            },
          },
          SettingsTab: {
            screens: {
              SettingsScreen: "settings",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
