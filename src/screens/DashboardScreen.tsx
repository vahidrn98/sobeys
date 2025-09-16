import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScenePlusCard } from '../components/ScenePlusCard';
import { FreeProductsCard } from '../components/FreeProductsCard';
import { VoilaCard } from '../components/VoilaCard';
import { styles } from '../styles/screens/DashboardScreen.styles';

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
