import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Colors, Fonts } from '../constants/colors';
import { VoilaIcon } from './VoilaIcon';
import { CalendarIcon, CopyIcon, ExternalLinkIcon } from './Icons';

interface Coupon {
  id: string;
  code: string;
  validUntil: string;
  status: 'active' | 'expired' | 'used';
  earnedFrom: string;
}

interface VoilaCardProps {
  coupons?: Coupon[];
  onUseCoupon?: (coupon: Coupon) => void;
  onCopyCode?: (code: string) => void;
}

const { width: screenWidth } = Dimensions.get('window');
const cardWidth = screenWidth - 80; // Account for padding and partial visibility

const defaultCoupons: Coupon[] = [
  {
    id: '1',
    code: 'FREESHIP2025',
    validUntil: 'Sep 30, 2025',
    status: 'active',
    earnedFrom: 'Open the App Challenge',
  },
  {
    id: '2',
    code: 'SAVE10NOW',
    validUntil: 'Oct 15, 2025',
    status: 'active',
    earnedFrom: 'Weekly Shopping Challenge',
  },
  {
    id: '3',
    code: 'DELIVERYFREE',
    validUntil: 'Nov 20, 2025',
    status: 'active',
    earnedFrom: 'Monthly Milestone',
  },
];

export const VoilaCard: React.FC<VoilaCardProps> = ({
  coupons = defaultCoupons,
  onUseCoupon,
  onCopyCode,
}) => {
  const handleCopyCode = (code: string) => {
    onCopyCode?.(code);
    // You can add clipboard functionality here
    console.log('Copied code:', code);
  };

  const handleUseCoupon = (coupon: Coupon) => {
    onUseCoupon?.(coupon);
    console.log('Using coupon:', coupon.code);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return '#35A131';
      case 'expired':
        return '#F44336';
      case 'used':
        return '#FF9800';
      default:
        return '#35A131';
    }
  };

  const renderCouponCard = (coupon: Coupon) => (
    <View key={coupon.id} style={styles.couponCard}>
      {/* Validity and Status Row */}
      <View style={styles.couponHeader}>
        <View style={styles.validityContainer}>
          <CalendarIcon size={20} color="#000000" />
          <Text style={styles.validityText}>Valid until {coupon.validUntil}</Text>
        </View>
        <View style={[styles.statusBadge, { 
          borderColor: getStatusColor(coupon.status),
          backgroundColor: 'transparent'
        }]}>
          <Text style={[styles.statusText, { color: getStatusColor(coupon.status) }]}>Active</Text>
        </View>
      </View>

      {/* Coupon Code Section */}
      <View style={styles.couponCodeContainer}>
        <View style={styles.couponCodeBox}>
          <Text style={styles.couponCodeLabel}>Coupon Code</Text>
          <View style={styles.codeRow}>
            <Text style={styles.couponCode}>{coupon.code}</Text>
            <TouchableOpacity
              style={styles.copyButton}
              onPress={() => handleCopyCode(coupon.code)}
            >
              <CopyIcon size={12} color="#666666" />
              <Text style={styles.copyText}>Copy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Earning Method */}
      <Text style={styles.earnedFrom}>Earned from '{coupon.earnedFrom}'</Text>

      {/* Use Now Button */}
      <TouchableOpacity
        style={styles.useNowButton}
        onPress={() => handleUseCoupon(coupon)}
      >
        <ExternalLinkIcon size={20} color="#FFFFFF" />
        <Text style={styles.useNowText}>Use Now on Voila</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Cyan Header */}
      <View style={styles.header}>
        <VoilaIcon size={100} color="#003D2A" />
      </View>

      {/* White Content Area */}
      <View style={styles.content}>
        <Text style={styles.title}>Voila Free Delivery Coupons</Text>
        <Text style={styles.subtitle}>{coupons.length} vouchers available</Text>

        {/* Coupon Carousel */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          contentContainerStyle={styles.carouselContent}
          decelerationRate="fast"
          snapToInterval={cardWidth + 16}
          snapToAlignment="start"
        >
          {coupons.map(renderCouponCard)}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 0,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    backgroundColor: '#00E5FF', // Bright cyan (more vibrant)
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.titleBold,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 4,
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: '#000000',
    marginBottom: 20,
    lineHeight: 14,
  },
  carousel: {
    marginHorizontal: -20, // Extend to edges
  },
  carouselContent: {
    paddingHorizontal: 20,
  },
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
    borderRadius: 6,
    gap: 6,
  },
  useNowText: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: '#FFFFFF',
    fontWeight: '500',
    lineHeight: 14,
  },
});
