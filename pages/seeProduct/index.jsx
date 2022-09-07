import Axios from "axios";
import { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BaseProduct from "../../components/seeProduct/baseProduct";
import Buy from "../../components/seeProduct/buy";
import Caracters from "../../components/seeProduct/caracter";
import Colors from "../../components/seeProduct/caracter/colors";


export default function SeeProduct({navigation,route}){
    const win = Dimensions.get('window');
    const ratio = win.width / 200;
    const {id} = route.params;
    const [dataSelect, setDataSelect] = useState([])
    const [configProduct, setConfigProduct] = useState([])
    const [ size, setSize] = useState([])
    const [colors, setColors] = useState([])


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
                setDataSelect(e.produto)
                setConfigProduct(e.produto.images)
                setSize(e.produto.size)
                setColors(e.produto.colors)
          }
      })
    }

    useEffect(()=>{popularProduct()},[])
    return(
        <View style={{backgroundColor:'white'}}>
            <ScrollView horizontal={true} style={styles.section}>
            {configProduct.map((e) =>{
                return(       
                    <View style={{flex:1}} key={Math.random()}>
                        <Image  style={{width:win.width, height: 400 * ratio,borderTopLeftRadius:30,borderTopRightRadius:30,backgroundColor:'white'}} source={{uri:e}}></Image>
                    </View>             
                )
            })}
            </ScrollView>

            
            <View style={styles.config}>
            <BaseProduct props={navigation} data={dataSelect} CardId={id} />
                <View style={{marginLeft:30,marginTop:5}}>
                    <Text style={{fontWeight:'300', fontSize:20,marginBottom:5}}> Tamanhos:</Text>
                    <View  style={{flexDirection:'row',marginLeft:10}}>
                        {size.map((e)=>{
                            return(
                                <Caracters key={Math.random()} data={e}/>
                                )
                            })}
                    </View>
                        <Text style={{fontWeight:'300', fontSize:20,marginLeft:6}}>Cores:</Text>
                        <View style={{flexDirection:'row',marginLeft:12,marginBottom:30,marginTop:5}}>
                        {colors.map((e)=>{
                            return(
                                <Colors key={Math.random()} data={e}/>
                                )
                            })}
                    </View>
                </View>
                    <Buy props={navigation} datas={dataSelect} CardId={id}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    config:{
        backgroundColor:"white",
        height:'35%',
        width: '100%',
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'flex-start',

    },
   

})