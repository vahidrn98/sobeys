export interface Coupon {
  id: string;
  code: string;
  validUntil: string;
  status: 'active' | 'expired' | 'used';
  earnedFrom: string;
}
