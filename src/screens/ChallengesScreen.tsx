import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ConfettiCannon from 'react-native-confetti-cannon';
import { ChallengeCard } from '../components/ChallengeCard';
import { CongratulationsModal } from '../components/CongratulationsModal';
import { useChallenges } from '../hooks/useChallenges';
import { styles } from '../styles/screens/ChallengesScreen.styles';

export const ChallengesScreen: React.FC = () => {
  const {
    challenges,
    loading,
    searchQuery,
    handleChallengePress,
    handleViewAllChallenges,
    handleViewCompleted,
    handleSearchChange,
  } = useChallenges();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [completedChallenge, setCompletedChallenge] = useState<{title: string, reward: number} | null>(null);
  const { width, height } = Dimensions.get('window');

  const handleChallengePressWithConfetti = (challengeId: string) => {
    // Find the challenge to check if it's an active challenge
    const challenge = challenges.find(c => c.id === challengeId);

    
    
    // Trigger confetti for active challenges (not completed or upcoming)
    if (challenge && challenge.status === 'active') {
      setCompletedChallenge({
        title: challenge.title,
        reward: challenge.reward
      });
      setShowCongratulations(true);
      // Trigger confetti animation
      setShowConfetti(true);
      
      // Hide confetti after animation completes
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
      
      
        
      
    }
    
    // Call the original handler
    handleChallengePress(challengeId);
  };

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
          onPress={() => handleChallengePressWithConfetti(challenge.id)}
        />
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Search Input */}
        <View style={styles.searchContainer}>
          <TextInput
            style={[
              styles.searchInput,
              isSearchFocused && styles.searchInputFocused
            ]}
            placeholder="Search challenges..."
            placeholderTextColor="#9E9E9E"
            value={searchQuery}
            onChangeText={handleSearchChange}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
        </View>

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
      
      
      
      {/* Congratulations Modal */}
      <CongratulationsModal
        visible={showCongratulations}
        onClose={() => setShowCongratulations(false)}
        challengeTitle={completedChallenge?.title}
        reward={completedChallenge?.reward}
      />
    </SafeAreaView>
  );
};