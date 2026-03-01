import { FC } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { styles } from './styles';

interface SectionTitleProps {
  children: string;
  style?: ViewStyle;
}

export const SectionTitle: FC<SectionTitleProps> = ({ children, style }) => (
  <View style={[styles.sectionTitleRow, style]}>
    <Text style={styles.sectionTitleText}>{children}</Text>
    <View style={styles.sectionTitleLine} />
  </View>
);
