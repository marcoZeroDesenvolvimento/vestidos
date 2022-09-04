import { Image, View } from "react-native"
import {Header} from "../../components/login/header"
import Logo from "../../components/login/logo"

export default function Login({navigation}){
    return(
        <View>
            <Logo/>
            <Header props={navigation}/>
        </View>
    )
}