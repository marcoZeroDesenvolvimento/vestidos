import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Story({data,props, images}){
  
    return(
        <TouchableOpacity onPress={()=> props.navigate('Filter',{id:data.class})}  style={{alignItems:'center'}}>
            <Image style={styles.image} source={{uri:images}}></Image>
            <Text style={{fontWeight:'300'}}>{data.class}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 80,
        width: 80,
        borderRadius:50,
        marginLeft:10,
        
    }
})