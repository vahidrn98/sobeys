import { ReactNode } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Challenge } from './challenge';
import { Sweepstake } from './sweepstake';
import { Coupon } from './coupon';

// ErrorBoundary component interfaces
export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// VoilaCard component interface
export interface VoilaCardProps {
  coupons?: Coupon[];
  onUseCoupon?: (coupon: Coupon) => void;
  onCopyCode?: (code: string) => void;
}

// CouponCard component interface
export interface CouponCardProps {
  coupon: Coupon;
  onUseCoupon?: (coupon: Coupon) => void;
  onCopyCode?: (code: string) => void;
}

// SweepstakeCard component interface
export interface SweepstakeCardProps {
  sweepstake: Sweepstake | null;
  onPress: () => void;
}

// ChallengeCard component interface
export interface ChallengeCardProps {
  challenge?: Challenge;
  onPress: () => void;
  isLoading?: boolean;
}

// StatsCard component interface
export interface StatsCardProps {
  icon: string; // Ionicons name as string
  title: string;
  value: string | number;
  onPress?: () => void;
}

// FreeProductsCard component interface
export interface FreeProductsCardProps {
  freeProducts: number;
  onViewAll?: () => void;
}

// ScenePlusCard component interface
export interface ScenePlusCardProps {
  points: number;
  onViewAll?: () => void;
}

// Icon component interfaces
export interface IconProps {
  size?: number;
  color?: string;
}

export interface VoilaIconProps {
  size?: number;
  color?: string;
}
