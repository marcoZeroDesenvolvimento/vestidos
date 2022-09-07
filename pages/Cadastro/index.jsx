import { useState } from "react";
import { Button, View ,StyleSheet,TextInput,Text, Modal, Pressable }from "react-native"
import Back from "../../components/cadastro/back";
import Logo from "../../components/login/logo"
import { supabase } from "../../supabase";

export default function Cadastro({navigation}){
    const [email,setEmail] = useState("")
    const [ password,setPassword] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText]= useState('sem texto')
    async function setCadastro() {
        let response = await supabase.auth.signUp({
            email: email,
            password: password
          })
        setModalVisible(true)
        setText(response.error.message)
       
    }

    return(
        <View>
            <Logo/>
            <View style={styles.form}>
                <View>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    /> 
                </View>
                <View>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    /> 
                </View>
                <Button 
                    title={"cadastrar"}
                    color="orange"
                    onPress={()=> setCadastro()}
                ></Button>
                <Back login={"login"} props={navigation}/>
            </View>
        <View>

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
                    <Text style={styles.textStyle}>Ok!</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
        </View>

        </View>
    )
}
const styles = StyleSheet.create({
   form:{
    alignItems:'center',
    textAlign:'center',
 
    marginTop:40
   },  label:{

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
 