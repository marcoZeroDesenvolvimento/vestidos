import  Axios  from "axios";
import { Text } from "react-native";
import MyContext from '../../../myContext'
import React, { useContext, useEffect, useState } from 'react'


export default function Favoritar({Id}){
    return(
        <Text style={{textAlign:'center',
        paddingTop:5,
        fontWeight:'400',
        width:150,
        height: 30,
        borderRadius:20,
        backgroundColor:'#C0C0C0'
        }}>Favoritar </Text>
    )
}