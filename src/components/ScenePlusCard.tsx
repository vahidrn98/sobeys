import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '../constants/colors';

interface ScenePlusCardProps {
  points: number;
  onViewAll?: () => void;
}

export const ScenePlusCard: React.FC<ScenePlusCardProps> = ({ 
  points, 
  onViewAll 
}) => {
  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Scene</Text>
          <View style={styles.logoIcon}>
            <View style={[styles.circle, styles.circleRed]} />
            <View style={[styles.circle, styles.circleGreen]} />
            <View style={[styles.circle, styles.circleBlue]} />
            <View style={[styles.circle, styles.circlePurple]} />
          </View>
          <Text style={styles.trademark}>™</Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.title}>Scene+ Points</Text>
        <Text style={styles.description}>Manage your Scene+ points and rewards.</Text>
        
        {/* Points Display Area */}
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsLabel}>You haved earned</Text>
          <Text style={styles.pointsValue}>{points.toLocaleString()} Points</Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.viewAllButton} onPress={onViewAll}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  header: {
    backgroundColor: Colors.cardBackground,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    fontFamily: Fonts.titleBold,
    color: Colors.textLight,
    marginRight: 8,
    paddingVertical: 8,
  },
  logoIcon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 20,
    height: 20,
    marginRight: 4,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 1,
  },
  circleRed: {
    backgroundColor: '#FF4444',
  },
  circleGreen: {
    backgroundColor: '#44FF44',
  },
  circleBlue: {
    backgroundColor: '#4444FF',
  },
  circlePurple: {
    backgroundColor: '#FF44FF',
  },
  trademark: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.textLight,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.titleBold,
    color: Colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.text,
    marginBottom: 20,
    lineHeight: 20,
  },
  pointsContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  pointsLabel: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.text,
    marginBottom: 8,
  },
  pointsValue: {
    fontSize: 32,
    fontFamily: Fonts.titleBold,
    color: Colors.text,
  },
  viewAllButton: {
    backgroundColor: Colors.primary,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.textLight,
  },
});
