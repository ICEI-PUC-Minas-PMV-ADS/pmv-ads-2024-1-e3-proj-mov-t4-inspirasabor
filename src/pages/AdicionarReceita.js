import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import Input from "../components/Input";
import Container from '../components/Container';
import Body from '../components/Body';
import Header from '../components/Header';
import { insertReceita, updateReceita, deleteReceita } from '../services/adicionarReceita.services';

const AdicionarReceita = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const receita = route.params?.receita || {}; 

  const [categoriaId, setCategoriaId] = useState(receita.categoriaId || '');
  const [tituloReceita, setTituloReceita] = useState(receita.tituloReceita || '');
  const [ingredientes, setIngredientes] = useState(receita.ingredientes || '');
  const [modoPreparo, setModoPreparo] = useState(receita.modoPreparo || '');
  const [image, setImage] = useState(receita.imagem || null);
  
  const salvarReceita = () => {
    try {
      if (!categoriaId || !tituloReceita || !ingredientes || !modoPreparo) {
        Alert.alert('Por favor, preencha todos os campos do formulário.');
        return;
      }

      const receitaAntiga = {
        categoriaId: categoriaId === 'Carnes' ? 1 : categoriaId === 'Massas' ? 2 : 3,
        tituloReceita,
        ingredientes,
        modoPreparo,
        nota: receita.nota || 0,
        imagem: image,
      };

      if (receita.id) {
        receitaAntiga.id = receita.id;
        updateReceita(receitaAntiga).then(res => {
          navigation.navigate('Dashboard');
          Alert.alert('A receita foi atualizada com sucesso!');
        }).catch(error => {
          console.error('Erro ao atualizar a receita:', error);
          Alert.alert('Ocorreu um erro ao atualizar a receita. Tente novamente mais tarde.');
        });
      } else {
        insertReceita(receitaAntiga).then(res => {
          navigation.navigate('Dashboard');
          Alert.alert('A receita foi salva com sucesso!');
        }).catch(error => {
          console.error('Erro ao salvar a receita:', error);
          Alert.alert('Ocorreu um erro ao salvar a receita. Tente novamente mais tarde.');
        });
      }
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

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const excluirReceita = () => {
    Alert.alert(
      'Confirmar Exclusão',
      'Você tem certeza que deseja excluir esta receita?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            deleteReceita(receita.id).then(() => {
              navigation.navigate('Dashboard');
              Alert.alert('A receita foi excluída com sucesso!');
            }).catch(error => {
              console.error('Erro ao excluir a receita:', error);
              Alert.alert('Ocorreu um erro ao excluir a receita. Tente novamente mais tarde.');
            });
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Container>
      <Header
        title={receita.id ? 'Editar Receita' : 'Adicionar nova Receita'}
        leftIcon={'home'}
        onPressLeftIcon={() => navigation.navigate('Dashboard')}
      />
      <Body>
        <ScrollView>
          <Text style={styles.Titulo}>1 - Escolha uma Categoria:</Text>
          <View style={styles.ContainerRadio}>
            <RadioButton
              value="Carnes"
              status={categoriaId === 'Carnes' ? 'checked' : 'unchecked'}
              onPress={() => setCategoriaId('Carnes')}
            />
            <Text style={styles.NomeCategoria}>Carnes</Text>

            <RadioButton
              value="Massas"
              status={categoriaId === 'Massas' ? 'checked' : 'unchecked'}
              onPress={() => setCategoriaId('Massas')}
            />
            <Text style={styles.NomeCategoria}>Massas</Text>

            <RadioButton
              value="Doces"
              status={categoriaId === 'Doces' ? 'checked' : 'unchecked'}
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
          <TouchableOpacity style={styles.ImageButton} onPress={pickImage}>
            <Text style={styles.ImageButtonText}>Escolher imagem</Text>
          </TouchableOpacity>

          <View style={styles.ButtonCrud}>
            {receita.id && (
                <Button
                  title="Excluir Receita"
                  color="red"
                  style={styles.Excluir}
                  onPress={excluirReceita}
                />
              )}

            <Button
              title={receita.id ? "Salvar Receita" : "Salvar Receita"}
              icon='content-save-check'
              mode='contained'
              color={'darkgreen'}
              style={styles.Salvar}
              onPress={salvarReceita}
            >
              {receita.id ? "ATUALIZAR" : "SALVAR"}
            </Button>

            
          </View>
        </ScrollView>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  ContainerRadio: {
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
  },
  Titulo: {
    margin: 8,
    marginTop: 18,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  NomeCategoria: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'darkblue',
  },
  ImageButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignSelf: 'flex-start', 
    alignSelf: 'center',
  },
  ImageButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ButtonCrud: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    
  },
  Salvar: {
    fontSize: 20,
    backgroundColor: 'lightgreen',
    marginVertical: 10,
    
  },
  Excluir: {
    fontSize: 20,
    backgroundColor: 'red',
  },
});

export default AdicionarReceita;
