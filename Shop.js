import { StyleSheet, View, Text, Dimensions } from "react-native"

export const Shop = ({ data }) => {
    return (<View style={style.container}>
        <View style={style.box}>
            <View style={style.detail}>
                <Text style={style.head_content}>
                    {data.Name}
                </Text>
                <Text style={style.content}>
                    {data.Detail}
                </Text>
            </View>
        </View>

    </View>)
}
const w_width = Dimensions.get('window').width
const w_height = Dimensions.get('window').height
const style = StyleSheet.create({
    container: {
        width: w_width,
        alignItems: 'center',
    },
    box:{
        justifyContent: 'flex-end',
        backgroundColor: '#0ff',
        width : 347,
        height: 188,
        borderRadius: 18,
    },
    detail: {
        height: 68,
        backgroundColor: '#fff',
        borderRadius: 18,
    },
    head_content: {
        marginLeft: 20,
        marginTop: 5,
        fontSize: 15
    },
    content: {
        marginLeft: 20,
        fontSize: 13
    }
})