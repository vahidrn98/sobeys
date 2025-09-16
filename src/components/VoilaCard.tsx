import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { VoilaIcon } from './VoilaIcon';
import { CalendarIcon, CopyIcon, ExternalLinkIcon } from './Icons';
import { styles, cardWidth } from '../styles/components/VoilaCard.styles';

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

