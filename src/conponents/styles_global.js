import { StyleSheet } from 'react-native'
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    quadro: {
        width:400,
        height:700,
        marginTop:100,
        backgroundColor:'#FFF',
        borderRadius:30,
    },
    button: {
        backgroundColor:"#3DD39F",
        width:350,
        height:45,
        borderRadius:25,
        marginBottom:60,
        color:'#FFF',
        fontSize:20,
        textAlign:'center',
        fontFamily: 'Poppins-Light',
    },
    button2: {
        backgroundColor:"#FFF",
        width:350,
        height:36,
        borderRadius:14,
        marginBottom:30,
        marginTop:10 ,
        color:'#C4C4C4',
        fontSize:20,
        textAlign:'center',
        fontFamily: 'Poppins-Light',
        shadowOpacity: 0.06,
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowRadius: 10,
        elevation: 3,
    },
    textInput: {
        width:350,
        height:50,
        backgroundColor:'#E9E9E9',
        borderRadius:20,
        marginBottom:60,
    },
    Text: {
        fontSize:40,
        fontFamily: 'Poppins-Light',
        fontWeight:'bold',
        marginLeft:15,
    }
})

export default styles