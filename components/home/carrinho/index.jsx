import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Carrinho(){
    return(
        <View style={styles.section}>
            <View style={styles.pay}>
                <View style={{flexDirection:"row"}}>
                    <Icon name="attach-money" size={16} color="grey"/>
                    <Text>16</Text>
                </View>
                <View>
                    <Text style={styles.buy}> Pay</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    section:{
        bottom: 10,
        height:50,
        width:'90%',
        marginLeft:"5%",
        backgroundColor:"orange",
        borderRadius:30,
    },
    pay:{
        flexDirection:'row',
        justifyContent:'space-around',
        textAlignVertical:"center"
    },
    buy:{
        fontWeight:"bold",
        color: 'white',
        
    }
})