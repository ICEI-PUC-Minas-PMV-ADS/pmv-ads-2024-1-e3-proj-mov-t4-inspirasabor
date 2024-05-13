import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, Alert,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker'

import Input from "../components/Input";
import Container from '../components/Container';
import Body from '../components/Body';
import Header from '../components/Header';
import { getReceita } from '../services/adicionarReceita.services';
import { insertReceita } from '../services/adicionarReceita.services';

const adicionarReceita = () => {   
  const navigation = useNavigation();
  const [categoriaId, setCategoriaId] = useState([]);
  const [tituloReceita, setTituloReceita] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);
  const [modoPreparo, setModoPreparo] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {

    getReceita().then(dados => {
      console.log(dados);
    });
  }, []);

  const salvarReceita = () => {
    try {
      if (!categoriaId || !tituloReceita || !ingredientes || !modoPreparo) {
        Alert.alert('Por favor, preencha todos os campos do formulário.');
        return;
      }

      if (categoriaId.trim() === '' || tituloReceita.trim() === '' || ingredientes.trim() === '' || modoPreparo.trim() === '') {
        Alert.alert('Por favor, preencha todos os campos do formulário.');
        return;
      }
  
      insertReceita({
        categoriaId: categoriaId === 'Carnes' ? 1 : categoriaId === 'Massas' ? 2 : 3,
        tituloReceita: tituloReceita,
        ingredientes: ingredientes,
        modoPreparo: modoPreparo,
      }).then(res => {
        navigation.goBack();
      }).catch(error => {
        console.error('Erro ao salvar a receita:', error);
        Alert.alert('Ocorreu um erro ao salvar a receita. Tente novamente mais tarde.');
      });
  
    } catch (error) {
      console.error('Erro ao salvar a receita:', error);
      Alert.alert('Por favor, preencha todos os campos do formulário.');
    }
  };
       
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
    return (
      <Container>
            <Header
                title={'Adicionar nova Receita'}
                leftIcon={'home'}
                onPressLeftIcon={() => navigation.navigate('Dashboard')}
            />
            <Body>
            <ScrollView>

              <Text style={styles.Titulo}>1 - Escolha uma Categoria:</Text>
            
              <View style={styles.ContainerRadio}>

                <RadioButton
                  value="Carnes"
                  status={ categoriaId === 'Carnes' ? 'checked' : 'unchecked' }
                  onPress={() => setCategoriaId('Carnes')}
                />
                <Text style={styles.NomeCategoria}>Carnes</Text>

                <RadioButton
                  value="Massas"
                  status={ categoriaId === 'Massas' ? 'checked' : 'unchecked' }
                  onPress={() => setCategoriaId('Massas')}
                />
                <Text style={styles.NomeCategoria}>Massas</Text>

                <RadioButton
                  value="Doces"
                  status={ categoriaId === 'Doces' ? 'checked' : 'unchecked' }
                  onPress={() => setCategoriaId('Doces')}
                />
                <Text style={styles.NomeCategoria}>Doces</Text>

            </View>

            <Text style={styles.Titulo}>2 - Nome da Receita:</Text>
            <Input
                    value={tituloReceita}
                    onChangeText={(text) => setTituloReceita(text)}
                    left={<TextInput.Icon icon="lead-pencil" />}
            />

            <Text style={styles.Titulo}>3 - Ingredientes:</Text>
            <Input
                    value={ingredientes}
                    onChangeText={(text) => setIngredientes(text)}
                    left={<TextInput.Icon icon="food-apple" />}
                    multiline={true}
                    numberOfLines={4}
            />

            <Text style={styles.Titulo}>4 - Modo de Preparo:</Text>
            <Input
                    value={modoPreparo}
                    onChangeText={(text) => setModoPreparo(text)}
                    left={<TextInput.Icon icon="food-fork-drink" />}
                    multiline={true}
                    numberOfLines={4}
            />

            <Text style={styles.Titulo}>5 - Adicionar Imagem:</Text>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <Button title="Escolher imagem" onPress={pickImage} />

            <Button 
              title={"salvar"}
              icon='content-save-check' 
              mode='conteined' 
              color={'darkblue'}    
              style={styles.Salvar}
              onPress={salvarReceita}>SALVAR
            </Button>

            </ScrollView>            
            </Body>

      </Container>
      );

  }; 

const styles = StyleSheet.create({
  ContainerRadio:{
    flexDirection: 'row',
    margin:8,
    alignItems:'center',    
 },
  Titulo:{
    margin:8,
    marginTop:18,
    fontSize:18,
    fontWeight:'bold',
  },
  NomeCategoria:{
    fontSize:15,
    fontWeight:'bold',
    color:'darkblue',
  },
  Salvar:{
    marginTop: '15',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderBottomColor:'red',
    fontSize:20,
    backgroundColor: 'lightgreen',
  },
});

export default adicionarReceita;