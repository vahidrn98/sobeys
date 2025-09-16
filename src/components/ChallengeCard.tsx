import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { Challenge } from '../types';
import { VoilaIcon } from './VoilaIcon';
import { styles } from '../styles/components/ChallengeCard.styles';

interface ChallengeCardProps {
  challenge: Challenge;
  onPress: () => void;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onPress }) => {
  const isDisabled = challenge.isDisabled || challenge.status === 'completed' || challenge.status === 'upcoming';
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/challenge.png')} 
          style={styles.image}
          resizeMode="cover"
        />
        {challenge.status === 'completed' && (
          <View style={styles.completedBadge}>
            <Ionicons name="checkmark" size={16} color="white" />
            <Text style={styles.completedText}>Completed</Text>
          </View>
        )}
      </View>
      
      <View style={styles.content}>
        <View style={styles.tagsContainer}>

        {challenge.reward && challenge.reward > 0 && (
            <View style={[styles.tag, styles.rewardTag]}>
              <Text style={styles.rewardTagText}>{challenge.reward}</Text>
              <Ionicons name="cash" size={12} color={Colors.textLight} />
              
            </View>
          )}
        
          {challenge.voila && (
            <View style={[styles.tag, styles.voilaTag]}>
              <VoilaIcon size={24} color={Colors.primary} />
            </View>
          )}
          
          {challenge.offer && (
            <View style={[styles.tag, styles.offerTag]}>
              
              <Text style={styles.offerTagText}>{challenge.offer}</Text>
            </View>
          )}
        </View>
        
        <Text style={styles.title}>{challenge.title}</Text>
        <Text style={styles.description}>{challenge.description}</Text>
        
        <TouchableOpacity 
          style={[styles.button, isDisabled && styles.disabledButton]} 
          onPress={onPress}
          disabled={isDisabled}
        >
          <Text style={[styles.buttonText, isDisabled && styles.disabledButtonText]}>
            {challenge.buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

