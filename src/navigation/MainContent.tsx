import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import type { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { StatsCard } from '../components/StatsCard';
import { OverviewScreen } from '../screens/OverviewScreen';
import { ChallengesScreen } from '../screens/ChallengesScreen';
import { SweepstakesScreen } from '../screens/SweepstakesScreen';
import { DashboardScreen } from '../screens/DashboardScreen';
import { styles } from '../styles/navigation/AppNavigator.styles';
import { screenOptions } from '../styles/navigation/screenOptions';

const Tab = createMaterialTopTabNavigator();

export const MainContent: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleRewardsPress = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <>
      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <StatsCard 
          icon="cash"
          title="Chips Balance" 
          value="1,000"
        />
        <StatsCard 
          icon="checkmark-circle" 
          title="Challenges Completed" 
          value="10"
        />
        <StatsCard 
          icon="gift-outline" 
          title="My Rewards" 
          value=""
          onPress={handleRewardsPress}
        />
      </View>

      <Tab.Navigator
        screenOptions={screenOptions as MaterialTopTabNavigationOptions}
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
