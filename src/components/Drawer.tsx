import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import { FC } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const CustomDrawerContent: FC<DrawerContentComponentProps> = props => {
  return (
    <View style={styles.drawer}>
      {/* Header */}
      <View style={styles.drawerHeader}>
        <View style={styles.drawerAvatar}>
          <Text style={styles.drawerAvatarText}>J</Text>
        </View>
        <View>
          <Text style={styles.drawerName}>John Lee</Text>
          <Text style={styles.drawerSince}>Member since August 2023</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.drawerStats}>
        {(
          [
            ['24', 'Watched'],
            ['3', 'Watchlist'],
          ] as [string, string][]
        ).map(([n, l]) => (
          <View key={l} style={styles.drawerStatPill}>
            <Text style={styles.drawerStatNum}>{n}</Text>
            <Text style={styles.drawerStatLabel}>{l}</Text>
          </View>
        ))}
      </View>

      {/* Divider */}
      <View style={styles.drawerDivider} />

      {/* Nav items from React Navigation */}
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <DrawerItemList {...props} />
      </ScrollView>

      {/* Divider */}
      <View style={styles.drawerDivider} />

      {/* Sign Out */}
      <TouchableOpacity style={styles.signOutRow} activeOpacity={0.7}>
        <Text style={styles.signOutIcon}>🚪</Text>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
