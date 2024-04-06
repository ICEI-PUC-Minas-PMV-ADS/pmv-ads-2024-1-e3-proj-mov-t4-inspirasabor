import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text} from 'react-native-paper';

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  const starElements = [];

  for (let i = 0; i < filledStars; i++) {
    starElements.push(
      <Text key={i} style={styles.star}>
        ★
      </Text>
    );
  }

  if (hasHalfStar) {
    starElements.push(
      <Text key="half-star" style={styles.star}>
        ✦
      </Text>
    );
  }

  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < emptyStars; i++) {
    starElements.push(
      <Text key={`empty-${i}`} style={styles.star}>
        ☆
      </Text>
    );
  }

  return <View style={styles.starRating}>{starElements}</View>;
};

const styles = StyleSheet.create({
  starRating: {
    flexDirection: 'row',
  },
  star: {
    color: 'gold',
    fontSize: 20,
  },
});

export default StarRating;