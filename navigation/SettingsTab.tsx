import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import SettingsScreen from "../screens/SettingsScreen";
import { SettingsTabParamList } from "../types";

const SettingsTabStack = createStackNavigator<SettingsTabParamList>();

function SettingsTab(): JSX.Element {
  return (
    <SettingsTabStack.Navigator headerMode="none">
      <SettingsTabStack.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{ headerTitle: "Settings" }}
      />
    </SettingsTabStack.Navigator>
  );
}

export default SettingsTab;
