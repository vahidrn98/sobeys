import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScenePlusCard } from '../components/ScenePlusCard';
import { FreeProductsCard } from '../components/FreeProductsCard';
import { VoilaCard } from '../components/VoilaCard';
import { ProgressBar } from '../components/ProgressBar';
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
          {/* Rewards Progress Bar */}
          <View style={styles.progressSection}>
            <ProgressBar
              current={1250}
              target={2000}
              label="Next Reward: Free Mystery Product"
              showPercentage={true}
            />
          </View>
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
