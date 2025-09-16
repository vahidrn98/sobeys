import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/components/FreeProductsCard.styles';

interface FreeProductsCardProps {
  freeProducts: number;
  onViewAll?: () => void;
}

export const FreeProductsCard: React.FC<FreeProductsCardProps> = ({ 
  freeProducts, 
  onViewAll 
}) => {
  return (
    <View style={styles.card}>
      {/* Green Header Section */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <View style={styles.percentageIcon}>
            <Text style={styles.percentageSymbol}>%</Text>
          </View>
        </View>
      </View>

      {/* White Content Section */}
      <View style={styles.content}>
        <Text style={styles.title}>Free Products</Text>
        <Text style={styles.description}>Redeem your free product rewards.</Text>
        
        {/* Free Products Display Area */}
        <View style={styles.productsContainer}>
          <Text style={styles.productsLabel}>You haved earned</Text>
          <Text style={styles.productsValue}>{freeProducts} Free Products</Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.viewAllButton} onPress={onViewAll}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

