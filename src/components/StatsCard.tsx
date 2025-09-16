import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { styles } from '../styles/components/StatsCard.styles';
import { StatsCardProps } from '../types/components';

export const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, onPress }) => {
  const getAccessibilityLabel = () => {
    return `${title}: ${value}`;
  };

  const getAccessibilityHint = () => {
    return onPress ? 'Double tap to view details' : undefined;
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress} 
      activeOpacity={0.7}
      accessibilityRole={onPress ? "button" : "text"}
      accessibilityLabel={getAccessibilityLabel()}
      accessibilityHint={getAccessibilityHint()}
    >
      <Ionicons 
        name={icon as any} 
        size={24} 
        color={Colors.textLight}
        accessibilityLabel={`${title} icon`}
      />
      <Text 
        style={styles.title}
        accessibilityRole="text"
      >
        {title}
      </Text>
      <Text 
        style={styles.value}
        accessibilityRole="text"
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
};

