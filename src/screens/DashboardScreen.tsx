import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../constants/colors';
import { ScenePlusCard } from '../components/ScenePlusCard';
import { FreeProductsCard } from '../components/FreeProductsCard';
import { VoilaCard } from '../components/VoilaCard';

export const DashboardScreen: React.FC = () => {
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Dashboard</Text>

          </View>
          <Text style={styles.sectionDescription}>
            Welcome to your dashboard! Here you can see your progress, challenges, and rewards.
          </Text>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Rewards</Text>
          </View>
          <VoilaCard 
            onUseCoupon={(coupon) => {
              console.log('Using coupon:', coupon.code);
            }}
            onCopyCode={(code) => {
              console.log('Copied code:', code);
            }}
          />
          <FreeProductsCard 
            freeProducts={2} 
            onViewAll={() => {
              // Handle view all action
              console.log('View all free products');
            }}
          />
          <ScenePlusCard 
            points={2500} 
            onViewAll={() => {
              // Handle view all action
              console.log('View all Scene+ points');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: Fonts.titleBold,
    color: Colors.text,
  },
  sectionDescription: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
});