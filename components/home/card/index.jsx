import { Image, Text, View ,StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Check from 'react-native-vector-icons/AntDesign';
import Favoritar from "../favoritar";

export default function Card({datas,props}){

    return(
        <ScrollView>
            {datas.map((e)=>{  
                return(
            <View style={styles.section} key={e.id}>
                {/* to={`/seeProduct/${e.id}`} */}
                <TouchableOpacity  onPress={() => props.push('SeeProduct',{id:4}) }  key={e.id}>
                    <Image  style={styles.image} source={{uri:e.url}}
                ></Image>
                </TouchableOpacity>
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
        marginBottom:30,
        marginLeft:20,
        alignItems:'center'
       
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