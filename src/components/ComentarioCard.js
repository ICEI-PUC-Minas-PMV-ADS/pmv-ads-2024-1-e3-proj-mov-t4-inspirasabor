import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const ComentatioCard = ({ nomeUsuario, comentario }) => {
  return (
    <Card style={styles.card} mode='outlined'>
      <Card.Content>
        <Text style={styles.text} variant="titleLarge">{nomeUsuario}</Text>
        <Text variant="titleLarge">"{comentario}"</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    marginHorizontal: 8,
    width: 200
  },
  text: {
    marginBottom: 20
  }
});

export default ComentatioCard;
