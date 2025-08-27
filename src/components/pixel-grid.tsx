"use client";

import { cn } from '@/lib/utils';
import React from 'react';

interface PixelGridProps {
  show: boolean;
  dpr: number;
}

export function PixelGrid({ show, dpr }: PixelGridProps) {
  if (!show || !dpr) return null;

  const gridColor = 'rgba(128, 128, 128, 0.2)';
  // Create a more prominent grid for integer DPRs, and a finer one for fractional DPRs.
  const isIntegerDpr = dpr % 1 === 0;
  const baseSize = isIntegerDpr ? 50 / dpr : 50;
  
  const gridStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 9999,
    backgroundImage: `
      linear-gradient(to right, ${gridColor} 1px, transparent 1px),
      linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
    `,
    backgroundSize: `${baseSize}px ${baseSize}px`,
  };

  return <div style={gridStyle} />;
}