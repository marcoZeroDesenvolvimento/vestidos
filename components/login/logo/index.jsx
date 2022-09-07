import { Image, View,StyleSheet} from "react-native"

export default function Logo(){
    return(
        <View style={styles.backgroundImage}>
            <Image
                style={styles.logoHeader} 
                source={{uri:"https://png.pngtree.com/png-vector/20191206/ourlarge/pngtree-planet-jupiter-isolated-cartoon-illustration-png-image_2072943.jpg"}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    backgroundImage:{
        backgroundColor:'black',
        height:300,
        width: '100%',
        borderBottomLeftRadius:90,
    },
    logoHeader:{
        height: 120,
        width: 120,
        alignSelf:'center',
        borderRadius:70,
        marginTop:100,
        
    },
   
  });