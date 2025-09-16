import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { Challenge } from '../types/challenge';
import { VoilaIcon } from './VoilaIcon';
import { styles } from '../styles/components/ChallengeCard.styles';
import { ChallengeCardProps } from '../types/components';

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onPress }) => {
  const isDisabled = challenge.isDisabled || challenge.status === 'completed' || challenge.status === 'upcoming';
  
  const getAccessibilityLabel = () => {
    const status = challenge.status === 'completed' ? 'completed' : 
                   challenge.status === 'upcoming' ? 'upcoming' : 'active';
    const reward = challenge.reward ? `, reward ${challenge.reward} chips` : '';
    const voila = challenge.voila ? ', Voila exclusive' : '';
    return `${challenge.title}, ${status} challenge${reward}${voila}. ${challenge.description}`;
  };

  const getAccessibilityHint = () => {
    if (isDisabled) {
      return challenge.status === 'completed' ? 'Challenge already completed' : 
             challenge.status === 'upcoming' ? 'Challenge not yet available' : 'Challenge is disabled';
    }
    return 'Double tap to start this challenge';
  };
  
  return (
    <View 
      style={styles.container}
      accessibilityRole="none"
      accessibilityLabel={getAccessibilityLabel()}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/challenge.png')} 
          style={styles.image}
          resizeMode="cover"
          accessibilityLabel={`Challenge image for ${challenge.title}`}
        />
        {challenge.status === 'completed' && (
          <View 
            style={styles.completedBadge}
            accessibilityRole="text"
            accessibilityLabel="Challenge completed"
          >
            <Ionicons name="checkmark" size={16} color="white" />
            <Text style={styles.completedText}>Completed</Text>
          </View>
        )}
      </View>
      
      <View style={styles.content}>
        <View style={styles.tagsContainer}>

        {challenge.reward && challenge.reward > 0 && (
            <View 
              style={[styles.tag, styles.rewardTag]}
              accessibilityRole="text"
              accessibilityLabel={`Reward: ${challenge.reward} chips`}
            >
              <Text style={styles.rewardTagText}>{challenge.reward}</Text>
              <Ionicons name="cash" size={12} color={Colors.textLight} />
              
            </View>
          )}
        
          {challenge.voila && (
            <View 
              style={[styles.tag, styles.voilaTag]}
              accessibilityRole="text"
              accessibilityLabel="Voila exclusive offer"
            >
              <VoilaIcon size={24} color={Colors.primary} />
            </View>
          )}
          
          {challenge.offer && (
            <View 
              style={[styles.tag, styles.offerTag]}
              accessibilityRole="text"
              accessibilityLabel={`Offer: ${challenge.offer}`}
            >
              
              <Text style={styles.offerTagText}>{challenge.offer}</Text>
            </View>
          )}
        </View>
        
        <Text 
          style={styles.title}
          accessibilityRole="header"
        >
          {challenge.title}
        </Text>
        <Text 
          style={styles.description}
          accessibilityRole="text"
        >
          {challenge.description}
        </Text>
        
        <TouchableOpacity 
          style={[styles.button, isDisabled && styles.disabledButton]} 
          onPress={onPress}
          disabled={isDisabled}
          accessibilityRole="button"
          accessibilityLabel={challenge.buttonText}
          accessibilityHint={getAccessibilityHint()}
          accessibilityState={{ disabled: isDisabled }}
        >
          <Text style={[styles.buttonText, isDisabled && styles.disabledButtonText]}>
            {challenge.buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

