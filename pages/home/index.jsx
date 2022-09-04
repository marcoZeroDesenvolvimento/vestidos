import {  useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Card from "../../components/home/card";
import HeaderHome from "../../components/home/header";
import ViewHome from "../../components/home/ViewHome";
import axios from "axios";
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
        <View style={{flex:1}}>
            <HeaderHome props={navigation} />
            <ViewHome/>
            <Card datas={data} props={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
   

})