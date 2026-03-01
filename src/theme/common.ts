export const colors = {
  accent: '#01B4E4',
  accent2: '#90CEA1',
  danger: '#E07060',
  gold: '#D4AF37',
  rating: {
    high: '#90CEA1',
    mid: '#D4AF37',
    low: '#E07060',
  },
  dark: '#0D253F',
  darker: '#081B2E',
  deepest: '#060E19',
  card: '#132335',
  surface: '#1A2E44',
  text: {
    primary: '#FFFFFF',
    secondary: '#AABBCC',
    muted: '#556677',
    faint: '#334455',
  },
  border: '#01B4E422',
} as const;

export const typography = {
  family: {
    display: 'BebasNeue-Regular', // Bebas Neue — install via expo-font or react-native-vector-icons
    body: 'DMSans-Regular',
    bodyMed: 'DMSans-Medium',
    bodySB: 'DMSans-SemiBold',
    bodyBold: 'DMSans-Bold',
  },
  size: {
    xs: 10,
    sm: 11,
    base: 13,
    md: 14,
    lg: 17,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.7,
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
} as const;

export const radius = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 20,
  full: 999,
} as const;

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 16,
    elevation: 10,
  },
  poster: {
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.55,
    shadowRadius: 12,
    elevation: 8,
  },
  glow: {
    shadowColor: '#01B4E4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
} as const;
