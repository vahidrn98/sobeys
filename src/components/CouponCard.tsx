import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { CalendarIcon, CopyIcon, ExternalLinkIcon } from './Icons';
import { styles } from '../styles/components/CouponCard.styles';
import { Coupon } from '../types/coupon';
import { CouponCardProps } from '../types/components';

export const CouponCard: React.FC<CouponCardProps> = ({
  coupon,
  onUseCoupon,
  onCopyCode,
}) => {
  const handleCopyCode = (code: string) => {
    onCopyCode?.(code);
    // In a real app, this would copy to clipboard
    // Clipboard.setString(code);
  };

  const handleUseCoupon = (coupon: Coupon) => {
    onUseCoupon?.(coupon);
    // In a real app, this would open the Voila app or website
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

  const getAccessibilityLabel = () => {
    return `Coupon ${coupon.code}, valid until ${coupon.validUntil}, earned from ${coupon.earnedFrom}, status ${coupon.status}`;
  };

  return (
    <View 
      style={styles.couponCard}
      accessibilityRole="none"
      accessibilityLabel={getAccessibilityLabel()}
    >
      {/* Validity and Status Row */}
      <View style={styles.couponHeader}>
        <View 
          style={styles.validityContainer}
          accessibilityRole="text"
          accessibilityLabel={`Valid until ${coupon.validUntil}`}
        >
          <CalendarIcon size={20} color="#000000" />
          <Text style={styles.validityText}>Valid until {coupon.validUntil}</Text>
        </View>
        <View 
          style={[styles.statusBadge, { 
            borderColor: getStatusColor(coupon.status),
            backgroundColor: 'transparent'
          }]}
          accessibilityRole="text"
          accessibilityLabel={`Status: ${coupon.status}`}
        >
          <Text style={[styles.statusText, { color: getStatusColor(coupon.status) }]}>Active</Text>
        </View>
      </View>

      {/* Coupon Code Section */}
      <View style={styles.couponCodeContainer}>
        <View style={styles.couponCodeBox}>
          <Text 
            style={styles.couponCodeLabel}
            accessibilityRole="text"
          >
            Coupon Code
          </Text>
          <View style={styles.codeRow}>
            <Text 
              style={styles.couponCode}
              accessibilityRole="text"
              accessibilityLabel={`Coupon code: ${coupon.code}`}
            >
              {coupon.code}
            </Text>
            <TouchableOpacity
              style={styles.copyButton}
              onPress={() => handleCopyCode(coupon.code)}
              accessibilityRole="button"
              accessibilityLabel="Copy coupon code"
              accessibilityHint="Double tap to copy the coupon code to clipboard"
            >
              <CopyIcon size={12} color="#666666" />
              <Text style={styles.copyText}>Copy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Earning Method */}
      <Text 
        style={styles.earnedFrom}
        accessibilityRole="text"
        accessibilityLabel={`Earned from ${coupon.earnedFrom}`}
      >
        Earned from '{coupon.earnedFrom}'
      </Text>

      {/* Use Now Button */}
      <TouchableOpacity
        style={styles.useNowButton}
        onPress={() => handleUseCoupon(coupon)}
        accessibilityRole="button"
        accessibilityLabel="Use coupon on Voila"
        accessibilityHint="Double tap to open Voila app and use this coupon"
      >
        <ExternalLinkIcon size={20} color="#FFFFFF" />
        <Text style={styles.useNowText}>Use Now on Voila</Text>
      </TouchableOpacity>
    </View>
  );
};
