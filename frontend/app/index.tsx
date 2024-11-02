// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsScreen from "./NewsScreen";
import DetailNews from "./DetailNews";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 22, fontWeight: "bold" },
        }}
        name="DetailNews"
        component={DetailNews}
      />
    </Stack.Navigator>
  );
}

export default App;
