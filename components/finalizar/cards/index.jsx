import { Button, Image, StyleSheet,Clipboard, View, Text, ScrollView } from "react-native";


export default function CardsFinalizar({title,value,url}){
    return(
        <View style={styles.section}>
            <View style={{margin:10}} >
                <View style={{flexDirection:'colum', justifyContent:"space-around"}}>
                <Text style={{fontWeight:"bold"}}>{title}</Text>
                <Text style={{fontWeight:"bold"}}> R$: {value}</Text>
            </View>
                <Image  style={styles.imageProduct} source={{uri:url}}></Image>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    section:{
        textAlign:'center'
    },
    copy:{
        marginTop:400
    },
    image:{
        height: 250,
        width: 250,
        marginTop:50,
        alignSelf:'center'

    },
    imageProduct:{
        height: 200,
        width: 150,
        marginTop:20,
        borderRadius:20
    }
})