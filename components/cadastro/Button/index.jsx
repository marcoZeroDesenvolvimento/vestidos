import { Text, View,TextInput,StyleSheet,Button} from "react-native"
export default function ButtonComponent({cadastrar}){

return(
    <>
        <Button 
            title={cadastrar}
            color="orange"
        ></Button>
    </>
    )
}
