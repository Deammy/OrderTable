import { StyleSheet, Dimensions, View, Text , Image } from "react-native"
const w_width = Dimensions.get('window').width
const w_height = Dimensions.get('window').height
export const OrderHistory = ({data}) => {
    return (
        <View style = {styles.container}>
            <View style={styles.box1}>
                <Text style = {styles.line1}>
                    Name
                </Text>
                <View style = {styles.line2}>
                    <Image source={require('./Icon/user.png')}/>
                    <Text style = {{
                        fontSize : 15,
                        fontWeight : '600',
                        marginLeft : 10
                    }}>
                        4 คน
                    </Text>
                    <View style = {{
                        alignItems : 'center',
                        flexDirection : "row",
                        marginLeft : 'auto',
                        marginRight : 20
                    }}>
                        <Image source={require('./Icon/OrderSuccess.png')}/>
                        <Text style = {{
                            fontWeight : '500',
                            marginLeft : 10,
                            color : '#4ABC14'
                        }}>
                            จองสำเร็จ
                        </Text>
                    </View>

                </View>

                <View style = {styles.underline}/>
                <View style = {styles.line3}>
                    <Text>
                        ยอดชำระ : 50
                    </Text>
                    <Text style = {{
                        marginLeft : 'auto',
                        marginRight : 20
                    }}>
                        20.33 น. 16/10/66
                    </Text>
                </View>
            </View>

        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop : 20,
        alignItems : 'center'
    },
    box1: {
        width: 328,
        height: 116,
        backgroundColor: '#CDCDCD',
        borderRadius : 18
    },
    line1:{
        fontSize : 24,
        fontWeight : '600',
        marginLeft : 20,
        marginTop : 10
    },
    line2:{
        alignItems : 'center',
        marginTop : 10,
        flexDirection : 'row',
        marginLeft : 20
    },
    underline:{
        marginTop : 5,
        backgroundColor : '#000',
        height : 0.8,
        width : 288,
        marginLeft : 'auto',
        marginRight : 'auto',
        borderRadius : 5
    },
    line3:{
        alignItems : 'center',
        marginTop : 10,
        flexDirection : 'row',
        marginLeft : 20
    }
})