import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Card from "../../components/filter/card";
import { supabase } from "../../supabase";

export default function Filter({route,navigation}){
    const {id} = route.params;
    const [viewFilted,setViewFiltered] = useState([])
    const [realCard, setRealCard] = useState([])
    async function getFilter(){          
        let { data } = await supabase
        .from('moda')
        .select()
        setViewFiltered(data)
    }


    useEffect(()=>{getFilter()},[])
    return(
        <ScrollView>
           { viewFilted.map((e)=> {
                if(e.produto.class == id) {

                    return( 
                     <View style={{flexDirection:'column',marginBottom:30}} key={e.id}>
                         <Card key={e.id} id={e.id} datas={e} props={navigation} comparar={id}/> 
                     </View>    
                     )
                }
               })

           }
        </ScrollView>
    )
}