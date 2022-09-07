import axios from "axios";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Favoritos({data}){
 
  
    async function handleRemove(){
        var config = await axios({
            method: 'delete',
            url: `https://wxzkglnhkvutprxcnozq.supabase.co/rest/v1/user_favorite?dataCard=eq.${data}`,
            headers: { 
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4OTMzODAsImV4cCI6MTk3NzQ2OTM4MH0.xgBWurkKfUCNualBbQAfI3DFMuRdOWIfPUOfj2IFamw', 
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4OTMzODAsImV4cCI6MTk3NzQ2OTM4MH0.xgBWurkKfUCNualBbQAfI3DFMuRdOWIfPUOfj2IFamw'
            }
        });
    }

    return(
        <TouchableOpacity onPress={()=>{ handleRemove() }}>
            <Image  style={styles.image} source={{uri:data}}></Image>
        </TouchableOpacity>
    
    )
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width: 150,
        marginLeft:10,
        borderRadius:10
    }
})