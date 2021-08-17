import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@ui-kitten/components";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { BottomTabParamList } from "../types";
import HomeTab from "./HomeTab";
import SettingsTab from "./SettingsTab";
import StatsTab from "./StatsTab";

function TabBarIcon(props: { name: string; fill: string }) {
  return (
    <Icon width="24" height="24" style={{ marginBottom: -4 }} {...props} />
  );
}
const DimmedButton = (props: TouchableOpacity["props"]) => (
  <TouchableOpacity activeOpacity={0.6} {...props} />
);

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(): JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: "Home",
          tabBarButton: DimmedButton,
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name="home-outline" fill={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="StatsTab"
        component={StatsTab}
        options={{
          tabBarButton: DimmedButton,
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name="activity-outline" fill={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SettingsTab"
        component={SettingsTab}
        options={{
          tabBarButton: DimmedButton,
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name="person-outline" fill={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
