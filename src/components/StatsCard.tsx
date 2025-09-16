import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors, Fonts } from '../constants/colors';

interface StatsCardProps {
  icon: keyof typeof FontAwesome.glyphMap;
  title: string;
  value: string | number;
}

export const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={icon} size={24} color={Colors.textLight} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  title: {
    color: Colors.textLight,
    fontSize: 13,
    fontFamily: Fonts.bold,
    marginTop: 8,
    textAlign: 'center',
  },
  value: {
    color: Colors.textLight,
    fontSize: 18,
    fontFamily: Fonts.regular,
    marginTop: 4,
  },
});
