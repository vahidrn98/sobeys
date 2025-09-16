import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { OverviewScreen } from '../screens/OverviewScreen';
import { ChallengesScreen } from '../screens/ChallengesScreen';
import { SweepstakesScreen } from '../screens/SweepstakesScreen';

const Tab = createBottomTabNavigator();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Overview') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Challenges') {
              iconName = focused ? 'trophy' : 'trophy-outline';
            } else if (route.name === 'Sweepstakes') {
              iconName = focused ? 'gift' : 'gift-outline';
            } else {
              iconName = 'help-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.textSecondary,
          tabBarStyle: {
            backgroundColor: Colors.background,
            borderTopColor: Colors.border,
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.textLight,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
        })}
      >
        <Tab.Screen 
          name="Overview" 
          component={OverviewScreen}
          options={{ title: 'Grocery Giveaways' }}
        />
        <Tab.Screen 
          name="Challenges" 
          component={ChallengesScreen}
        />
        <Tab.Screen 
          name="Sweepstakes" 
          component={SweepstakesScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
