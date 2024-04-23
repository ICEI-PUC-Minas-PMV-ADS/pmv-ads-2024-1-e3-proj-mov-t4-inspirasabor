import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Headline, IconButton } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

import Container from "../components/Container";
import Body from "../components/Body";
import Input from "../components/Input";
import Logo from '../components/Logo';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            <View style={styles.header}>
                <Logo/>
            </View>
            <Headline style={styles.textHeader}>
                Inspira Sabor
                </Headline>
            <Body>
                <Input
                    label="E-mail"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    left={<TextInput.Icon icon="account" />}
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
                    onPress={() => navigation.navigate('Dashboard')}
                >
                    LOGIN
                </Button>
                <Button
                    style={styles.Button}
                    mode="outlined"
                    onPress={() => console.log("Pressed")}
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
        marginTop: 50,
        marginBottom: 12
    },
});

export default Login;
