import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { home } from "./components/home";
import { todoDetails } from "./components/todoDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={home}
          options={{
            title: "TODO APP",
          }}
        />
        <Stack.Screen
          name="todoDetails"
          component={todoDetails}
          options={{
            title: "TODO Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
