import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const ReceitaCard = ({ titulo, nota, imagem, categoria, style , onPress }) => {
  return (
    <Card style={style} onPress={onPress} mode='outlined'>
      <Card.Content>
        {
          imagem && <Card.Cover style={styles.cardImage} source={{ uri: imagem }}/>
        }
        {
          titulo && <Text style={styles.cardText} variant="titleLarge">{titulo}</Text>
        }
        {
          categoria && <Text style={styles.cardText} variant="titleLarge">{categoria}</Text>
        }
        {
          nota >= 0 && <StarRatingDisplay rating={nota} starSize={20}/>
        }
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    borderRadius: 5,
    marginBottom: 5
  },
  cardText: {
    marginBottom: 5
  }
});

export default ReceitaCard;
