
'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const LandingOverlay = dynamic(() => import('./landingoverlay'), { ssr: false });

export default function LandingClient() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowOverlay(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("hasVisited", "true");
    setShowOverlay(false);
  };

  if (!showOverlay) return null;

  return <LandingOverlay onEnter={handleEnter} />;
}
