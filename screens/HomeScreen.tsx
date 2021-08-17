import { Icon, Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { StyleSheet } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { View } from "../components/Themed";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default function HomeScreen(): JSX.Element {
  return (
    <Layout style={styles.container}>
      <Icon
        name="home-outline"
        fill="#d2d2d2"
        style={{ width: 32, height: 32 }}
      />
      <Text category="h1">Home</Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/HomeScreen.tsx" />
    </Layout>
  );
}
