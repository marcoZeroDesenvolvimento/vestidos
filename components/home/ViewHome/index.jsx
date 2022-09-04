import { StyleSheet, View } from "react-native";
import Filter from "../filter";

export default function ViewHome() {
    return (
        <View style={styles.section}>
            <View style={styles.limited}>
                <Filter/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    section:{
        position:'absolute',
        backgroundColor:'white',
        width:'100%',
        height:'auto',
        marginTop:125,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    limited:{
        margin: 20
    }
   
  });