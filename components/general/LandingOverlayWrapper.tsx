'use client';

import dynamic from 'next/dynamic';

const LandingOverlay = dynamic(() => import('./landingoverlay'), {
  ssr: false,
});

export default function LandingOverlayWrapper({ onEnter }: { onEnter: () => void }) {
  return <LandingOverlay onEnter={onEnter} />;
}
