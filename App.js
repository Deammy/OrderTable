import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Home } from './Home';
import { Shop } from './Shop';
import { LinearGradient } from 'expo-linear-gradient';
import { DigitalBank } from './DigitalBank';
import { History } from './History';
import { Login } from './Login';
const w_width = Dimensions.get('window').width
const w_height = Dimensions.get('window').height
export default function App() {
  const data = {
    "Name": "Peter",
    "Detail": "Detail"
  }
  return (
    <Home></Home>
  )
    
}
const styles = StyleSheet.create({

});
