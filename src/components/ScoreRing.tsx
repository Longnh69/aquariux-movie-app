import { FC } from 'react';
import { colors } from '../theme/common';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

interface ScoreRingProps {
  score: number;
  size?: number;
}

export const ScoreRing: FC<ScoreRingProps> = ({ score, size = 68 }) => {
  const r = size * 0.41;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const ringColor =
    score >= 70 ? colors.accent2 : score >= 50 ? colors.gold : '#C0392B';
  const center = size / 2;

  return (
    <Svg width={size} height={size}>
      <Circle
        cx={center}
        cy={center}
        r={r}
        fill={colors.darker}
        stroke={colors.surface}
        strokeWidth={5}
      />
      <Circle
        cx={center}
        cy={center}
        r={r}
        fill="none"
        stroke={ringColor}
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray={`${circ} ${circ}`}
        strokeDashoffset={offset}
        rotation="-90"
        origin={`${center}, ${center}`}
      />
      <SvgText
        x={center}
        y={center + 4}
        textAnchor="middle"
        fill="white"
        fontSize={12}
        fontWeight="700"
      >
        {score}%
      </SvgText>
    </Svg>
  );
};
