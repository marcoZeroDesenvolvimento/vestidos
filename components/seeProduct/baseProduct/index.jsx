import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

export default function BaseProduct({title,subtitle,value}){
    return(
        <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <Text>{subtitle}</Text>
            <Text>{value}</Text>
            <Link to="/finalizar">
                <Button title="Comprar">  </Button>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    section:{
        backgroundColor:"orange",
        height:'25%',
        width: '100%',
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
        textAlign:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:10
    },
    comprar:{
        borderColor:'orange',
        borderWidth:1,
        
    }
})