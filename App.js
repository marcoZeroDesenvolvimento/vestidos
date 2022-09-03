import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import RoutesTeste from './routes'; 

import MyContext from './myContext';
import { useState } from 'react';
export default function App() {
  const [id, setId] = useState('undefined')
  return (
    <MyContext.Provider value={{id,setId}}>
      <RoutesTeste/>
      <StatusBar style="auto" /> 
    </MyContext.Provider>
  );
}

