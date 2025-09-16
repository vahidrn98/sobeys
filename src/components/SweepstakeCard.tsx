import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Sweepstake } from '../types/sweepstake';
import { styles } from '../styles/components/SweepstakeCard.styles';
import { SweepstakeCardProps } from '../types/components';

export const SweepstakeCard: React.FC<SweepstakeCardProps> = ({ sweepstake, onPress }) => {
  if (!sweepstake) {
    return null;
  }

  const getAccessibilityLabel = () => {
    return `Sweepstake: ${sweepstake.title}. ${sweepstake.description}`;
  };

  return (
    <View 
      style={styles.container}
      accessibilityRole="none"
      accessibilityLabel={getAccessibilityLabel()}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={typeof sweepstake.image === 'number' ? sweepstake.image : { uri: sweepstake.image }} 
          style={styles.image}
          resizeMode="cover"
          accessibilityLabel={`Sweepstake image for ${sweepstake.title}`}
        />
      </View>
      
      <View style={styles.content}>
        <Text 
          style={styles.title}
          accessibilityRole="header"
        >
          {sweepstake.title}
        </Text>
        <Text 
          style={styles.description}
          accessibilityRole="text"
        >
          {sweepstake.description}
        </Text>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={onPress}
          accessibilityRole="button"
          accessibilityLabel={sweepstake.buttonText}
          accessibilityHint="Double tap to enter this sweepstake"
        >
          <Text style={styles.buttonText}>{sweepstake.buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

