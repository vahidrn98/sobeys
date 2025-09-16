import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Sweepstake } from '../types/sweepstake';
import { styles } from '../styles/components/SweepstakeCard.styles';
import { SweepstakeCardProps } from '../types/components';

export const SweepstakeCard: React.FC<SweepstakeCardProps> = ({ sweepstake, onPress }) => {
  if (!sweepstake) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={typeof sweepstake.image === 'number' ? sweepstake.image : { uri: sweepstake.image }} 
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{sweepstake.title}</Text>
        <Text style={styles.description}>{sweepstake.description}</Text>
        
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{sweepstake.buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

