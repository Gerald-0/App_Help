import React from "react";
import { View, Button, Text,Image,TouchableOpacity , TextInput, ScrollView} from "react-native";
import style from "./style.js";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from "react-native-masked-text";
import { useState } from "react";

export default function Title(){
    const navigation = useNavigation();
    const [cell, setCell] = useState('');
    const [emaii, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [data_nascimento, setDataNascimento] = useState('');
    const [chassi, setChassi] = useState('');
    const [senha, setSenha] = useState('');

    return(
    
        <View style={style.container}> 
            <View style={style.container}></View>
            <Animatable.View  animation="fadeInUp" delay={300} style={style.containerForm}>
                <Animatable.Text animation="fadeInLeft" delay={600} style={style.Text}>Registre</Animatable.Text>
                <ScrollView style={{marginTop:5}}>
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setNome(text) }
                        value={nome}
                        placeholder="   Nome"
                    />
                    <TextInputMask
                        style={style.textInput}
                        type={'datetime'}
                        options={{
                            format: 'YYYY/MM/DD'
                        }}
                        placeholder={"  Data de Nascimento (YYYY/MM/DD)"}
                        value={data_nascimento}
                        onChangeText={text => setDataNascimento(text)}
                    />
                    <TextInputMask
                        style={style.textInput}
                        placeholder={"  CPF (000.000.000-00)"}
                        type={'cpf'}
                        value={cpf}
                        onChangeText={text => setCpf(text)}
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setChassi(text) }
                        value={chassi}
                        placeholder="   Chassi"
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setEmail(text) }
                        value={emaii}
                        placeholder="   Email"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={text => setSenha(text) }
                        value={senha}
                        type={"password"}
                        placeholder="   Senha"
                        keyboardType="password"
                        secureTextEntry={true}
                    />

                    <TextInputMask
                        style={style.textInput}
                        type={'cel-phone'}
                        placeholder={"  Celular"}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={cell}
                        onChangeText={ text => setCell(text) }
                    />

                    <TextInput
                        style={style.textInput}
                        onChangeText={Number}
                        value={{}}
                        placeholder="   CEP"
                       
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={{}}
                        value={{}}
                        placeholder="   Endereço"
                       
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={Number}
                        value={{}}
                        placeholder="   Numero"
                       
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={{}}
                        value={{}}
                        placeholder="   Bairro"
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={String}
                        value={{}}
                        placeholder="   Cidade"
                    />
                    <TextInput
                        style={style.textInput}
                        onChangeText={{}}
                        value={{}}
                        placeholder="   Estado"
                    />
                </ScrollView>
                <View>
                    <TouchableOpacity>
                        <Text style={style.button} onPress={ () => navigation.navigate('Servico')} >Entrar</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
        
    )
}
