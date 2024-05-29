import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const FavoritasCard = ({ titulo, nota, imagem, style , onPress }) => {
  return (
    <Card style={style} onPress={onPress} mode='outlined'>
      <Card.Content>
        {
          imagem && <Card.Cover style={styles.cardImage} source={{ uri: imagem }}/>
        }
        <Text variant="titleLarge">{titulo}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    borderRadius: 5,
  },
});

export default FavoritasCard;