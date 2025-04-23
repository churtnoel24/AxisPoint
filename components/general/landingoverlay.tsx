'use client';

import styles from './landingoverlay.module.css';
import { ShieldCheck, Wifi, Globe, Dna, Cog } from 'lucide-react';

const icons = [ShieldCheck, Wifi, Globe, Dna, Cog];

export default function LandingOverlay({ onEnter }: { onEnter: () => void }) {
  return (
    <div className={styles['overlay-container']}>
      {/* Floating Icons */}
      <div className={styles['background-shapes']}>
        {icons.map((Icon, index) => (
          <div key={index} className={`${styles.icon} ${styles[`icon${index + 1}`]}`}>
            <Icon />
          </div>
        ))}
      </div>
      

      {/* Glow Waves */}
      <div className={styles['glow-waves']} />

      {/* Glass Panel Content */}
      <div className={styles['glass-panel']}>
        <h1 className="text-5xl font-bold mb-4">
          {['A', 'x', 'i', 's', 'P', 'o', 'i', 'n', 't'].map((char, i) => {
            let glowClass = '';
            if (i === 2) glowClass = 'glow-red-hint';
            else if (i === 6) glowClass = 'glow-blue-hint';
            else if (['A', 'x', 's'].includes(char)) glowClass = 'glow-red-hint';
            else glowClass = 'glow-blue-hint';

            return (
              <span key={i} className={styles[glowClass]}>
                {char}
              </span>
            );
          })}
        </h1>
        <p className="text-xl mb-2 text-white/90">
          Securing our nation through technology
        </p>
        <p className="text-sm text-white/70 leading-relaxed">
          Powering secure network infrastructure, advanced cybersecurity,<br />
          and AI-driven operations.
        </p>
        <button onClick={onEnter} className={styles.button}>
          Enter Site
        </button>
      </div>

      <div className={styles['tech-floor']} />
    </div>
  );
}
