import { Text,TextInput,StyleSheet} from "react-native"

export default function Input({nameFild}){
   
return(
    <>
        <Text style={styles.label}>{nameFild}</Text>
        <TextInput
            style={styles.input}
            value={''}
            /> 
    </>
    )
}
const styles = StyleSheet.create({

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
  
  });