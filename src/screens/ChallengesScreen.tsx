import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../constants/colors';
import { ChallengeCard } from '../components/ChallengeCard';
import { useChallenges } from '../hooks/useChallenges';

export const ChallengesScreen: React.FC = () => {
  const {
    challenges,
    handleChallengePress,
    handleViewAllChallenges,
    handleViewCompleted,
  } = useChallenges();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Weekly Challenges Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Weekly Challenges</Text>
            
          </View>
          <Text style={styles.sectionDescription}>
            Complete challenges to earn chips and rewards! Complete weekly challenges, answer trivia, and check back for more chances to win.
          </Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.challengesScrollContainer}
            style={styles.challengesScrollView}
          >
            {challenges.map((challenge) => (
              <View key={challenge.id} style={styles.challengeCardWrapper}>
                <ChallengeCard
                  challenge={challenge}
                  onPress={() => handleChallengePress(challenge.id)}
                />
              </View>
            ))}
          </ScrollView>
          
        </View>
        
        {/* Trivia Challenges Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trivia Challenges</Text>
            
          </View>
          <Text style={styles.sectionDescription}>
            Complete challenges to earn chips and rewards! Complete weekly challenges, answer trivia, and check back for more chances to win.
          </Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.challengesScrollContainer}
            style={styles.challengesScrollView}
          >
            {challenges.map((challenge) => (
              <View key={challenge.id} style={styles.challengeCardWrapper}>
                <ChallengeCard
                  challenge={challenge}
                  onPress={() => handleChallengePress(challenge.id)}
                />
              </View>
            ))}
          </ScrollView>
          
          
        </View>
        {/* Upcoming Challenges Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Challenges</Text>
            
          </View>
          <Text style={styles.sectionDescription}>
            Complete challenges to earn chips and rewards! Complete weekly challenges, answer trivia, and check back for more chances to win.
          </Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.challengesScrollContainer}
            style={styles.challengesScrollView}
          >
            {challenges.map((challenge) => (
              <View key={challenge.id} style={styles.challengeCardWrapper}>
                <ChallengeCard
                  challenge={challenge}
                  onPress={() => handleChallengePress(challenge.id)}
                />
              </View>
            ))}
          </ScrollView>
          
        </View>
        
        <View style={styles.bottomSection}>
          <Text style={styles.bottomSectionText}>See all your completed challenges in one place.</Text>
          <TouchableOpacity style={styles.bottomButton} onPress={handleViewCompleted}>
            <Text style={styles.bottomButtonText}>View Completed Challenges</Text>
          </TouchableOpacity>
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
  challengesScrollView: {
    marginHorizontal: -16,
  },
  challengesScrollContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  challengeCardWrapper: {
    width: 350,
    paddingBottom: 16,
  },
  bottomSection: {
    paddingHorizontal: 48,
    paddingTop: 24,
    paddingBottom: 20,
  },
  bottomSectionText: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 16,
  },
  bottomButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: Colors.textLight,
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
});
