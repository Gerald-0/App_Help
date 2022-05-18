import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { Alert } from "react-native-web"
import Config from "./Config"

class UsuarioService{

    async cadastrar(data){
        return axios({
            url: Config.API_URL + "Usuarios/",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    // async function signIn(data) {
    //     if (username.length === 0) return
    
    //     setLoading(true)
    
    //     try {
    
    //       const credentials = {
    //         email: username,
    //         password: password
    //       }
    // }
}

Alert.alert("chegou aqui UsuarioService")
const usuarioService = new UsuarioService()
export default usuarioService