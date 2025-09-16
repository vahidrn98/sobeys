import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChallengeCard } from '../components/ChallengeCard';
import { SweepstakeCard } from '../components/SweepstakeCard';
import { useOverview } from '../hooks/useOverview';
import { styles } from '../styles/screens/OverviewScreen.styles';

export const OverviewScreen: React.FC = () => {
  const navigation = useNavigation();
  const {
    challenges,
    sweepstake,
    loading,
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
          {loading ? (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Loading sweepstakes...</Text>
            </View>
          ) : (
            <SweepstakeCard 
              sweepstake={sweepstake} 
              onPress={handleSweepstakePress}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

