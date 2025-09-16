import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SweepstakeCard } from '../components/SweepstakeCard';
import { useSweepstakes } from '../hooks/useSweepstakes';
import { styles } from '../styles/screens/SweepstakesScreen.styles';

export const SweepstakesScreen: React.FC = () => {
  const {
    sweepstakes,
    handleSweepstakePress,
    handleViewAllSweepstakes,
  } = useSweepstakes();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Sweepstakes</Text>
            
          </View>
          <Text style={styles.sectionDescription}>
            Carousel body text lorem ipsum ementum consectetur nulla dignissim.
          </Text>
          {sweepstakes.map((sweepstake) => (
            <SweepstakeCard
              key={sweepstake.id}
              sweepstake={sweepstake} 
              onPress={handleSweepstakePress}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

