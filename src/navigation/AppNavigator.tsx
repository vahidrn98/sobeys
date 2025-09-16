import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts } from '../constants/colors';
import { StatsCard } from '../components/StatsCard';
import { OverviewScreen } from '../screens/OverviewScreen';
import { ChallengesScreen } from '../screens/ChallengesScreen';
import { SweepstakesScreen } from '../screens/SweepstakesScreen';
import { DashboardScreen } from '../screens/DashboardScreen';

const Tab = createMaterialTopTabNavigator();

export const AppNavigator: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Grocery Giveaways</Text>
      </View>
      
      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <StatsCard 
          icon="coins"
          title="Chips Balance" 
          value="1,000" 
        />
        <StatsCard 
          icon="check-circle" 
          title="Challenges Completed" 
          value="10" 
        />
        <StatsCard 
          icon="gift" 
          title="My Rewards" 
          value="" 
        />
      </View>

      <NavigationContainer>
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
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: Fonts.titleBold,
    color: Colors.textLight,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
    backgroundColor: Colors.background,
  },
});
