import React from 'react';
import { Card, Text, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

const StarCard = ({ title, buttonPlaceHolder, rating, onChange, onPress }) => {
  return (
    <Card style={styles.card} mode='outlined'>
      <Card.Content>
      <Text style={styles.titulo}>{title}</Text>
        <StarRating
           rating={rating}
           onChange={onChange}
           starSize={40}
        />
        <Button style={styles.button} mode="outlined" onPress={onPress}>
            {buttonPlaceHolder}
        </Button>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center'
    },
    card: {
        alignItems: 'center',
        marginTop: 12,
    },
    button: {
        marginTop: 8
    },
});

export default StarCard;
