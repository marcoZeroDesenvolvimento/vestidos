import  Axios  from "axios";
import { useContext, useEffect, useState } from "react";
import MyContext from '../../myContext'
import { StyleSheet, Text, ScrollView, View, Button, TouchableOpacity } from "react-native";
import Card from "../../components/home/card";
import Carrinho from "../../components/home/carrinho";
import HeaderHome from "../../components/home/header";
import ViewHome from "../../components/home/ViewHome";
import { NavigationContainer } from '@react-navigation/native';
import { Link, Navigate } from "react-router-native";
export default function Home(){
    const [data,setData] = useState([])
    const [favorite, setFavorire] = useState()
    const { id,setId } = useContext(MyContext)
    

    return(
        <>
            <HeaderHome/>
            <ViewHome/>
            <Card/>
        </>
    )
}

const styles = StyleSheet.create({
   

})