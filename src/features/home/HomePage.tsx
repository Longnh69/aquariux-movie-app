import React, { FC, useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ListRenderItemInfo,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  type DropdownItem,
  type Movie,
  type MovieCategory,
} from '../../types/ComponentsTypes';
import { RootStackParamList } from '../../types/NavigationTypes';
import { useMovieFilterStore } from './hooks/useMovieFilterStore';
import { MovieCard } from '../../components/MovieCard';
import { Dropdown } from '../../components/PrimaryDropdown';
import { colors, radius, spacing, typography } from '../../theme/common';
import { PrimaryButton } from '../../components/PrimaryButton';
import useGetMovieList from './hooks/useGetMovieList';
// import { useMovieFilter } from '../hooks/useMovieFilter';
// import { MovieCard, Dropdown } from '../components/movie';

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Tab'>;

const CATEGORY_OPTIONS: DropdownItem[] = [
  { value: 'now_playing', label: 'Now Playing' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'popular', label: 'Popular' },
];

const SORT_OPTIONS: DropdownItem[] = [
  { value: 'alpha', label: 'By alphabetical order' },
  { value: 'rating', label: 'By rating' },
  { value: 'date', label: 'By release date' },
];

const INITIAL_VISIBLE = 4;

const HomeScreen = () => {
  const navigation = useNavigation<HomeNavProp>();
  const {
    category,
    sortKey,
    searchQuery,
    page,

    setCategory,
    setSortKey,
    setSearchQuery,
  } = useMovieFilterStore();
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  const {} = useGetMovieList({
    type: category,
    page,
  });

  const handleMoviePress = useCallback(
    (movie: Movie) => {
      navigation.navigate('Detail', { movieId: movie.id });
    },
    [navigation],
  );

  const handleCategoryChange = useCallback(
    (value: MovieCategory) => {
      setCategory(value);
      setVisible(INITIAL_VISIBLE);
    },
    [setCategory],
  );

  const visibleMovies: any[] = [];
  const remaining = 0;

  const renderItem = ({ item }: ListRenderItemInfo<Movie>) => (
    <MovieCard movie={item} onPress={() => handleMoviePress(item)} />
  );

  const ListHeader = (
    <>
      {/* Hero Banner */}
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3D6XGkVA.jpg',
        }}
        style={styles.hero}
        blurRadius={8}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.heroEyebrow}>NOW TRENDING</Text>
          <Text style={styles.heroTitle}>
            Discover Your{'\n'}Next Favorite Film
          </Text>
        </View>
      </ImageBackground>

      {/* Filter Bar */}
      <View style={styles.filterBar}>
        <Dropdown
          items={CATEGORY_OPTIONS}
          selected={category}
          onSelect={handleCategoryChange}
        />
        <View style={styles.filterGap} />
        <Dropdown
          items={SORT_OPTIONS}
          selected={sortKey}
          onSelect={value => setSortKey(value as any)}
          prefix="Sort by:"
        />
        <View style={styles.filterGap} />

        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchInput}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search movies..."
              placeholderTextColor={colors.text.faint}
              style={styles.searchText}
            />
            {!!searchQuery && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Text style={styles.searchClear}>✕</Text>
              </TouchableOpacity>
            )}
          </View>
          <PrimaryButton
            label="Search"
            onPress={() => {}}
            style={styles.searchBtn}
          />
        </View>
      </View>

      {/* List label */}
      <View style={styles.listHeader}>
        <Text style={styles.listCount}>0 movies</Text>
      </View>
    </>
  );

  const ListFooter = (
    <View style={styles.listFooter}>
      {remaining > 0 ? (
        <PrimaryButton
          label={`Load More (${remaining} remaining)`}
          onPress={() => setVisible(v => v + 4)}
        />
      ) : (
        <Text style={styles.allLoaded}>─ All 0 movies shown ─</Text>
      )}
    </View>
  );

  const ListEmpty = (
    <View style={styles.empty}>
      <Text style={styles.emptyIcon}>🎬</Text>
      <Text style={styles.emptyText}>No movies found</Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={visibleMovies}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        ListEmptyComponent={ListEmpty}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: spacing.md }} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darker,
  },
  hero: {
    height: 160,
    justifyContent: 'flex-end',
  },
  heroOverlay: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
    backgroundColor: 'rgba(8,27,46,0.72)',
  },
  heroEyebrow: {
    fontSize: typography.size.xs,
    color: colors.accent,
    fontWeight: '700',
    letterSpacing: 2.5,
    marginBottom: 4,
  },
  heroTitle: {
    fontFamily: typography.family.display,
    fontSize: 26,
    color: colors.text.primary,
    letterSpacing: 1,
    lineHeight: 30,
  },
  filterBar: {
    padding: spacing.lg,
    backgroundColor: colors.dark,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: spacing.sm,
  },
  filterGap: {
    height: spacing.xs,
  },
  searchRow: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 1,
    borderWidth: 1,
    borderColor: `${colors.accent}22`,
  },
  searchIcon: {
    fontSize: 13,
    color: colors.text.faint,
  },
  searchText: {
    flex: 1,
    color: colors.text.primary,
    fontSize: typography.size.base,
    padding: 0,
  },
  searchClear: {
    color: colors.text.faint,
    fontSize: 12,
  },
  searchBtn: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md - 1,
    borderRadius: radius.md,
  },
  listHeader: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  listCount: {
    fontSize: typography.size.xs,
    color: colors.text.muted,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  listFooter: {
    marginTop: spacing.lg,
  },
  allLoaded: {
    textAlign: 'center',
    color: colors.text.faint,
    fontSize: typography.size.xs,
    paddingVertical: spacing.sm,
  },
  empty: {
    alignItems: 'center',
    paddingVertical: 60,
    gap: spacing.md,
  },
  emptyIcon: {
    fontSize: 44,
  },
  emptyText: {
    fontSize: typography.size.md,
    color: colors.text.muted,
  },
});
