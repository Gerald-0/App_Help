import React from "react";
import { View, Button, Text,Image,TouchableOpacity , Picker} from "react-native";
import style from "./style";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";


export default function Title(){
    const navigation = useNavigation();


    return(
        <View style={style.container}> 

        

            <View style={style.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    delay={600}
                    source={require('../../../assets/Img/logo.png')}
                    style={{ width:'100%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View  animation="fadeInUp" style={style.containerForm}>
            

                <TouchableOpacity
                style={style.button}
                onPress={ () => navigation.navigate('Cadastro')}
                >
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
        
    )
}
