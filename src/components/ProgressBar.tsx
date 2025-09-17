import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/components/ProgressBar.styles';
import { Colors } from '../constants/colors';

interface ProgressBarProps {
  current: number;
  target: number;
  label?: string;
  showPercentage?: boolean;
  color?: string;
  backgroundColor?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  target,
  label,
  showPercentage = true,
  color,
  backgroundColor,
}) => {
  const percentage = Math.min((current / target) * 100, 100);
  const isComplete = current >= target;

  const progressColor = color || (isComplete ? '#35A131' : Colors.primary);
  const bgColor = backgroundColor || Colors.border;

  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          {showPercentage && (
            <Text style={styles.percentage}>
              {Math.round(percentage)}%
            </Text>
          )}
        </View>
      )}
      
      <View style={[styles.progressContainer, { backgroundColor: bgColor }]}>
        <View
          style={[
            styles.progressBar,
            {
              width: `${percentage}%`,
              backgroundColor: progressColor,
            },
          ]}
        />
      </View>
      
      <View style={styles.statsContainer}>
        <Text style={styles.currentText}>{current.toLocaleString()}</Text>
        <Text style={styles.separator}>/</Text>
        <Text style={styles.targetText}>{target.toLocaleString()} Chips</Text>
      </View>
    </View>
  );
};
