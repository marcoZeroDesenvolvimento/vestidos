import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Favoritos from "../../components/user/favoritos/index.";
import Perfil from "../../components/user/perfil";
import MyContext from '../../myContext'
import { supabase } from "../../supabase";
import 'react-native-url-polyfill/auto';

export default function User(){
    const { id,setId } = useContext(MyContext)
    const [favorites,setFavorites] = useState([])
    const [ imagesFavorite, setImagesFavorite] = useState([])
    const [teste, setTeste] = useState([])

    async function getFavorite(){
        let { data } = await supabase
        .from('user_favorite')
        .select()
        setImagesFavorite(data)

    }

    useEffect(()=>{ getFavorite()},[])
    return(
        <>
           <Perfil/>
           <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
            <Text style={{fontWeight:'bold',fontSize:17}}> Favoritos</Text>
            <Text style={{fontWeight:'300'}}>Click para retirar dos favoritos</Text>
           </View>
           <ScrollView horizontal={true}>
            {imagesFavorite.map((i)=>{
                if(i.idUser == id.session.user.id){
                    return(
                        <Favoritos data={i.dataCard} key={Math.random()}/>
                    )
                }  
                })
            }
            </ScrollView>
        </>
    )
}