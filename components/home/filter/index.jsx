import { StyleSheet, View } from "react-native";

export default function Filter(){
    return (
        <View horizontal={true} style={styles.filter}>
        </View>
    )
}

const styles = StyleSheet.create({
    filter:{
        flexDirection:'row',
        justifyContent:'space-around',
        height: 50
    }
})