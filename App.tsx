import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import CartScreen from "./screens/CartScreen";
import PreparingSplashScreen from "./screens/PreparingSplashScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
        <Stack.Screen name="Cart" component={CartScreen}
          options={{presentation:'modal', headerShown: false }}
        />
        <Stack.Screen name="PreparingScreen" component={PreparingSplashScreen}
          options={{presentation:'fullScreenModal', headerShown:false}}
        />
        <Stack.Screen name="Delivery" component={DeliveryScreen}
         options={{presentation:'fullScreenModal', headerShown: false}}
        />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}
