import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { HomeTabParamList } from "../types";

const HomeTabStack = createStackNavigator<HomeTabParamList>();

function HomeTab(): JSX.Element {
  return (
    <HomeTabStack.Navigator headerMode="none">
      <HomeTabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
    </HomeTabStack.Navigator>
  );
}

export default HomeTab;
