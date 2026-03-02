import React, { FC } from 'react';
import {
  View, Text, Image, ScrollView, TouchableOpacity,
  StyleSheet, ImageBackground, ActivityIndicator,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp} from '@react-navigation/native-stack';


import { RootStackParamList } from '../../types/NavigationTypes';
import useGetDetail from './hooks/useGetDetail';
import useGetRecommendMovie from './hooks/useGetRecommendMovies';
import { colors, radius, shadows, spacing, typography } from '../../theme/common';
import { GenreChip } from '../../components/PrimaryChip';
import { ScoreRing } from '../../components/ScoreRing';
import { SectionTitle } from '../../components/SectionTitle';
import { PrimaryButton } from '../../components/PrimaryButton';
import { CastCard } from '../../components/CastCard';
import useGetMovieCast from './hooks/useGetMovieCast';
import { RecommendCard } from '../../components/RecommendCard';
import appConfig from '../../config/app.config';
import { MovieDetail } from './dto/detail.dto';
import { MovieCredits } from './dto/crew-member.dto';
import { safeFormatDate, safeFormatRuntime } from '../../utils/common.util';

type DetailNavProp   = NativeStackNavigationProp<RootStackParamList, 'Detail'>;
type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const DetailScreen: FC = () => {
  const navigation = useNavigation<DetailNavProp>();
  const route      = useRoute<DetailRouteProp>();
  const movieId    = route?.params?.movieId;

  const { data: movie, isLoading, isError } = useGetDetail({id: movieId}) as {
    data: MovieDetail | undefined;
    isLoading: boolean;
  isError: boolean;
  };
  const { data: recMovies = [] }  = useGetRecommendMovie({id: movieId});
  const { data: movieCast }  = useGetMovieCast({id: movieId}) as {
    data: MovieCredits | undefined;
  };

console.log(movie, 'movieeeeeeeeeeeee');
  const recommendations = recMovies?.slice(0, 8) || [];
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator color={colors.accent} size="large" />
        <Text style={styles.loadingText}>Loading…</Text>
      </View>
    );
  }

  if (isError || !movie) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorIcon}>⚠️</Text>
        <Text style={styles.errorText}>Could not load movie details.</Text>
        <Text style={styles.errorHint}>Check your API token in src/api/config.ts</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const score = Math.round(movie?.vote_average * 10);

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>

      {/* ── Backdrop ── */}
      {movie?.backdrop_path ? (
        <ImageBackground source={{ uri: `${appConfig.IMG.backdrop}${movie?.backdrop_path}` }} style={styles.backdrop}>
          <View style={styles.backdropOverlay}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
              accessibilityLabel="Go back"
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.backdropTitle} numberOfLines={2}>
              {movie?.original_title} ({movie?.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'})
            </Text>
          </View>
        </ImageBackground>
      ) : (
        <View style={[styles.backdrop, styles.backdropFallback]}>
          <View style={styles.backdropOverlay}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.backdropTitle} numberOfLines={2}>
              {movie?.original_title} ({movie?.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'})
            </Text>
          </View>
        </View>
      )}

      {/* ── Info Panel ── */}
      <View style={styles.infoPanel}>

        {/* Poster + Meta */}
        <View style={styles.posterMetaRow}>
          <View style={[styles.posterFloat, shadows.poster]}>
            {movie?.poster_path ? (
              <Image source={{ uri: `${appConfig.IMG.poster}${movie?.poster_path}` }} style={styles.posterImg} resizeMode="cover" />
            ) : (
              <View style={[styles.posterImg, styles.posterFallback]}>
                <Text style={styles.posterFallbackText}>🎬</Text>
              </View>
            )}
          </View>

          <View style={styles.metaCol}>
            {/* Date · Runtime */}
            <View style={styles.metaTopRow}>
              <Text style={styles.metaDate}>{safeFormatDate(movie?.release_date)}</Text>
              {movie?.runtime && (
                <>
                  <Text style={styles.metaDot}>•</Text>
                  <Text style={styles.metaDate}>{safeFormatRuntime(movie?.runtime.toString())}</Text>
                </>
              )}
            </View>

            {/* Status badge */}
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{movie?.status}</Text>
            </View>

            {/* Genres */}
            <View style={styles.genreRow}>
              {movie?.genres?.map(g => <GenreChip key={g?.id} label={g?.name} />)}
            </View>

            {/* Language */}
            <Text style={styles.metaLine}>
              Language: <Text style={styles.metaValue}>{movie?.original_language?.toLocaleUpperCase()}</Text>
            </Text>
          </View>
        </View>

        {/* Score + Credits */}
        <View style={styles.scoreRow}>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <ScoreRing score={score} />
            <Text style={styles.creditsLabel}>USER SCORE</Text>
          </View>
          <View style={styles.creditsCol}>
            {movieCast?.crew && (
              <>
                <Text style={styles.creditName}>{movieCast?.crew?.filter(c => c.job === 'Director')?.map(i => i?.name)?.join(', ')}</Text>
                <Text style={styles.creditRole}>Director</Text>

              <View style={{ marginTop: spacing.sm }}>
                <Text style={styles.creditName}>{movieCast?.crew?.filter(c => c.job === 'Writer')?.map(i => i?.name)?.join(', ')}</Text>
                <Text style={styles.creditRole}>Screenplay</Text>
              </View>
              </>
            )}
              

          </View>
        </View>

        {/* Tagline */}
        {!!movie?.tagline && (
          <View style={styles.taglineWrapper}>
            <Text style={styles.tagline}>"{movie?.tagline}"</Text>
          </View>
        )}

        {/* Overview */}
        <View style={styles.section}>
          <SectionTitle>Overview</SectionTitle>
          <Text style={styles.overview}>{movie?.overview || 'No overview available.'}</Text>
        </View>

        {/* Watchlist CTA */}
        {/* <PrimaryButton
          label={'Add To Watchlist'}
          icon={'+'}
          variant={'primary'}
          onPress={() => {}}
          style={styles.watchlistBtn}
        /> */}
      </View>

      {/* ── Cast ── */}
      {movieCast?.cast && movieCast?.cast?.length > 0 && (
        <View style={styles.sectionBlock}>
          <View style={styles.sectionPad}>
            <SectionTitle>Top Billed Cast</SectionTitle>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.hScroll}
          >
            {movieCast?.cast?.map(member => (
              <CastCard key={member.id} member={member} />
            ))}
          </ScrollView>
        </View>
      )}

      {/* ── Recommendations ── */}
      {recommendations.length > 0 && (
        <View style={[styles.sectionBlock, styles.bottomSection]}>
          <View style={styles.sectionPad}>
            <SectionTitle>Recommendations</SectionTitle>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.hScroll}
          >
            {recommendations.map(rec => (
              <RecommendCard
                key={rec.id}
                movie={rec}
                onPress={() => navigation.push('Detail', { movieId: rec.id })}
              />
            ))}
          </ScrollView>
        </View>
      )}

    </ScrollView>
  );
};

