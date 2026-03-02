import { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import appConfig from '../config/app.config';
import { CastMember } from '../features/detail/dto/crew-member.dto';

interface CastCardProps {
  member: CastMember;
}

export const CastCard: FC<CastCardProps> = ({ member }) => (
  <View style={styles.castCard}>
    <Image
      source={{ uri: `${appConfig.IMG.profile}${member?.profile_path}` }}
      style={styles.castImage}
      resizeMode="cover"
    />
    <Text style={styles.castName} numberOfLines={2}>
      {member?.name}
    </Text>
    <Text style={styles.castRole} numberOfLines={1}>
      {member?.character}
    </Text>
  </View>
);
