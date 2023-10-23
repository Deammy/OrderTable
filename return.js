import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
export const ReturnArrow = (width) =>{
    
    return(
        <View style = {style.arrow}>
            <Image source={require('./Icon/arrow.png')}/>
        </View>
    )
    
}
const w_width = Dimensions.get('window').width
const w_height = Dimensions.get('window').height
const style = StyleSheet.create({
    arrow:{
        marginTop : 50,
        marginLeft : 60,
        width : w_width
    }
})