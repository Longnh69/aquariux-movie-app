import { FC } from 'react';
import { colors } from '../theme/common';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface RatingBadgeProps {
  rating: number;
}

export const RatingBadge: FC<RatingBadgeProps> = ({ rating }) => {
  const c =
    rating >= 7.5
      ? colors.rating.high
      : rating >= 6
      ? colors.rating.mid
      : colors.rating.low;
  return (
    <View
      style={[
        styles.ratingBadge,
        { backgroundColor: `${c}1A`, borderColor: `${c}44` },
      ]}
    >
      <Text style={[styles.ratingBadgeText, { color: c }]}>
        ⭐ {rating.toFixed(1)}
      </Text>
    </View>
  );
};
