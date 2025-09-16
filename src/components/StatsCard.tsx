import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

interface StatsCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string | number;
}

export const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={24} color={Colors.textLight} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  title: {
    color: Colors.textLight,
    fontSize: 12,
    fontWeight: '500',
    marginTop: 8,
    textAlign: 'center',
  },
  value: {
    color: Colors.textLight,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
