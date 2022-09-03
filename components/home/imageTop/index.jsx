import { Image,StyleSheet } from "react-native";

export default function ImageTop(){
    return(
        <Image 
            style={styles.image} 
            // source={require("../../../assets/wallpaper.*webp")}
            source={{uri:"https://static.wixstatic.com/media/c837a6_2119733e838e4a2f8813ebde736f99d5~mv2.jpg/v1/fill/w_980,h_1300,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_2119733e838e4a2f8813ebde736f99d5~mv2.jpg"}}
        ></Image>
    )
}

const styles = StyleSheet.create({
    image:{
       height: 240,
       width:'100%',
       borderBottomRightRadius:90,
    },
   
  });