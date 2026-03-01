import { FC } from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';
import { colors, shadows } from '../theme/common';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'success';
  style?: ViewStyle;
  icon?: string;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  style,
  icon,
}) => {
  const bgColor = variant === 'success' ? '#1A5C3A' : colors.accent;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.82}
      style={[
        styles.primaryBtn,
        { backgroundColor: bgColor },
        shadows.glow,
        style,
      ]}
    >
      {icon ? <Text style={styles.primaryBtnIcon}>{icon}</Text> : null}
      <Text style={styles.primaryBtnText}>{label}</Text>
    </TouchableOpacity>
  );
};
