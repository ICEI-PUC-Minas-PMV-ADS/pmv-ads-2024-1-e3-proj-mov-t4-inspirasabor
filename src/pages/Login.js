import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput, Button, Headline, IconButton } from "react-native-paper";

import Container from "../components/Container";
import Body from "../components/Body";
import Input from "../components/Input";

const Login = () => {
    const [email, setEmail] = useState("klebersouza@pucminas.br");
    const [password, setPassword] = useState("pucminas");

    return (
        <Container>
            <Headline style={styles.textHeader}>
                InspiraSabor
                </Headline>
            <Body>
                <Input
                    label="E-mail"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    left={<IconButton icon="account" />}
                />
                <Input
                    label="Senha"
                    value={password}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    left={<IconButton icon="key" />}
                />
                <Button
                    style={styles.Button}
                    mode="outlined"
                    onPress={() => console.log("Pressed")}
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
    }
});

export default Login;
