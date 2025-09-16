import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '../constants/colors';

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.textLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.textLight,
  },
  percentageSymbol: {
    fontSize: 20,
    fontFamily: Fonts.titleBold,
    color: Colors.primary,
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
  productsContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  productsLabel: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.text,
    marginBottom: 8,
  },
  productsValue: {
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
