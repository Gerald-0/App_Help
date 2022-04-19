import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, ImageBackground} from 'react-native';
import Main from './src/conponents/Main';
import Teste from './src/conponents/Teste';


export default function App() {
  return (
    <View style={styles.container}>
      <Teste></Teste>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDA060',
    paddingTop:80,
    alignItems:'center',
  },
}); 
