import { OrderHistory } from "./orderhistory"
import { ReturnArrow } from "./return"
import { StyleSheet,Dimensions,Text, View,TextInput,TouchableOpacity} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

const w_width = Dimensions.get('window').width
const w_height = Dimensions.get('window').height

export const Login = () =>{
    return(
        <LinearGradient
            colors={['#24144C', '#6D459A', '#AA436F', '#C53998', '#7721D9']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.8 }}
        >
            <View style = {[styles.box1, styles.shadowProp]}>
                <Text style = {styles.headtext}>
                    Login
                </Text>
                <Text style = {styles.underheadtext}>
                    sign in your account
                </Text>
                <TextInput placeholder="Email..." style = {styles.inputtext}/>
                <TextInput placeholder="Password..." style = {styles.inputtext}/>
                <TouchableOpacity style = {styles.loginbutton}>
                    <Text style = {{
                        fontSize : 14,
                        fontWeight : '700',
                        color : '#fff'
                    }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style = {{
                    flexDirection : 'row',
                    marginTop : 5,
                }}>
                    <Text style = {{
                        fontSize : 10
                    }}>
                    Not a account ?
                    </Text>
                    <Text style = {{
                        marginLeft : 5,
                        textDecorationLine: 'underline',
                        fontSize : 10
                    }}>
                        sign up
                    </Text>
                </View>
                
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container:{
        height : w_height,
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    box1:{
        alignItems : "center",
        width : 323,
        height: 331,
        backgroundColor : '#FFFFFF',
        borderRadius : 15,
    },
    headtext:{
        marginTop : 30,
        fontWeight : '700',
        fontSize : 30,
        color : '#7721D9'
    },
    underheadtext:{
        marginTop : 5,
        fontWeight : '500',
        fontSize : 10,
        color : '#000'
    },
    inputtext:{
        marginTop : 20,
        height : 39,
        width : 298,
        borderRadius : 11,
        borderStyle : 'solid',
        borderColor : '#000',
        borderWidth : 1
    },
    loginbutton:{
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 20,
        height : 39,
        width : 298,
        backgroundColor : '#7721D9',
        borderRadius : 11
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -10, height: 10},
        shadowOpacity: 1,
        shadowRadius: 10,
    },
})