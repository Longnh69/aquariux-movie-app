import { FC } from 'react';
import { Movie } from '../types/ComponentsTypes';
import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { RatingBadge } from './RatingBadge';

interface RecommendCardProps {
  movie: Movie;
  onPress: () => void;
}

export const RecommendCard: FC<RecommendCardProps> = ({ movie, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.82}
    style={styles.recCard}
  >
    <Image
      source={{ uri: movie.poster }}
      style={styles.recPoster}
      resizeMode="cover"
    />
    <Text style={styles.recTitle} numberOfLines={2}>
      {movie.title}
    </Text>
    <RatingBadge rating={movie.rating} />
  </TouchableOpacity>
);
