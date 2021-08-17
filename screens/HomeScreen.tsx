import { Layout, Text } from "@ui-kitten/components";
import * as Location from "expo-location";
import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { Region } from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});

interface Location {
  lat: number;
  lng: number;
}

export default function HomeScreen(): JSX.Element {
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [location, setLocation] = React.useState<Location | null>(null);

  React.useEffect(() => {
    async function doAsync() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: currentLocation.coords.latitude,
        lng: currentLocation.coords.longitude,
      });
    }
    doAsync();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  }
  if (location) {
    text = "";
  }

  const onRegionChange = (region: Region) => {
    setLocation({ lat: region.latitude, lng: region.longitude });
  };

  return (
    <Layout style={styles.container}>
      <MapView style={styles.map} onRegionChange={onRegionChange} />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          paddingHorizontal: 32,
          paddingVertical: 14,
          backgroundColor: "white",
        }}
      >
        {!!text && (
          <Text appearance="hint" style={{ marginBottom: 14 }}>
            {text}
          </Text>
        )}
        {location && (
          <>
            <Text appearance="hint">Lat: {location.lat}</Text>
            <Text appearance="hint">Lng: {location.lng}</Text>
          </>
        )}
      </View>
    </Layout>
  );
}
