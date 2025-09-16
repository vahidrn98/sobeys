import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, Fonts } from '../constants/colors';
import { Sweepstake } from '../types';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    marginVertical: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  imageContainer: {
    height: 150,
    backgroundColor: '#1A1A1A',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.titleBold,
    color: Colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: Colors.textLight,
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
});
