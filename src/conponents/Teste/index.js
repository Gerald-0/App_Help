import React from "react";
import {View, Button,Text,Image, useState,TouchableOpacity, TextInput, StatusBar} from "react-native";
import styles from "../styles_global"

export default function Entrar(){

return(
  <View style={styles.quadro}>
    <View style={{marginTop:20}}>
      <Text style={styles.Text}>Òtimo dia!</Text>
      <Text style={{fontSize:17, marginLeft:17, color:'#4E5056'}}>Para entrar, digite seus dados abaixo</Text>
    </View>
    <View style={styles.container}> 
      <TextInput style={styles.textInput} placeholder="   Email" onChangeText={text=>setEmail(text)}/>
      <TextInput style={styles.textInput} placeholder="   Senha"/>
      <TouchableOpacity>
        <Text style={styles.button}>Entrar</Text>
      </TouchableOpacity>
      <Text style={{color:'#3DD39F', fontSize:17, marginBottom:20}}>Esqueceu a senha ?</Text>
      <Text>-----------------       Ou        ---------------</Text>
      <TouchableOpacity>
        <Text style={styles.button2}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.button2}>Entrar</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
} 
