import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const ItemCard = ({ titulo, nota, imagem, categoria, style , onPress }) => {
  return (
    <Card style={style} onPress={onPress} mode='outlined'>
      <Card.Content>
        {
          imagem && <Card.Cover style={styles.cardImage} source={{ uri: imagem }}/>
        }
        <Text variant="titleLarge">{titulo || categoria}</Text>
        {
          nota && <StarRatingDisplay rating={nota} starSize={20}/>
        }
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
