import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image ,TouchableOpacity} from 'react-native';
import { Nav } from './Nav';
import { Shop } from './Shop';
import { LinearGradient } from 'expo-linear-gradient';

export const Home = () => {
    const data = {
        "Name": "Peter",
        "Detail": "Detail"
    }
    const w_width = Dimensions.get('window').width
    const w_height = Dimensions.get('window').height
    return (
        <LinearGradient
            colors={['#24144C', '#6D459A', '#AA436F', '#C53998', '#7721D9']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.8 }}
        >
            <Nav />

            <View style={{
                width: w_width,
                marginTop: 15,
                marginLeft: 40,
                justifyContent: 'flex-start',
            }}>
                <Text style={styles.floattext}>
                    ร้านแนะนำ
                </Text>
            </View>


            <View style={{
                marginTop: 20
            }} />
            <TouchableOpacity>
                <Shop data={data} />
            </TouchableOpacity>
            


            <View style={{
                marginTop: 20
            }} />
            <TouchableOpacity>
                <Shop data={data} />
            </TouchableOpacity>
            <View style={styles.box_main}>
                <View style={{
                    flexDirection: 'row',
                    width: 347,
                    marginTop: 20
                }}>
                    <TouchableOpacity style={styles.box1}>
                        <Image style={{
                            height: 60,
                            width: 80,
                        }} source={require('./Icon/table.png')} />
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 15
                        }}>
                            จองโต๊ะ
                        </Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.box2}>
                        <Image style={{
                            height: 60,
                            width: 80,
                        }} source={require('./Icon/list.png')} />
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 15
                        }}>
                            ประวัติการจอง
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: w_width,
                    marginTop: 10,
                    marginLeft: 40,
                    justifyContent: 'flex-start',
                }}>
                    <Text style={styles.floattext}>
                        การจองปัจจุบัน
                    </Text>
                </View>
                <TouchableOpacity style={styles.box3}>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 15
                    }}>
                        ยังไม่มีการจองโต๊ะ
                    </Text>
                </TouchableOpacity>
                <View style={styles.slideup}>

                </View>
                <Text style={styles.floattext}>
                    เลื่อนขึ้นเพื่อดูข้อมูลเพิ่มเติม
                </Text>
            </View>

        </LinearGradient>
    );
}
const w_width = Dimensions.get('window').width
const w_height = Dimensions.get('window').height
const styles = StyleSheet.create({
    container: {
        height: w_height,
        flex: 1,
        alignItems: 'center',
    },
    box1: {
        alignItems: 'center',
        width: 164,
        height: 91,
        backgroundColor: '#fff',
        borderRadius: 18
    },
    box2: {
        alignItems: 'center',
        width: 164,
        height: 91,
        backgroundColor: '#fff',
        borderRadius: 18,
        marginLeft: 'auto'
    },
    box3: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        width: 347,
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 18
    },
    box_main: {
        width: w_width,
        alignItems: 'center',
    },
    slideup: {
        marginTop: 15,
        backgroundColor: '#fff',
        height: 5,
        width: 130,
        borderRadius: 10,
        alignItems: 'center'
    },
    floattext: {
        color: '#fff',
        fontSize: 15
    }
});
