import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  searchInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.text,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchInputFocused: {
    borderColor: Colors.primary,
    backgroundColor: '#FFFFFF',
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: Fonts.titleBold,
    color: Colors.text,
  },
  viewAllText: {
    fontSize: 16,
    color: Colors.primary,
    fontFamily: Fonts.bold,
  },
  sectionDescription: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  challengesScrollView: {
    marginHorizontal: -16,
  },
  challengesScrollContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  challengeCardWrapper: {
    width: 350,
    paddingBottom: 16,
  },
  bottomSection: {
    paddingHorizontal: 48,
    paddingTop: 24,
    paddingBottom: 20,
  },
  bottomSectionText: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 16,
  },
  bottomButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: Colors.textLight,
    fontSize: 16,
    fontFamily: Fonts.regular,
    textAlign: "center"
  },
});
