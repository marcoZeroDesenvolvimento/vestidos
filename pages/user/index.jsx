import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { Link } from "react-router-native";
import Carrocel from "../../components/user/carrocelFavorite";
import MyContext from '../../myContext'

export default function User(){
    const { id,setId } = useContext(MyContext)
    const [data,setData] = useState([])

    async function getDatas(){
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
    useEffect(()=>{ getDatas()},[])
    return(
        <>
            <ScrollView horizontal={true}>
                {data.map((e)=>{
                    return(
                        <Carrocel url={e.url} key={e.id} title={e.title}/>
                    )
                })}
            </ScrollView>
            {/* <Link to="/">
                <Text>Home</Text>
            </Link> */}
        </>
    )
}