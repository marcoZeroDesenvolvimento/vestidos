import {  useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Card from "../../components/home/card";
import HeaderHome from "../../components/home/header";
import axios from "axios";
import Story from "../../components/home/story";
export default function Home({navigation}){
    const [data,setData] = useState([])  

    async function teste(){
        var {data} = await axios( {
            method: 'get',
            url: 'https://wxzkglnhkvutprxcnozq.supabase.co/rest/v1/moda?select=*',
            headers: { 
              'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4OTMzODAsImV4cCI6MTk3NzQ2OTM4MH0.xgBWurkKfUCNualBbQAfI3DFMuRdOWIfPUOfj2IFamw', 
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4OTMzODAsImV4cCI6MTk3NzQ2OTM4MH0.xgBWurkKfUCNualBbQAfI3DFMuRdOWIfPUOfj2IFamw'
        }})    
        setData(data) 
    }
    useEffect(() => {
        teste()
    },[]) 

    return(
        <ScrollView style={{flex:1}}>
            <HeaderHome props={navigation}/>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor:'#e8e7e8',paddingTop:10,paddingBottom:10}}>
            {data.map((e)=>{
                return(
                        <Story key={e.id} data={e.produto} props={navigation} images={e.produto.images[0]}/>
                    )
                })}
            </ScrollView>

            {data.map((e)=>{
                return(
                    <View style={{flexDirection:'column',marginBottom:30}} key={e.id}>
                        <Card datas={e.produto} id={e.id}props={navigation}/>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
   

})