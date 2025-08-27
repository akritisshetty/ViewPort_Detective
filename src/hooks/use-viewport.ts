"use client";

import { useState, useEffect, useCallback } from 'react';

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

type Breakpoint = keyof typeof BREAKPOINTS | 'xs';

interface ViewportState {
  width: number;
  height: number;
  dpr: number;
  orientation: 'portrait' | 'landscape';
  breakpoint: Breakpoint;
  safeArea: {
    top: string;
    bottom: string;
    left: string;
    right: string;
  };
}

function getBreakpoint(width: number): Breakpoint {
  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
}

export function useViewport() {
  const [viewport, setViewport] = useState<Partial<ViewportState>>({});

  const updateViewport = useCallback(() => {
    const computedStyle = getComputedStyle(document.documentElement);
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: window.devicePixelRatio,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
      breakpoint: getBreakpoint(window.innerWidth),
      safeArea: {
        top: computedStyle.getPropertyValue('--safe-area-inset-top').trim(),
        bottom: computedStyle.getPropertyValue('--safe-area-inset-bottom').trim(),
        left: computedStyle.getPropertyValue('--safe-area-inset-left').trim(),
        right: computedStyle.getPropertyValue('--safe-area-inset-right').trim(),
      },
    });
  }, []);

  useEffect(() => {
    updateViewport();
    window.addEventListener('resize', updateViewport);
    window.screen.orientation?.addEventListener('change', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
      window.screen.orientation?.removeEventListener('change', updateViewport);
    };
  }, [updateViewport]);

  return viewport;
}
