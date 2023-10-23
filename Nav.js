import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Dimensions} from 'react-native';
export const Nav = () => {
    return(
        <View style = {{
            marginTop : 40
        }}>
            <View style = {styles.nav}>
                <View>
                    <Text style = {styles.head}>
                        พร้อมชนแก้วแล้วหรือยัง
                    </Text>
                    <Text style = {styles.name}>
                        Name
                    </Text>
                </View>
                <View style = {{
                    flexDirection:'row',
                    marginLeft : 'auto',
                    marginRight : 10
                }}>
                    <View style = {styles.money}>

                    </View>
                    <View style = {styles.pic_circle}>

                    </View>
                </View>
                
                
            </View>
        </View>
    );
}
const w_width = Dimensions.get('window').width
const w_height = Dimensions.get('window').height
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#414A61',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nav:{
        height : 50,
        flexDirection:'row',
        justifyContent : 'flex-start',
        width : w_width
        
    },
    head:{
        fontWeight : '400',
        marginLeft : 30,
        color : '#fff',
        fontSize : 15
    },
    name:{
        fontWeight : '600',
        marginLeft : 30,
        color : '#fff',
        fontSize : 19
    },
    pic_circle:{
        marginTop : 5,
        backgroundColor : '#fff',
        width : 56,
        height : 56,
        borderRadius : 20
    },
    money:{
        borderRadius : 18,
        width : 79,
        height : 16,
        backgroundColor : '#000',
        marginRight : 5
    }
});