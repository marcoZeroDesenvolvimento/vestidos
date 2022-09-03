import { Button, ScrollView, StyleSheet, View } from "react-native";

export default function Filter(){
    return (
        <View horizontal={true} style={styles.filter}>
            {/* <Button title="vestido" color={"orange"} > </Button>
            <Button title="Moda Praia" color={"orange"}></Button>
            <Button title="Saias" color={"orange"}></Button> */}
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