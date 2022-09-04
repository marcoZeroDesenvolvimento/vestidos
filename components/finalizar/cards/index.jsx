import { Button, Image, StyleSheet,Clipboard, View, Text, ScrollView } from "react-native";


export default function CardsFinalizar({title,value,url}){
    return(
        <View style={styles.section}>
            <View style={{margin:10}} >
                <View >
                        <Text style={{fontWeight:"bold"}}>{title}</Text>
                        <Text style={{fontWeight:"bold"}}> R$: {value}</Text>
                </View> 
                </View>
                <Image  style={styles.imageProduct} source={{uri:url}}></Image>
        </View>
    )
}
const styles = StyleSheet.create({
    section:{
        textAlign:'center',
        marginRight:10
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