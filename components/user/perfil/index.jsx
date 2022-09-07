import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
export default function Perfil(){
    return(
        <View style={styles.section}>
            <Icon style={styles.perfil}name="user"size={120}></Icon>
            <Text style={{fontWeight:'bold', fontSize:20,marginTop:20}}>Nome do Usuário</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    section:{
        alignItems:'center',
    },
    perfil:{
        marginTop:40,
        backgroundColor:'#d4d4d4',
        padding: 40,
        borderRadius:100,
    }
})