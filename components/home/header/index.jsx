import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import { useContext } from "react";
import MyContext from '../../../myContext'

export default function HeaderHome({props}){
    const { id,setId } = useContext(MyContext)
    return(
        <View style={{height:200, backgroundColor:'orange',}}>
            <View style={styles.section}>
                <View style={styles.City} >
                    <Text >Chaoyang Joy City </Text>
                </View>
                <View>
                    {id == 'undefined' ? (
                        <TouchableOpacity onPress={() => props.navigate('Login') }>
                                   <Icon name="login" size={30} color="black" style={styles.icon}/>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => props.navigate('User') }>
                            <Icon name="user" size={30} color="black" style={styles.icon}/>
                        </TouchableOpacity>
                    )
                    }
                </View>
            </View>
            <View style={styles.location}>
                <IconLocation name="location" size={20} color="white" style={styles.local}/>
                <Text>2.6km</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    section:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    icon:{
        marginRight:30,
        marginTop:50
    },
    City:{
        marginTop:50,
        marginLeft:30,
        fontWeight:'bold',
        flexDirection:'row',
    },
    location:{
        flexDirection:'row',
        marginLeft:30,
    },
    local:{
        marginRight:5,
    }
   
  });