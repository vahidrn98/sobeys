import { Coupon } from '../types/coupon';

export const defaultCoupons: Coupon[] = [
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
