import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import StatsScreen from "../screens/StatsScreen";
import { StatsTabParamList } from "../types";

const StatsTabStack = createStackNavigator<StatsTabParamList>();

function StatsTab(): JSX.Element {
  return (
    <StatsTabStack.Navigator headerMode="none">
      <StatsTabStack.Screen
        name="StatsScreen"
        component={StatsScreen}
        options={{ headerTitle: "Stats" }}
      />
    </StatsTabStack.Navigator>
  );
}

export default StatsTab;
