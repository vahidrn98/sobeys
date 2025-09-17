import React from 'react';
import { View, Text, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Colors } from '../constants/colors';
import { styles } from '../styles/components/CongratulationsModal.styles';

interface CongratulationsModalProps {
  visible: boolean;
  onClose: () => void;
  challengeTitle?: string;
  reward?: number;
}

export const CongratulationsModal: React.FC<CongratulationsModalProps> = ({
  visible,
  onClose,
  challengeTitle = 'Challenge',
  reward = 0,
}) => {
  const { width, height } = Dimensions.get('window');

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          
          
          {/* Modal Content */}
          <View style={styles.content}>
            {/* Celebration Icon */}
            <View style={styles.iconContainer}>
              <Ionicons name="trophy" size={60} color={Colors.primary} />
            </View>
            
            {/* Title */}
            <Text style={styles.title}>You completed a challenge and earned</Text>
            
            {/* Challenge Title */}
            <Text style={styles.challengeTitle}>{challengeTitle}</Text>
            
            {/* Reward */}
            {reward > 0 && (
              <View style={styles.rewardContainer}>
                <Text style={styles.rewardText}>You earned</Text>
                <View style={styles.rewardAmount}>
                  <Text style={styles.rewardNumber}>{reward}</Text>
                  <Ionicons name="cash" size={24} color={Colors.primary} />
                </View>
                <Text style={styles.rewardText}>chips!</Text>
              </View>
            )}
            
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Awesome!</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        {/* Confetti Animation */}
        <ConfettiCannon
            count={150}
            origin={{ x: width / 2, y: -10 }}
            autoStart={true}
            fadeOut={true}
            explosionSpeed={500}
            fallSpeed={3000}
            colors={['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD']}
          />
      </View>
    </Modal>
  );
};
