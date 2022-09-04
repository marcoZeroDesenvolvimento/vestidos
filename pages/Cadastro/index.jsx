import { useState } from "react";
import { Button, View ,StyleSheet,TextInput,Text }from "react-native"
import Back from "../../components/cadastro/back";
import Logo from "../../components/login/logo"
import { supabase } from "../../supabase";

export default function Cadastro({navigation}){
    const [email,setEmail] = useState("")
    const [ password,setPassword] = useState("")

    async function setCadastro() {
        let response = await supabase.auth.signUp({
            email: email,
            password: password
          })
        alert(response.error.message)
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
                        onChange={(e) => setEmail(e.target.value)}
                    /> 
                </View>
                <View>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

        </View>
    )
}
const styles = StyleSheet.create({
   form:{
    alignItems:'center',
    textAlign:'center',
    width:"100%",
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
});
 