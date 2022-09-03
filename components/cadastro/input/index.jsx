import { useState } from "react";
import { Text, View,TextInput,StyleSheet,Button} from "react-native"
import { Link } from "react-router-native";
import { supabase } from '../../../supabase';

export default function Input({nameFild}){
   
return(
    <>
        <Text style={styles.label}>{nameFild}</Text>
        <TextInput
            style={styles.input}
            value={''}
            /> 
    </>
    )
}
const styles = StyleSheet.create({

    label:{

        marginTop:5,
    },
    input: {
      height: 40,
      width: 300,
      borderWidth: 1,
      padding: 10,
      borderRadius:20,
      margin:10,
     
    },
  
  });