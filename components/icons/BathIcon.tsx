
import React from 'react';

interface BathIconProps {
  className?: string;
}

export const BathIcon: React.FC<BathIconProps> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25c-5.52 0-10.34 3.43-12.12 8.35a14.98 14.98 0 0012.12 21.72v-2.58a14.98 14.98 0 005.84-7.38zM12 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
 </svg>
);
