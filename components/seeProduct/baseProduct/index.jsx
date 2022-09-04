import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Dolar from 'react-native-vector-icons/MaterialIcons';
import MyContext from '../../../myContext'
import { useContext } from 'react'
import axios from "axios";


export default function BaseProduct({title,subtitle,value,url,props}){

    const { id,setId } = useContext(MyContext)
 
    async function handleAddTocar(){
        if(id == 'oi'){
            alert("faça login para favoritar")
        } else {
            var config = await axios({
                method: 'post',
                url: 'https://wxzkglnhkvutprxcnozq.supabase.co/rest/v1/user_favorite',
                headers: { 
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4OTMzODAsImV4cCI6MTk3NzQ2OTM4MH0.xgBWurkKfUCNualBbQAfI3DFMuRdOWIfPUOfj2IFamw', 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4emtnbG5oa3Z1dHByeGNub3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4OTMzODAsImV4cCI6MTk3NzQ2OTM4MH0.xgBWurkKfUCNualBbQAfI3DFMuRdOWIfPUOfj2IFamw', 
                    'Content-Type': 'application/json', 
                    'Prefer': 'return=representation'
                },
                data :{ user: id.user.id,id_card: url, value: value, title: title}
            });
        }
        console.log(url)
    }    




    return(
        <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            <Text>{subtitle}</Text>
            <View style={{fontWeight:'bold',marginTop:20}}>
                <Dolar name="attach-money" size={20} color="grey"/>
                <Text style={{fontWeight:'bold'}}><Text>R$:</Text>{value}</Text>
            </View>
            {id == 'undefined' ? (
                 <View style={{flexDirection:'row',justifyContent:'space-around',width:"100%"}}>
                 <TouchableOpacity  onPress={()=> alert("faça login")}>
                     <Icon name="shopping-cart" size={15}/>
                     <Text> Add ao carrinho</Text>
                 </TouchableOpacity>
                 <TouchableOpacity  onPress={()=> alert("faça login")}>
                         <View>
                             <Icon name="credit-card" size={15}/>
                             <Text> Comprar</Text>
                         </View>
                 </TouchableOpacity>
             </View>
            ):(
                <View style={{flexDirection:'row',justifyContent:'space-around',width:"100%"}}>
                    <TouchableOpacity  onPress={()=>handleAddTocar()}>
                        <Icon name="shopping-cart" size={15}/>
                        <Text> Add ao carrinho</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>console.log(id)}>
                        <TouchableOpacity onPress={()=> props.navigate('Finalizar')} >
                            <View>
                                <Icon name="credit-card" size={15}/>
                                <Text> Comprar</Text>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    section:{
        backgroundColor:"orange",
        height:'25%',
        width: '100%',
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
        textAlign:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:10
    },
    comprar:{
        borderColor:'orange',
        borderWidth:1,
        
    }
})