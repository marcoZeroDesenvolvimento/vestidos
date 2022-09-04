import axios from "axios";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { supabase } from "../../../supabase";

export default function Carrocel({url,title}){

    async function sair(){   
        let { data } = await supabase.auth.signOut()
        console.log(error)
      }
    return(
        <View>
            <Image style={styles.image} source={{uri:url}}></Image>
            <TouchableOpacity onPress={()=> sair()}> 
                            <Text>sair</Text>
                </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        height: 80,
        width: 80,
        borderRadius:10,marginRight:5,
    }
})