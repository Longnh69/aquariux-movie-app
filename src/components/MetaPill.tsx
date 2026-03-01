import { FC } from 'react';
import { Text, TextStyle } from 'react-native';
import { styles } from './styles';

interface MetaPillProps {
  label: string;
  style?: TextStyle;
}

export const MetaPill: FC<MetaPillProps> = ({ label, style }) => (
  <Text style={[styles.metaPill, style]}>{label}</Text>
);
