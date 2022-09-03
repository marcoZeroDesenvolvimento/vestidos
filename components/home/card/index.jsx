import { useEffect, useState } from "react";
import { Image, Text, View ,StyleSheet, Button, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Check from 'react-native-vector-icons/AntDesign';
import { supabase } from "../../../supabase";
import MyContext from '../../../myContext'
import React, { useContext } from 'react'
import axios, { Axios } from "axios";
import { Link } from "react-router-native";
import Favoritar from "../favoritar";

export default function Card(){
    const [datas,setData] = useState([])
    const { id,setId } = useContext(MyContext)
 
    async function handleAddTocar(e){
        if(id == 'oi'){
            alert("faça login para favoritar")
        } else{
             var config = await axios({
                 method: 'post',
                 url: 'https://wxzkglnhkvutprxcnozq.supabase.co/rest/v1/user_favorite',
                 headers: { 
                   'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4OTMzODAsImV4cCI6MTk3NzQ2OTM4MH0.xgBWurkKfUCNualBbQAfI3DFMuRdOWIfPUOfj2IFamw', 
                   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4OTMzODAsImV4cCI6MTk3NzQ2OTM4MH0.xgBWurkKfUCNualBbQAfI3DFMuRdOWIfPUOfj2IFamw', 
                   'Content-Type': 'application/json', 
                   'Prefer': 'return=representation'
                 },
                 data :{ user: id.user.id,id_card: e.id }
               });
             }
            } 
            async function teste(){
                var {data} = await axios( {
                    method: 'get',
                    url: 'https://wxzkglnhkvutprxcnozq.supabase.co/rest/v1/moda?select=*',
                    headers: { 
                      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4OTMzODAsImV4cCI6MTk3NzQ2OTM4MH0.xgBWurkKfUCNualBbQAfI3DFMuRdOWIfPUOfj2IFamw', 
                      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4OTMzODAsImV4cCI6MTk3NzQ2OTM4MH0.xgBWurkKfUCNualBbQAfI3DFMuRdOWIfPUOfj2IFamw'
                    }
                  })    
                  setData(data)      
   
           }
     useEffect(()=>{
        teste()
     },[])

    return(
        <ScrollView>
            {datas.map((e)=>{  
                return(

            <View style={styles.section} key={e.id}>
                <Link to={`/seeProduct/${e.id}`} key={e.id}>
                    <Image  style={styles.image} source={{uri:e.url}}
                ></Image>
                </Link>
                <View style={styles.descption}>
                    <Text style={styles.title}> {e.title}</Text>
                    <Text style={styles.subTitle}>{e.subtitle}</Text>
                    <View style={{marginTop:120, flexDirection:'row',justifyContent:'space-around'}} >
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <Icon name="attach-money" size={16} color="grey"/>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>{e.value}</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{fontSize:20}}>4.8</Text>
                            <Icon name="favorite" size={16} color="grey"/>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:'center',marginTop:20}}>
                       <Favoritar Id={e.id}/>
                        <Check style={styles.check} name="check" size={16} color="black" onPress={()=> handleAddTocar(e)}/>
                    </View>
                </View>

            </View>
                )
            })}
        </ScrollView>

    )
}
const styles  = StyleSheet.create ({
    section:{
        flexDirection:'row',
        margin:30,
       
    },
    image:{
        width: 200,
        borderRadius:10,
        height:300,
    },
    descption:{
        marginLeft:10,
        flexDirection:'column',
        width:150,
    
    },
    title:{
        flexWrap:'nowrap',
        fontWeight:'bold',
        marginTop:10,

    },
    subTitle:{
        fontWeight:'300',
        flexWrap:'nowrap'
    },
    carrinho:{
        
    },
    check:{
        left: -38,
       textAlign:'center',
        height: 40,
        width:40,
        backgroundColor:'orange',
        borderRadius:50,
        textAlignVertical:'center'
    }
})