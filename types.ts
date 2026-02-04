import React from 'react';

export enum TierLevel {
  MEMBER = 'Member',
  PREMIER = 'Premier',
  VIP = 'VIP'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
}