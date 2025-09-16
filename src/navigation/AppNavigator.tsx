import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../constants/colors';
import { StatsCard } from '../components/StatsCard';
import { OverviewScreen } from '../screens/OverviewScreen';
import { ChallengesScreen } from '../screens/ChallengesScreen';
import { SweepstakesScreen } from '../screens/SweepstakesScreen';
import { DashboardScreen } from '../screens/DashboardScreen';
import { styles } from '../styles/navigation/AppNavigator.styles';

const Tab = createMaterialTopTabNavigator();

const MainContent: React.FC = () => {
  const navigation = useNavigation();

  const handleChipsPress = () => {
    navigation.navigate('Dashboard' as never);
  };

  const handleChallengesPress = () => {
    navigation.navigate('Challenges' as never);
  };

  const handleRewardsPress = () => {
    navigation.navigate('Dashboard' as never);
  };

  return (
    <>
      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <StatsCard 
          icon="dollar"
          title="Chips Balance" 
          value="1,000"
          onPress={handleChipsPress}
        />
        <StatsCard 
          icon="check-circle" 
          title="Challenges Completed" 
          value="10"
          onPress={handleChallengesPress}
        />
        <StatsCard 
          icon="gift" 
          title="My Rewards" 
          value=""
          onPress={handleRewardsPress}
        />
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.textSecondary,
          tabBarStyle: {
            backgroundColor: Colors.background,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: Colors.border,
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.primary,
            height: 3,
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: Fonts.medium,
            textTransform: 'none',
          },
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            width: 140,
            paddingHorizontal: 0,
          },
          tabBarContentContainerStyle: {
            paddingHorizontal: 16,
          },
        }}
      >
        <Tab.Screen 
          name="Overview" 
          component={OverviewScreen}
          options={{ 
            title: 'Overview'
          }}
        />
        <Tab.Screen 
          name="Challenges" 
          component={ChallengesScreen}
          options={{ 
            title: 'Challenges'
          }}
        />
        <Tab.Screen 
          name="Sweepstakes" 
          component={SweepstakesScreen}
          options={{ 
            title: 'Sweepstakes'
          }}
        />
        <Tab.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          options={{ 
            title: 'Dashboard'
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export const AppNavigator: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Grocery Giveaways</Text>
      </View>
      
      <NavigationContainer>
        <MainContent />
      </NavigationContainer>
    </SafeAreaView>
  );
};

