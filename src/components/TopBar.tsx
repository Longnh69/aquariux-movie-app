import { DrawerActions, useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { styles } from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/common';

interface TopBarProps {
  title?: string;
}

export const TopBar: FC<TopBarProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.topBar}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        style={styles.menuButton}
        accessibilityLabel="Open navigation menu"
      >
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>THE MOVIE DB</Text>
        <View style={styles.logoDots}>
          {[colors.accent, colors.accent2, '#E74C3C'].map((c, i) => (
            <View
              key={i}
              style={[
                styles.logoDot,
                { width: i === 1 ? 16 : 10, backgroundColor: c },
              ]}
            />
          ))}
        </View>
      </View>

      {/* Avatar */}
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>J</Text>
      </View>
    </View>
  );
};