export default DetailScreen;

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.darker },

  centered: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    backgroundColor: colors.darker, gap: spacing.md, padding: spacing.xl,
  },
  loadingText: { color: colors.text.muted, fontSize: typography.size.base },
  errorIcon:   { fontSize: 40 },
  errorText:   { color: colors.text.muted, fontSize: typography.size.lg, textAlign: 'center' },
  errorHint:   { color: colors.text.faint, fontSize: typography.size.xs, textAlign: 'center' },
  backBtn:     { marginTop: spacing.md, padding: spacing.md },
  backBtnText: { color: colors.accent, fontSize: typography.size.md },

  // Backdrop
  backdrop:         { height: 240, width: '100%' },
  backdropFallback: { backgroundColor: colors.dark },
  backdropOverlay: {
    flex:            1,
    backgroundColor: 'rgba(8,27,46,0.6)',
    justifyContent:  'space-between',
    padding:         spacing.lg,
  },
  backButton: {
    width: 38, height: 38, borderRadius: 19,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start',
  },
  backIcon:      { color: 'white', fontSize: 18 },
  backdropTitle: {
    fontFamily:    typography.family.display,
    fontSize:      typography.size['2xl'],
    color:         'white',
    letterSpacing: 1,
    paddingLeft:   94 + spacing.lg,
  },

  // Info panel
  infoPanel: {
    backgroundColor:   colors.dark,
    padding:           spacing.lg,
    paddingBottom:     spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  posterMetaRow: {
    flexDirection: 'row',
    gap:           spacing.lg,
    alignItems:    'flex-start',
    marginTop:     -60,
    marginBottom:  spacing.lg,
  },
  posterFloat: {
    width:           94,
    height:          140,
    borderRadius:    radius.lg,
    overflow:        'hidden',
    borderWidth:     2,
    borderColor:     `${colors.accent}33`,
    backgroundColor: colors.surface,
    flexShrink:      0,
  },
  posterImg:         { width: '100%', height: '100%' },
  posterFallback:    { backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' },
  posterFallbackText:{ fontSize: 36 },
  metaCol:    { flex: 1, paddingTop: spacing['2xl'], gap: spacing.sm },
  metaTopRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: spacing.sm },
  metaDate:   { fontSize: typography.size.xs, color: colors.text.muted },
  metaDot:    { fontSize: typography.size.xs, color: colors.text.faint },
  statusBadge: {
    alignSelf:         'flex-start',
    backgroundColor:   `${colors.accent2}18`,
    borderWidth:       1,
    borderColor:       `${colors.accent2}33`,
    borderRadius:      radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical:   2,
  },
  statusText: { fontSize: typography.size.xs, color: colors.accent2, fontWeight: '600' },
  genreRow:   { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
  metaLine:   { fontSize: typography.size.xs, color: colors.text.muted },
  metaValue:  { color: colors.text.secondary, fontWeight: '500' },

  // Score + credits
  scoreRow:     { flexDirection: 'row', alignItems: 'center', gap: spacing.xl, marginBottom: spacing.md },
  creditsCol:   { flex: 1 },
  creditsLabel: { fontSize: typography.size.xs, color: colors.text.faint, fontWeight: '700', letterSpacing: 1.5, marginBottom: spacing.sm },
  creditName:   { fontSize: typography.size.base, color: colors.text.primary, fontWeight: '700' },
  creditRole:   { fontSize: typography.size.xs, color: colors.accent, marginTop: 1 },

  // Tagline
  taglineWrapper: {
    borderLeftWidth:  3,
    borderLeftColor:  `${colors.accent}55`,
    paddingLeft:      spacing.md,
    marginBottom:     spacing.md,
    marginTop:        spacing.xs,
  },
  tagline: { fontSize: typography.size.base, color: '#7788AA', fontStyle: 'italic', lineHeight: 20 },

  // Overview
  section:     { marginTop: spacing.sm },
  overview:    { fontSize: typography.size.base, color: '#7788AA', lineHeight: 22 },
  watchlistBtn:{ marginTop: spacing.lg },

  // Cast / Recs
  sectionBlock:  { paddingTop: spacing.xl },
  sectionPad:    { paddingHorizontal: spacing.lg },
  hScroll:       { paddingHorizontal: spacing.lg, paddingBottom: spacing.sm },
  bottomSection: { paddingBottom: spacing['3xl'] },
});