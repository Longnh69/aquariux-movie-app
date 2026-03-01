import { FC } from 'react';
import { CastMember } from '../types/ComponentsTypes';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

interface CastCardProps {
  member: CastMember;
}

export const CastCard: FC<CastCardProps> = ({ member }) => (
  <View style={styles.castCard}>
    <Image
      source={{ uri: member.img }}
      style={styles.castImage}
      resizeMode="cover"
    />
    <Text style={styles.castName} numberOfLines={2}>
      {member.name}
    </Text>
    <Text style={styles.castRole} numberOfLines={1}>
      {member.role}
    </Text>
  </View>
);
