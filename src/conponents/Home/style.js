import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#FDA060",
        flex:1,
    },
    containerLogo: {
        flex: 2,
        backgroundColor:"#FDA060",
        justifyContent:"center",
        alignItems:"center",
    },
    containerForm: {
        flex:1,
        backgroundColor:"#FFF",
        borderRadius:20,
        paddingStart: '5%',
        paddingEnd:'5%',
    },
    button: {
        position: 'absolute',
        backgroundColor:'#3DD39F',
        borderRadius:15,
        paddingVertical: 8,
        width:'60%',
        alignItems:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center',
    }
})

export default styles