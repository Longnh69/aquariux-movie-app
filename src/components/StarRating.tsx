import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface StarRatingProps {
  rating: number;
}

export const StarRating: FC<StarRatingProps> = ({ rating }) => (
  <View style={styles.starRow}>
    {[1, 2, 3, 4, 5].map(i => (
      <Text
        key={i}
        style={{
          fontSize: 10,
          color: i <= Math.round(rating / 2) ? '#F5C518' : '#1E2E3E',
        }}
      >
        ★
      </Text>
    ))}
    <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
  </View>
);
