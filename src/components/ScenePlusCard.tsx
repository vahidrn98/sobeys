import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/components/ScenePlusCard.styles';
import { ScenePlusCardProps } from '../types/components';

export const ScenePlusCard: React.FC<ScenePlusCardProps> = ({ 
  points, 
  onViewAll 
}) => {
  const getAccessibilityLabel = () => {
    return `Scene+ Points. You have earned ${points.toLocaleString()} points. Manage your Scene+ points and rewards.`;
  };

  return (
    <View 
      style={styles.card}
      accessibilityRole="none"
      accessibilityLabel={getAccessibilityLabel()}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text 
            style={styles.logoText}
            accessibilityRole="text"
            accessibilityLabel="Scene logo"
          >
            Scene
          </Text>
          <View 
            style={styles.logoIcon}
            accessibilityRole="text"
            accessibilityLabel="Scene logo icon with colored circles"
          >
            <View style={[styles.circle, styles.circleRed]} />
            <View style={[styles.circle, styles.circleGreen]} />
            <View style={[styles.circle, styles.circleBlue]} />
            <View style={[styles.circle, styles.circlePurple]} />
          </View>
          <Text 
            style={styles.trademark}
            accessibilityRole="text"
          >
            ™
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text 
          style={styles.title}
          accessibilityRole="header"
        >
          Scene+ Points
        </Text>
        <Text 
          style={styles.description}
          accessibilityRole="text"
        >
          Manage your Scene+ points and rewards.
        </Text>
        
        {/* Points Display Area */}
        <View style={styles.pointsContainer}>
          <Text 
            style={styles.pointsLabel}
            accessibilityRole="text"
          >
            You haved earned
          </Text>
          <Text 
            style={styles.title}
            accessibilityRole="text"
            accessibilityLabel={`${points.toLocaleString()} points`}
          >
            {points.toLocaleString()} Points
          </Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity 
          style={styles.viewAllButton} 
          onPress={onViewAll}
          accessibilityRole="button"
          accessibilityLabel="View all Scene+ points"
          accessibilityHint="Double tap to view all Scene+ points and rewards"
        >
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

