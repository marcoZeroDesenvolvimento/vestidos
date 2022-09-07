import {  useState } from "react";
import { Text, View,TextInput,StyleSheet, TouchableOpacity,Pressable,Modal} from "react-native"
import { supabase } from '../../../supabase';
import MyContext from '../../../myContext'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

export function Header({props}){
    const { id,setId } = useContext(MyContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [text,setText]=useState('Email ou senha inválidos')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignup() {
      
        const response = await supabase.auth.signIn({
            email: user,
            password: password,
          })
          if(response.user == null){
              setModalVisible(true)
              setText('Email ou senha inválidos')
            }else{
              setModalVisible(true)
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
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{text}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                        <Text style={styles.textStyle}>OK!</Text>
                        </Pressable>
                    </View>
                    </View>
                </Modal>
              
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });
