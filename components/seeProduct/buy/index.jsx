import { Button, StyleSheet, Text, TouchableOpacity, View,Modal,Pressable} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Dolar from 'react-native-vector-icons/MaterialIcons';
import MyContext from '../../../myContext'
import { useContext, useEffect, useState } from 'react'
import 'react-native-url-polyfill/auto';
import { supabase } from "../../../supabase";



export default function Buy({props,datas,CardId}){
    const { id,setId } = useContext(MyContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText]= useState([])
    const [text2, setText2]= useState('OK!')
    const [imageUpdate, setImageUpdate] = useState([])
  
    var sim = []

    async function handleAddTocar(){
        let { data } = await supabase
        .from('user_favorite')
        .select(`
            idUser,idCard
        `)
        const teste = data.find((i) =>{
            return i.idUser == id.session.user.id && i.idCard == CardId
        })
        if(!teste){
            async function updateImage(){
                const request = await supabase
                    .from('user_favorite')
                    .insert([
                    {idUser:id.session.user.id, dataCard:datas.images[0],idCard:CardId}
                    ])
            } updateImage()

        }
    }


    function handleBuyNoLogin(){
        setModalVisible(true);
        setText('Faça login para continuar')
    }
    function handleLogin(){
        setModalVisible(false);
        props.navigate('Login')
    }

    function handleBuy(){
        props.navigate('Finalizar',{data:datas})
    }
    return(
        <View style={styles.section}>
            {id == 'undefined' ? (
                 <View style={{flexDirection:'row',justifyContent:'space-around',width:"100%",backgroundColor:'white'}}>
                 <TouchableOpacity  onPress={()=> handleBuyNoLogin()} style={{ alignItems:'center',textAlign:'center'}}>
                     <Icon name="shopping-cart" size={15}/>
                     <Text> Add ao carrinho</Text>
                 </TouchableOpacity>
                 <TouchableOpacity  onPress={()=> handleBuyNoLogin()} >
                         <View style={{ alignItems:'center',textAlign:'center'}}>
                             <Icon name="attach-money" size={15}/>
                             <Text> Comprar</Text>
                         </View>
                 </TouchableOpacity>
             </View>
            ):(
                <View style={{flexDirection:'row',justifyContent:'space-around',width:"100%",backgroundColor:'white'}}>
                    <TouchableOpacity  onPress={()=> handleAddTocar()} style={{ alignItems:'center',textAlign:'center'}}>
                        <Icon name="shopping-cart" size={15}/>
                        <Text> Add ao carrinho </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> handleBuy()} >
                        <View style={{ alignItems:'center',textAlign:'center'}}>
                            <Icon name="attach-money" size={15}/>
                            <Text> Comprar </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
             <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{text}</Text>
                    { !id.data ? (
                         <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Ok!</Text>
                            </Pressable>
                             <Pressable style={[styles.button, styles.buttonClose]} onPress={() => handleLogin()}>
                             <Text style={styles.textStyle}>Fazer login!</Text>
                             </Pressable>
                        </View>
                        ):(
                            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>{text2}</Text>
                            </Pressable>
                        )
                    }
                    
                </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginLeft:10,
        
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})