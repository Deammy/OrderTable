import { OrderHistory } from "./orderhistory"
import { ReturnArrow } from "./return"
import { StyleSheet,Dimensions,Text,TouchableOpacity} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
const w_width = Dimensions.get('window').width
const w_height = Dimensions.get('window').height
export const History = () =>{
    const data = {
        "Name": "Peter",
        "Detail": "Detail"
    }
    return(
        <LinearGradient
            colors={['#24144C', '#6D459A', '#AA436F', '#C53998', '#7721D9']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.8 }}
        >
            <TouchableOpacity>
                <ReturnArrow/>
            </TouchableOpacity>
            
            <Text style = {{
                marginLeft : 'auto',
                marginRight : 'auto',
                color : '#fff',
                marginTop : 20,
                fontSize : 16
            }}>
                ประวัติการจอง
            </Text>
            <TouchableOpacity>
                <OrderHistory data = {data}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <OrderHistory data = {data}/>
            </TouchableOpacity>
        </LinearGradient>
    )
    
}
const styles = StyleSheet.create({
    container:{
        height : w_height,
        flex: 1
    }
})