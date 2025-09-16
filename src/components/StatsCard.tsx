import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { styles } from '../styles/components/StatsCard.styles';
import { StatsCardProps } from '../types/components';

export const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Ionicons name={icon as any} size={24} color={Colors.textLight} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
};

