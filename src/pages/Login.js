import React, { useState} from "react";
import { StyleSheet, View, Alert } from "react-native";
import { TextInput, Button, Headline, IconButton } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

import Container from "../components/Container";
import Body from "../components/Body";
import Input from "../components/Input";
import Logo from '../components/Logo';
import { useUser } from "../contexts/UserContext";
import { login } from "../services/auth.services";


const Login = () => {
    const navigation = useNavigation();
    const { setSigned, setName } = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {

        login({
            email: email,
            password: password
        }).then(res => {
            console.log(res);

            if (res && res.user) {
                setSigned(true);
                setName(res.user.name);
                navigation.navigate('Dashboard');
            } else {

                Alert.alert('Atenção', 'Usuário ou senha inválidos!');
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
                    onPress={handleLogin}
                >
                    LOGIN
                </Button>
                <Button
                    style={styles.Button}
                    mode="outlined"
                    onPress={() => navigation.navigate('Register')}
                >
                    CRIE SUA CONTA!
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

export default Login;
