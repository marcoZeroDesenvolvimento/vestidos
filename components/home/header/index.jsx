import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useContext } from "react";
import MyContext from '../../../myContext'

export default function HeaderHome({props}){
    const { id,setId } = useContext(MyContext)
    return(
        <SafeAreaView style={{height:50,marginTop:50}}>
            <View style={styles.section}>
                    {id == 'undefined' ? (
                        <View style={{flexDirection:'row', justifyContent:'space-evenly',width:'100%'}}>
                            <Text style={{marginRight:100,textAlignVertical:'center'}}>Marco-0 Vestidos</Text>
                            <TouchableOpacity onPress={() => props.navigate('Login') }>
                                    <Icon name="login" size={30} color="black" style={styles.icon}/>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{flexDirection:'row', justifyContent:'space-evenly',width:'100%'}}>
                            <Text style={{marginRight:100,textAlignVertical:'center'}}>Nome da loja</Text>
                            <TouchableOpacity onPress={() => props.navigate('User') }>
                                <Icon name="user" size={30} color="black" style={styles.icon}/>
                            </TouchableOpacity>
                        </View>
                    )
                    }
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    section:{
       alignSelf:'flex-end',
       textAlignVertical:'center'
    },
    icon:{
        marginRight:25,
    }

  });