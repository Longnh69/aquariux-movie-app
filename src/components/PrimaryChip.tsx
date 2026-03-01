import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface PrimaryChip {
  label: string;
}

export const GenreChip: FC<PrimaryChip> = ({ label }) => (
  <View style={styles.genreChip}>
    <Text style={styles.genreChipText}>{label}</Text>
  </View>
);
