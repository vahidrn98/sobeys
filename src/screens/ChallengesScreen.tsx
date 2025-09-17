import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChallengeCard } from '../components/ChallengeCard';
import { useChallenges } from '../hooks/useChallenges';
import { styles } from '../styles/screens/ChallengesScreen.styles';

export const ChallengesScreen: React.FC = () => {
  const {
    challenges,
    loading,
    handleChallengePress,
    handleViewAllChallenges,
    handleViewCompleted,
  } = useChallenges();

  const renderChallengeCards = () => {
    if (loading) {
      // Show skeleton cards while loading
      return Array.from({ length: 3 }).map((_, index) => (
        <View key={`skeleton-${index}`} style={styles.challengeCardWrapper}>
          <ChallengeCard
            challenge={{} as any}
            onPress={() => {}}
            isLoading={true}
          />
        </View>
      ));
    }

    return challenges.map((challenge) => (
      <View key={challenge.id} style={styles.challengeCardWrapper}>
        <ChallengeCard
          challenge={challenge}
          onPress={() => handleChallengePress(challenge.id)}
        />
      </View>
    ));
  };

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
            {renderChallengeCards()}
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
            {renderChallengeCards()}
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
            {renderChallengeCards()}
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