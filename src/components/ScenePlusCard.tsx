import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/components/ScenePlusCard.styles';

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

