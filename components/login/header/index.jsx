import {  useState } from "react";
import { Text, View,TextInput,StyleSheet,Button, TouchableOpacity} from "react-native"
import { supabase } from '../../../supabase';
import MyContext from '../../../myContext'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

export function Header({props}){
    const { id,setId } = useContext(MyContext)

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignup() {
        const response = await supabase.auth.signIn({
            email: user,
            password: password,
          })
          if(response.user == null){
              alert('usuário não encontrado')
              console.log(response.user)
              props.navigate('Login')
          }else{
            alert('bem-vindo')
            props.navigate('Home')
        }
        setId(response)
        
    }


return(
    <>
        <View style={styles.form}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={user}
                onChangeText={setUser}
                /> 
            <Text>Password:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                />
                <TouchableOpacity onPress={()=> handleSignup()}> 
                            <Text>Entrar</Text>
                </TouchableOpacity>
              
            <TouchableOpacity onPress={()=>props.navigate('Cadastro')}>
                <Text style={styles.cadastro}> Realizar <Text style={{color:'orange'}}> cadastro |</Text></Text>
            </TouchableOpacity>
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
