import { StyleSheet, Dimensions } from 'react-native';
import { Fonts } from '../../constants/colors';

const { width: screenWidth } = Dimensions.get('window');
export const cardWidth = screenWidth - 80; // Account for padding and partial visibility

export const styles = StyleSheet.create({
  couponCard: {
    width: cardWidth,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#003D2A', // Dark green border
    padding: 16,
    marginRight: 16,
  },
  couponHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  validityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 6,
  },
  validityText: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: '#000000',
    lineHeight: 12,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  statusText: {
    fontSize: 10,
    fontFamily: Fonts.bold,
    fontWeight: '500',
    lineHeight: 10,
  },
  couponCodeContainer: {
    marginBottom: 12,
  },
  couponCodeBox: {
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderStyle: 'dashed',
    borderRadius: 6,
    padding: 12,
  },
  couponCodeLabel: {
    fontSize: 11,
    fontFamily: Fonts.regular,
    color: '#000000',
    marginBottom: 4,
    lineHeight: 11,
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  couponCode: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: '#000000',
    fontWeight: 'bold',
    flex: 1,
    lineHeight: 16,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },
  copyText: {
    fontSize: 10,
    fontFamily: Fonts.bold,
    color: "#000000",
    lineHeight: 10,
  },
  earnedFrom: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: '#000000',
    marginBottom: 16,
    lineHeight: 12,
  },
  useNowButton: {
    backgroundColor: '#003D2A', // Dark green
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 24,
    gap: 6,
  },
  useNowText: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: '#FFFFFF',
    fontWeight: '500',
    lineHeight: 14,
  },
});
