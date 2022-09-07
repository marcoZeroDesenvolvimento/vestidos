import { Text } from "react-native";

export default function Caracters({data}){
    return(
        <Text style={{paddingLeft:10,paddingBottom:10,paddingRight:20, borderRadius:50}}> {data} </Text>
    )
}