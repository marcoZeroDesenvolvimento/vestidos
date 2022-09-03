import Axios from "axios";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useParams } from "react-router-native";
import HeaderHome from "../../components/home/header";
import ViewHome from "../../components/home/ViewHome";
import BaseProduct from "../../components/seeProduct/baseProduct";

export default function SeeProduct(){
    const {id} = useParams()
    const [dataSelect, setDataSelect] = useState('')
    async function popularProduct(){
        const {data} = await Axios({
            method: 'get',
            url: 'https://wxzkglnhkvutprxcnozq.supabase.co/rest/v1/moda?select=*',
            headers: { 
              'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4OTMzODAsImV4cCI6MTk3NzQ2OTM4MH0.xgBWurkKfUCNualBbQAfI3DFMuRdOWIfPUOfj2IFamw', 
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4OTMzODAsImV4cCI6MTk3NzQ2OTM4MH0.xgBWurkKfUCNualBbQAfI3DFMuRdOWIfPUOfj2IFamw'
            }
          });
        data.map((e) =>{
            if(e.id == id) {
                setDataSelect(e)
            }
        })
    }
    useEffect(()=>{popularProduct()},[])
    return(
        <>
            <HeaderHome/>
                <ViewHome/>
            <View style={styles.section}>
                <Image style={styles.image}source={{uri:dataSelect.url}}></Image>
            </View>
            <BaseProduct title={dataSelect.title} subtitle={dataSelect.subtitle} value={dataSelect.value}/>
        </>
    )
}

const styles = StyleSheet.create({
    section:{
        alignItems:'center'
    },
    image:{
        height: 400,
        width: 280
    }
})