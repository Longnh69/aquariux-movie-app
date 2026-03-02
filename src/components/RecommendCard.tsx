import { FC } from 'react';
import { Movie } from '../types/ComponentsTypes';
import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { RatingBadge } from './RatingBadge';
import appConfig from '../config/app.config';

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
      source={{ uri: `${appConfig.IMG.poster}${movie.poster_path}` }}
      style={styles.recPoster}
      resizeMode="cover"
    />
    <Text style={styles.recTitle} numberOfLines={2}>
      {movie.original_title}
    </Text>
    <RatingBadge rating={movie.vote_average} />
  </TouchableOpacity>
);
