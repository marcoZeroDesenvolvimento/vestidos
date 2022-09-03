import {  useState } from "react";
import { Text, View,TextInput,StyleSheet,Button} from "react-native"
import { Link } from "react-router-native";
import { supabase } from '../../../supabase';
import MyContext from '../../../myContext'
import React, { useContext } from 'react'
export function Header(){
    const { id,setId } = useContext(MyContext)
    console.log(id)


    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    async function handleSignup() {
        const response = await supabase.auth.signIn({
            email: 'steniosousaf@gmail.com',
            password: '123123',
          })
          if(response.user == null){
              alert('usuário não encontrado')
          }else{
            alert('bem-vindo')
        }
        setId(response)
        
    }


    async function deslogar(){
        let data = await supabase.auth.signUp({
            email: 'steniosousaf@gmail.com',
            password: '123123'
          })
    }
return(
    <>
        <View style={styles.form}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={user}
                onChange={(e) => setUser(e.target.value)}
                /> 
            <Text>Password:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                secureTextEntry={true}
                
                />
        <Button 
            title='Login' 
            onPress={()=> handleSignup()}
            style={styles.button}
            color="orange"
        ></Button>
        <Button 
            title='deslogar' 
            onPress={()=> teste()}
            style={styles.button}
            color="orange"
        ></Button>
        <View style={{justifyContent:'space-around',display:'flex',flexDirection:'row'}}>
            <Link to="/cadastro">
                <Text style={styles.cadastro}> Realizar <Text style={{color:'orange'}}> cadastro |</Text></Text>
            </Link>
            <Link to="/">
                <Text style={styles.cadastro}> Acessar sem <Text style={{color:'orange'}}> cadastro </Text></Text>
            </Link>
        </View>
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
        // alignSelf:'left',
        // alignItems:'left',
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
