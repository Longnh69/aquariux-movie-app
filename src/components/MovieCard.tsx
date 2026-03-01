import { FC } from 'react';
import { Movie } from '../types/ComponentsTypes';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { shadows } from '../theme/common';
import { StarRating } from './StarRating';
import { GenreChip } from './PrimaryChip';

interface MovieCardProps {
  movie: Movie;
  inWatchlist?: boolean;
  onPress: () => void;
  onBookmark?: () => void;
}

export const MovieCard: FC<MovieCardProps> = ({
  movie,
  inWatchlist,
  onPress,
  onBookmark,
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.85}
    style={[styles.card, shadows.card]}
  >
    {/* Poster */}
    <View style={[styles.posterWrapper, shadows.poster]}>
      <Image
        source={{ uri: movie.poster }}
        style={styles.poster}
        resizeMode="cover"
      />
    </View>

    {/* Content */}
    <View style={styles.cardContent}>
      <View style={styles.cardTop}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {movie.title}
        </Text>
        <TouchableOpacity
          onPress={onBookmark}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityLabel={
            inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'
          }
        >
          <Text
            style={[styles.bookmarkIcon, inWatchlist && styles.bookmarkActive]}
          >
            🔖
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.cardDate}>{movie.date}</Text>
      <StarRating rating={movie.rating} />

      <View style={styles.genreRow}>
        {movie.genre.slice(0, 2).map(g => (
          <GenreChip key={g} label={g} />
        ))}
      </View>

      <Text style={styles.cardOverview} numberOfLines={2}>
        {movie.overview}
      </Text>
    </View>
  </TouchableOpacity>
);
