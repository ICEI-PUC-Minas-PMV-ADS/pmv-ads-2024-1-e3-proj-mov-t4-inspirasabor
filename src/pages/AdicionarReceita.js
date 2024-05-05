import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../components/Container';
import Body from '../components/Body';
import Header from '../components/Header';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { RadioButton, Text } from 'react-native-paper';
import { categoria } from '../services/categorias.service';
//import jsonData from '../db/db.json'; 

const NovaReceita = () => {

    const navigation = useNavigation();
    const [AdicionarReceita, setAdicionarReceita] = useState([]);
    const [categoria, setCategoria] = React.useState('Carnes');
    
    return (
      <Container>
            <Header
                title={'Adicionar nova Receita'}
                leftIcon={'home'}
                onPressLeftIcon={() => navigation.navigate('Dashboard')}
            />
            <Body>

            <Text style={styles.TituloCategoria}>Escolha uma Categoria:</Text>
            
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
  TituloCategoria:{
    margin:8,
    fontSize:20,
    fontWeight:'bold',
  },
  NomeCategoria:{
    fontSize:15,
    fontWeight:'bold',
  },
});

export default NovaReceita;