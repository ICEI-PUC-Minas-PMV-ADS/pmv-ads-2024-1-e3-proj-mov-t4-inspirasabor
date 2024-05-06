import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../components/Container';
import Body from '../components/Body';
import Header from '../components/Header';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { RadioButton, Text, TextInput, Button } from 'react-native-paper';
import Input from "../components/Input";
import { categoria } from '../services/categorias.service';
//import jsonData from '../db/db.json'; 

const NovaReceita = () => {

    const navigation = useNavigation();
    const [AdicionarReceita, setAdicionarReceita] = useState([]);
    const [tituloReceita, setTituloReceita] = useState([]);
    const [ingredientes, setIngredientes] = useState([]);
    const [modoPreparo, setModoPreparo] = useState([]);
    
    const [categoria, setCategoria] = React.useState('Carnes');
    
    return (
      <Container>
            <Header
                title={'Adicionar nova Receita'}
                leftIcon={'home'}
                onPressLeftIcon={() => navigation.navigate('Dashboard')}
            />
            <Body>

              <Text style={styles.Titulo}>1 - Escolha uma Categoria:</Text>
            
              <View style={styles.ContainerRadio}>

                <RadioButton
                  value="Carnes"
                  status={ categoria === 'Carnes' ? 'checked' : 'unchecked' }
                  onPress={() => setCategoria('Carnes')}
                />
                <Text style={styles.NomeCategoria}>Carnes</Text>

                <RadioButton
                  value="Doces"
                  status={ categoria === 'Doces' ? 'checked' : 'unchecked' }
                  onPress={() => setCategoria('Doces')}
                />
                <Text style={styles.NomeCategoria}>Doces</Text>

                <RadioButton
                  value="Massas"
                  status={ categoria === 'Massas' ? 'checked' : 'unchecked' }
                  onPress={() => setCategoria('Massas')}
                />
                <Text style={styles.NomeCategoria}>Massas</Text>

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


            <Button 
              icon='content-save-check' 
              mode='conteined' 
              color={'darkblue'}    
              style={styles.Salvar}
              onPress={() => console.log('A receita foi salva com sucesso!')}>SALVAR
            </Button>
            
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

export default NovaReceita;
