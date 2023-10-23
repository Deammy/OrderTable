import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image ,TouchableOpacity} from 'react-native';
import { Nav } from './Nav';
import { Shop } from './Shop';
import { LinearGradient } from 'expo-linear-gradient';
import { ReturnArrow } from './return';

const w_width = Dimensions.get('window').width
const w_height = Dimensions.get('window').height
export const DigitalBank = ({data}) => {
    return (
        <LinearGradient
            colors={['#24144C', '#6D459A', '#AA436F', '#C53998', '#7721D9']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.8 }}
        >
            <TouchableOpacity>
                <ReturnArrow/>
            </TouchableOpacity>
            <Text style={styles.headtext}>
                ยอดเงินดิจิทัลของคุณ
            </Text>
            <View style = {{
                flexDirection : 'row'
            }}>
                <Text style={styles.moneytext}>
                    10000
                </Text>
                <Image style={{
                    height: 80,
                    width: 40,
                }} source={require('./Icon/lightbulb.png')} />
            </View>
            <View style = {styles.box_main}>
                <View style = {styles.box1}>
                    <View style = {styles.box2}>
                        <Text style= {{
                            marginTop : 5,
                            marginLeft : 20,
                        }}>
                            อัตราการแลกเปลี่ยนเงินดิจิทัล
                        </Text>
                        <Text style = {{
                            marginTop : 10,
                            marginLeft : 'auto',
                            marginRight : 'auto'
                        }}>
                            1 หลอดไฟ = 1 บาท
                        </Text>
                        <Text style = {{
                            fontSize : 10,
                            marginTop : 'auto',
                            marginLeft : 'auto',
                            marginRight : 20
                        }}>
                            ณ เวลา 20:00 น 18 พ.ย. 2566
                        </Text>


                    </View>
                    <Text style = {{
                        marginLeft : 20,
                        marginTop : 10,
                        fontSize : 15
                    }}>
                        ตัวเลือกในการเติมเงิน
                    </Text>




                    <View style = {{
                        flexDirection : 'row',
                        justifyContent : 'center'
                    }}>
                        <TouchableOpacity style = {styles.box3}>
                            <View style = {styles.picinbox}>
                                <Image source={require("./Icon/bank.png")}/>
                            </View>
                            
                            <Text style = {styles.subheadtext}>
                                ธนาคาร
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.box3}>
                            <View style = {styles.picinbox}>
                                <Image source={require("./Icon/wallet.png")}/>
                            </View>
                            <Text style = {styles.subheadtext}>
                                บัตรเครดิต หรือ
                            </Text>
                            <Text>
                                บัตรเดบิต
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <View style = {{
                        flexDirection : 'row',
                        justifyContent : 'center'
                    }}>
                        <TouchableOpacity style = {styles.box3}>
                            <View style = {styles.picinbox}>
                                <Image source={require("./Icon/promptpay.png")}/>
                            </View>
                            <Text style = {styles.subheadtext}>
                                พร้อมเพย์
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.box3}>
                            <View style = {styles.picinbox}>
                                <Image source={require("./Icon/cunex.png")} />
                            </View>
                            <Text style = {styles.subheadtext}>
                                CU NEX
                            </Text>

                        </TouchableOpacity>
                    </View>




                    <Text style = {{
                        marginLeft : 20,
                        fontSize : 10
                    }}>
                        ***ระบบ CU NEX สวงนสิทธิ์ไว้สำหรับบุคคลากรจุฬาลงกรณ์มหาวิทยาลัย
                    </Text>



                </View>
            </View>
            
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        height: w_height,
        flex: 1,
        alignItems: 'center',
    },
    headtext:{
        marginTop : 50,
        color : '#fff',
        fontSize : 16,
        fontWeight : '600'
    },
    moneytext:{
        marginTop : 20,
        color : '#fff',
        fontSize : 36,
        fontWeight : '800'
    },
    box_main: {
        width: w_width,
        alignItems: 'center',
    },
    box1:{
        width: 347,
        height: 496,
        backgroundColor : '#fff',
        borderRadius : 18
    },
    box2:{
        height: 81,
        backgroundColor : '#AEAEAE',
        borderRadius : 18
    },
    box3:{
        alignItems : 'center',
        margin : 20,
        height : 133,
        width : 133,
        borderColor : '#000',
        borderRadius : 18,
        borderStyle : 'solid',
        borderWidth : 2
    },
    subheadtext:{
        marginTop : 10,
        color : '#000'
    },
    picinbox:{
        height : 55,
        marginTop : 20,
    }
});
