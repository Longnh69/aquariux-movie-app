import { StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../theme/common';

export const styles = StyleSheet.create({
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  ratingText: {
    fontSize: typography.size.xs,
    color: colors.text.muted,
    marginLeft: 4,
  },
  ratingBadge: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },
  ratingBadgeText: {
    fontSize: typography.size.xs,
    fontWeight: '700',
  },
  genreChip: {
    backgroundColor: `${colors.accent}14`,
    borderWidth: 1,
    borderColor: `${colors.accent}22`,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },
  genreChipText: {
    fontSize: typography.size.xs,
    color: colors.accent,
    fontWeight: '500',
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: spacing.md,
  },
  sectionTitleText: {
    fontFamily: typography.family.display,
    fontSize: typography.size.xl,
    color: colors.text.primary,
    letterSpacing: 1,
  },
  sectionTitleLine: {
    flex: 1,
    height: 1,
    backgroundColor: `${colors.accent}44`,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md + 1,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.lg,
  },
  primaryBtnIcon: {
    fontSize: 16,
  },
  primaryBtnText: {
    color: colors.text.primary,
    fontSize: typography.size.base,
    fontWeight: '700',
  },
  metaPill: {
    fontSize: typography.size.xs,
    color: colors.text.muted,
  },

  // TopBar
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.dark,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuButton: {
    padding: spacing.xs,
  },
  menuIcon: {
    fontSize: 22,
    color: '#889',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontFamily: typography.family.display,
    fontSize: 20,
    letterSpacing: 3,
    color: colors.text.primary,
    lineHeight: 22,
  },
  logoDots: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 3,
    alignItems: 'center',
  },
  logoDot: {
    height: 4,
    borderRadius: 2,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.dark,
  },

  // Drawer
  drawer: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingTop: 44,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.lg,
  },
  drawerAvatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerAvatarText: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.dark,
  },
  drawerName: {
    color: colors.text.primary,
    fontWeight: '700',
    fontSize: typography.size.md,
  },
  drawerSince: {
    color: colors.text.faint,
    fontSize: typography.size.xs,
    marginTop: 2,
  },
  drawerStats: {
    flexDirection: 'row',
    gap: spacing.md,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.lg,
  },
  drawerStatPill: {
    flex: 1,
    backgroundColor: `${colors.accent}0E`,
    borderWidth: 1,
    borderColor: `${colors.accent}22`,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  drawerStatNum: {
    color: colors.accent,
    fontWeight: '700',
    fontSize: typography.size.xl,
  },
  drawerStatLabel: {
    color: colors.text.faint,
    fontSize: typography.size.xs,
    marginTop: 2,
  },
  drawerDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.xl,
    marginVertical: spacing.sm,
  },
  signOutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    marginBottom: spacing.xl,
    backgroundColor: 'rgba(231,76,60,0.08)',
    marginHorizontal: spacing.lg,
    borderRadius: radius.md,
  },
  signOutIcon: {
    fontSize: 17,
  },
  signOutText: {
    color: colors.danger,
    fontSize: typography.size.md,
    fontWeight: '500',
  },

  // MovieCard
  card: {
    flexDirection: 'row',
    gap: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: `${colors.accent}0E`,
  },
  posterWrapper: {
    width: 72,
    height: 108,
    borderRadius: radius.md,
    overflow: 'hidden',
    flexShrink: 0,
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    flex: 1,
    minWidth: 0,
    justifyContent: 'space-between',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: typography.size.md,
    fontWeight: '700',
    color: colors.text.primary,
    lineHeight: 20,
    flex: 1,
    paddingRight: spacing.sm,
  },
  bookmarkIcon: {
    fontSize: 18,
    color: '#2A3A4A',
  },
  bookmarkActive: {
    color: colors.accent,
  },
  cardDate: {
    fontSize: typography.size.sm,
    color: colors.text.faint,
    marginTop: 3,
    marginBottom: 5,
  },
  genreRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 6,
    marginBottom: 4,
  },
  cardOverview: {
    fontSize: typography.size.sm,
    color: '#5A6A7A',
    lineHeight: 16,
    marginTop: 4,
  },

  // CastCard
  castCard: {
    width: 88,
    alignItems: 'center',
    marginRight: spacing.md,
  },
  castImage: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 2,
    borderColor: `${colors.accent}33`,
    marginBottom: spacing.sm,
    backgroundColor: colors.surface,
  },
  castName: {
    fontSize: typography.size.xs,
    color: colors.text.primary,
    fontWeight: '600',
    lineHeight: 14,
    textAlign: 'center',
  },
  castRole: {
    fontSize: 10,
    color: colors.accent,
    marginTop: 2,
    textAlign: 'center',
  },

  // RecommendCard
  recCard: {
    width: 108,
    marginRight: spacing.md,
  },
  recPoster: {
    width: 108,
    height: 158,
    borderRadius: radius.md,
    marginBottom: spacing.sm,
    backgroundColor: colors.surface,
  },
  recTitle: {
    fontSize: typography.size.xs,
    color: colors.text.primary,
    fontWeight: '600',
    lineHeight: 14,
    marginBottom: 4,
  },

  // Dropdown
  dropdownWrapper: {
    position: 'relative',
    zIndex: 10,
  },
  dropdownTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: `${colors.accent}2E`,
    borderRadius: radius.md,
  },
  dropdownTriggerOpen: {
    borderColor: colors.accent,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  dropdownTriggerText: {
    fontSize: typography.size.base,
    color: colors.text.primary,
    flex: 1,
  },
  dropdownPrefix: {
    color: colors.text.muted,
    fontWeight: '400',
  },
  dropdownSelected: {
    color: colors.accent,
    fontWeight: '600',
  },
  dropdownChevron: {
    color: colors.accent,
    fontSize: 11,
  },
  dropdownChevronOpen: {
    transform: [{ rotate: '180deg' }],
  },
  dropdownMenu: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: `${colors.accent}44`,
    borderTopWidth: 0,
    borderBottomLeftRadius: radius.md,
    borderBottomRightRadius: radius.md,
    overflow: 'hidden',
    zIndex: 20,
  },
  dropdownItem: {
    padding: spacing.md,
    borderLeftWidth: 3,
    borderLeftColor: 'transparent',
  },
  dropdownItemActive: {
    backgroundColor: `${colors.accent}20`,
    borderLeftColor: colors.accent,
  },
  dropdownItemText: {
    fontSize: typography.size.base,
    color: '#99AABB',
    fontWeight: '400',
  },
  dropdownItemTextActive: {
    color: colors.accent,
    fontWeight: '600',
  },
});
