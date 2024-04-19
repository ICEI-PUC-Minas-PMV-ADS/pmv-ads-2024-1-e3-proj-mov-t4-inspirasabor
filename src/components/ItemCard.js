import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import StarRating from '../components/StarRating';

const ItemCard = ({ titulo, nota, imagem, categoria, style , onPress }) => {
  return (
    <Card style={style} onPress={onPress} mode='outlined'>
      <Card.Content>
        <Card.Cover style={styles.cardImage} source={{ uri: imagem }} />
        <Text variant="titleLarge">{titulo || categoria}</Text>
        <StarRating rating={nota} />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    borderRadius: 5,
  },
});

export default ItemCard;