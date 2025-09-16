import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainContent } from './MainContent';
import { styles } from '../styles/navigation/AppNavigator.styles';

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

