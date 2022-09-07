import { Text, View,StyleSheet, TouchableOpacity} from "react-native"

export default function Back({login,props}){

return(
    <>
        <View style={{justifyContent:'space-around',display:'flex',flexDirection:'row'}}>
            <TouchableOpacity onPress={()=> props.navigate('Login')}>
                <Text style={styles.cadastro}> Realizar <Text style={{color:'orange'}}> {login} |</Text></Text>
            </TouchableOpacity>
        </View>
    </>
    )
}
const styles = StyleSheet.create({
    form:{
        alignItems:'center',
        marginTop:80
    },
    label:{
        marginTop:5,
    },
    input: {
      height: 40,
      width: 300,
      borderWidth: 1,
      padding: 10,
      borderRadius:20,
      margin:10,
     
    },
    button:{
       
    },
    cadastro:{
        fontWeight:'300',
        marginTop:80,
    }
  });