import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { TextInput, Button, Headline } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

import Container from "../components/Container";
import Body from "../components/Body";
import Input from "../components/Input";
import Logo from '../components/Logo';
import { register } from "../services/auth.services";

const Register = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleRegister = () => {

        register({
          name: name,
          email: email,
          password: password
        }).then( res => {
          console.log(res);
    
          if(res){
    
            Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!',[
              { text: "OK", onPress: () => navigation.goBack() }
            ]);
    
          }else{
    
             Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde =D');
          }
    
        });
        
      }

    return (
        <Container>
            <View style={styles.header}>
                <Logo />
            </View>
            <Headline style={styles.textHeader}>
                Inspira Sabor
            </Headline>
            <Body>
                <Input
                    label="Nome"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    left={<TextInput.Icon icon="account" />}
                />
                <Input
                    label="E-mail"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    left={<TextInput.Icon icon="email" />}
                />
                <Input
                    label="Senha"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    left={<TextInput.Icon icon="key" />}
                />
                <Button
                    style={styles.Button}
                    mode="outlined"
                    onPress={handleRegister}
                >
                    REGISTRAR
                </Button>
                <Button
                    style={styles.Button}
                    mode="outlined"
                    onPress={() => navigation.goBack()}
                >
                    CANCELAR
                </Button>
            </Body>
        </Container>
    );
};

const styles = StyleSheet.create({
    Button: {
        marginBottom: 8
    },
    textHeader: {
        textAlign: "center"
    },
    header: {
        alignItems: 'center',
        marginTop: 55,
        marginBottom: 12
    },
});

export default Register;
