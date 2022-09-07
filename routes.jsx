import React from "react";

import Login from "./pages/login";
import Cadastro from "./pages/Cadastro"
import Home from "./pages/home";
import SeeProduct from "./pages/seeProduct";
import Finalizar from "./pages/finalizar";
import User from "./pages/user";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Filter from "./pages/filter";

const Stack = createNativeStackNavigator();

function RoutesTeste() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
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
          name="Produto"
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
        <Stack.Screen
          name="Filter"
          component={Filter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RoutesTeste;