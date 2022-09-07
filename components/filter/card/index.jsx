import { useState } from "react";
import { Image, Text, View ,StyleSheet, ScrollView, TouchableOpacity, Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Card({datas,props,id, comparar}){
    const win = Dimensions.get('window');
    const ratio = win.width / 200;
   
    return(
        <ScrollView style={{borderTopWidth:0.3}}>
            <View style={styles.section}>
                <View style={styles.descption}>
                    <Text style={styles.title}> {datas.produto.name}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name="attach-money" size={16} color="grey"/>
                        <Text style={{fontSize:20,fontWeight:'300'}}>{datas.produto.value}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:17,marginRight:5}}>4.8</Text>
                        <Icon name="favorite" size={16} color="grey"/>
                    </View>
                </View>

            </View>
            <TouchableOpacity  onPress={() => props.navigate('Produto',{id:id}) }  key={datas.id}>
                <Image  style={{ borderRadius:10,width:win.width, height: 300 * ratio}} source={{uri:datas.produto.images[0]}}
            ></Image>
            </TouchableOpacity>

        </ScrollView>

    )
}
const styles  = StyleSheet.create ({
    section:{
        flexDirection:'column',
        alignItems:'center',
       
    },
    descption:{
        flexDirection:'column',
        justifyContent:'space-around',
        width:'100%',
        position: 'absolute'
    
    },
    title:{
        flexWrap:'nowrap',
        fontWeight:'400',
        fontSize:20,
        margin: 10,
    },
    
})