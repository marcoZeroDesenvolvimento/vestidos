import Axios from "axios";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {  useParams } from "react-router-native";
import HeaderHome from "../../components/home/header";
import ViewHome from "../../components/home/ViewHome";
import BaseProduct from "../../components/seeProduct/baseProduct";
export default function SeeProduct({navigation,route}){
   const {id} = route.params;
    console.log(id)
    const [dataSelect, setDataSelect] = useState([])
    const [configProduct, setConfigProduct] = useState('oi')
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
                setConfigProduct(e)
                let x = [e.url, e.url2,e.url3,e.url4,e.url5]
                setDataSelect(x)
            }
        })
    }

    useEffect(()=>{popularProduct()},[])
    return(
        <>
            <HeaderHome props={navigation}/>
            <ViewHome/>
            <ScrollView horizontal={true} style={styles.section}>
            {dataSelect.map((e) =>{
                return(                    
                    <Image key={e} style={styles.image} source={{uri:e}}></Image>
                )
            })}
            </ScrollView>
            <BaseProduct props={navigation} title={configProduct.title} subtitle={configProduct.subtitle} value={configProduct.value} url={configProduct.url}/>
        </>
    )
}

const styles = StyleSheet.create({
    section:{
        width:'auto'
    },
    image:{
        height: 500,
        width: 300
    }
})