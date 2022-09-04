import React from "react";

import { NativeRouter, Route ,Routes} from "react-router-native";

import Login from "./pages/login";
import Cadastro from "./pages/Cadastro"
import Home from "./pages/home";
import SeeProduct from "./pages/seeProduct";
import Finalizar from "./pages/finalizar";
import User from "./pages/user";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RoutesTeste() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        />
        <Stack.Screen
          name="SeeProduct"
          options={{id:99999}}
          component={SeeProduct}
        />
        <Stack.Screen
          name="Finalizar"
          component={Finalizar}
        />
        <Stack.Screen
          name="User"
          component={User}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RoutesTeste;