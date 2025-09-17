import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.85,
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  content: {
    padding: 30,
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  challengeTitle: {
    fontSize: 18,
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  rewardContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background,
    borderRadius: 15,
    width: '100%',
  },
  rewardText: {
    fontSize: 16,
    color: Colors.textLight,
    textAlign: 'center',
  },
  rewardAmount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewardNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
    marginRight: 8,
  },
  closeButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
