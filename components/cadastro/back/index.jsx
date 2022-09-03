import { useState } from "react";
import { Text, View,TextInput,StyleSheet,Button} from "react-native"
import { Link } from "react-router-native";

export default function Back({login}){

return(
    <>
        <View style={{justifyContent:'space-around',display:'flex',flexDirection:'row'}}>
            <Link to="/">
                <Text style={styles.cadastro}> Realizar <Text style={{color:'orange'}}> {login} |</Text></Text>
            </Link>
            <Link to="/home">
                <Text style={styles.cadastro}> Acessar sem <Text style={{color:'orange'}}> cadastro </Text></Text>
            </Link>
        </View>
    </>
    )
}
const styles = StyleSheet.create({
    form:{
        alignItems:'center',
        marginTop:80
    },
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
    button:{
       
    },
    cadastro:{
        fontWeight:'300',
        marginTop:80,
    }
  });