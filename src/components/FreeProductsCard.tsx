import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/components/FreeProductsCard.styles';
import { FreeProductsCardProps } from '../types/components';

export const FreeProductsCard: React.FC<FreeProductsCardProps> = ({ 
  freeProducts, 
  onViewAll 
}) => {
  const getAccessibilityLabel = () => {
    return `Free Products. You have earned ${freeProducts} free products. Redeem your free product rewards.`;
  };

  return (
    <View 
      style={styles.card}
      accessibilityRole="none"
      accessibilityLabel={getAccessibilityLabel()}
    >
      {/* Green Header Section */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <View 
            style={styles.percentageIcon}
            accessibilityRole="text"
            accessibilityLabel="Free products icon"
          >
            <Text style={styles.percentageSymbol}>%</Text>
          </View>
        </View>
      </View>

      {/* White Content Section */}
      <View style={styles.content}>
        <Text 
          style={styles.title}
          accessibilityRole="header"
        >
          Free Products
        </Text>
        <Text 
          style={styles.description}
          accessibilityRole="text"
        >
          Redeem your free product rewards.
        </Text>
        
        {/* Free Products Display Area */}
        <View style={styles.productsContainer}>
          <Text 
            style={styles.productsLabel}
            accessibilityRole="text"
          >
            You haved earned
          </Text>
          <Text 
            style={styles.title}
            accessibilityRole="text"
            accessibilityLabel={`${freeProducts} free products`}
          >
            {freeProducts} Free Products
          </Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity 
          style={styles.viewAllButton} 
          onPress={onViewAll}
          accessibilityRole="button"
          accessibilityLabel="View all free products"
          accessibilityHint="Double tap to view all available free products"
        >
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

