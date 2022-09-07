import { Button, StyleSheet, Text, TouchableOpacity, View,Modal,Pressable} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Dolar from 'react-native-vector-icons/MaterialIcons';
import MyContext from '../../../myContext'
import { useContext, useEffect, useState } from 'react'
import 'react-native-url-polyfill/auto';
import { supabase } from "../../../supabase";
import Caracters from "../caracter";


export default function BaseProduct({props,data,CardId}){
    const { id,setId } = useContext(MyContext)
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.section}>
            <View style={styles.value}>
                <Text style={styles.title}>{data.name}</Text>
                <View style={{fontWeight:'bold',flexDirection:'row'}}>
                    <Dolar name="attach-money" size={20} color="grey"/>
                    <Text style={{fontWeight:'bold'}}>{data.value}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    value:{
        alignSelf:'flex-start',
        marginLeft:30,
        marginTop:10,
        backgroundColor:'white'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginBottom:5
    },
    comprar:{
        borderColor:'orange',
        borderWidth:1, 
    },
    options:{
        borderWidth:1,
        padding: 10,
        borderRadius:30,
        
    }
})