import { Button, StyleSheet, Text, View,RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import { Link } from "react-router-native";
import { useContext, useEffect, useState } from "react";
import MyContext from '../../../myContext'
export default function HeaderHome(){
    const { id,setId } = useContext(MyContext)
    console.log(id)
    return(
        <View style={{height:200, backgroundColor:'orange',}}>
            <View style={styles.section}>
                <View style={styles.City} >
                    <Text >Chaoyang Joy City </Text>
                </View>
                <View>
                    {id == 'undefined' ? (
                        <Link to="/login">
                                   <Icon name="login" size={30} color="black" style={styles.icon}/>
                              </Link>
                    ) : (
                        <Link to="/login">
                            <Icon name="user" size={30} color="black" style={styles.icon}/>
                        </Link>
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