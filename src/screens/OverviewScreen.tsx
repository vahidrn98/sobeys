import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChallengeCard } from '../components/ChallengeCard';
import { SweepstakeCard } from '../components/SweepstakeCard';
import { Colors, Fonts } from '../constants/colors';
import { useOverview } from '../hooks/useOverview';

export const OverviewScreen: React.FC = () => {
  const navigation = useNavigation();
  const {
    challenges,
    sweepstake,
    handleChallengePress,
    handleSweepstakePress,
    handleViewAllChallenges: hookHandleViewAllChallenges,
    handleViewAllSweepstakes: hookHandleViewAllSweepstakes,
  } = useOverview();

  const handleViewAllChallenges = () => {
    navigation.navigate('Challenges' as never);
  };

  const handleViewAllSweepstakes = () => {
    navigation.navigate('Sweepstakes' as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Latest Challenges Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest Challenges</Text>
            <TouchableOpacity onPress={handleViewAllChallenges}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionDescription}>
            Complete weekly challenges, answer trivia, and check back for more chances to win.
          </Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.challengesScrollContainer}
            style={styles.challengesScrollView}
          >
            {challenges.map((challenge) => (
              <View key={challenge.id} style={styles.challengeCardContainer}>
                <ChallengeCard 
                  challenge={challenge} 
                  onPress={handleChallengePress}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Sweepstakes Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Sweepstakes</Text>
            <TouchableOpacity onPress={handleViewAllSweepstakes}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionDescription}>
            Carousel body text lorem ipsum ementum consectetur nulla dignissim.
          </Text>
          <SweepstakeCard 
            sweepstake={sweepstake} 
            onPress={handleSweepstakePress}
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
    // marginBottom: 24,
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
  challengesScrollView: {
    marginHorizontal: -16,
  },
  challengesScrollContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  challengeCardContainer: {
    width: 350,
    paddingBottom: 16,
  },
});
