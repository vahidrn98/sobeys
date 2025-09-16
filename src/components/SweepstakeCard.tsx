import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Sweepstake } from '../types';
import { styles } from '../styles/components/SweepstakeCard.styles';

interface SweepstakeCardProps {
  sweepstake: Sweepstake;
  onPress: () => void;
}

export const SweepstakeCard: React.FC<SweepstakeCardProps> = ({ sweepstake, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/Sweep.png')} 
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

