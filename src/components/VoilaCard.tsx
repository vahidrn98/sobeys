import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { VoilaIcon } from './VoilaIcon';
import { CouponCard } from './CouponCard';
import { styles } from '../styles/components/VoilaCard.styles';
import { cardWidth } from '../styles/components/CouponCard.styles';
import { Coupon } from '../types/coupon';
import { defaultCoupons } from '../data/mockCoupons';
import { VoilaCardProps } from '../types/components';

export const VoilaCard: React.FC<VoilaCardProps> = ({
  coupons = defaultCoupons,
  onUseCoupon,
  onCopyCode,
}) => {

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
          {coupons.map((coupon) => (
            <CouponCard
              key={coupon.id}
              coupon={coupon}
              onUseCoupon={onUseCoupon}
              onCopyCode={onCopyCode}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

