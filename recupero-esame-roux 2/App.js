import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import List from "./src/screens/List";
import Location from "./src/screens/Location";
import Episode from "./src/screens/Episode";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Episode" component={Episode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
