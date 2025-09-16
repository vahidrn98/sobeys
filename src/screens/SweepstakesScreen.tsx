import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../constants/colors';
import { SweepstakeCard } from '../components/SweepstakeCard';
import { Sweepstake } from '../types';

const mockSweepstakes: Sweepstake[] = [
  {
  id: '1',
  title: 'Sweepstake Title #1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: '../assets/Sweep.png',
  buttonText: 'Enter Sweepstake',
},
{
  id: '2',
  title: 'Sweepstake Title #2',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: '../assets/Sweep.png',
  buttonText: 'Enter Sweepstake',
},
{
  id: '3',
  title: 'Sweepstake Title #3',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: '../assets/Sweep.png',
  buttonText: 'Enter Sweepstake',
},
];

export const SweepstakesScreen: React.FC = () => {
  const handleSweepstakePress = () => {
    console.log('Sweepstake pressed');
  };

  const handleViewAllSweepstakes = () => {
    console.log('View all sweepstakes');
  };

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
          {mockSweepstakes.map((sweepstake) => (
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
  viewAllText: {
    fontSize: 16,
    color: Colors.primary,
    fontFamily: Fonts.bold,
  },
  sectionDescription: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});
