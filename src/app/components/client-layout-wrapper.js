'use client';

import { useState, useEffect } from 'react';
import MobileNav from './mobile-nav';

export default function ClientLayoutWrapper({ children }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleToggleMobileNav = () => {
      setIsMobileNavOpen(prev => !prev);
    };

    window.addEventListener('toggleMobileNav', handleToggleMobileNav);
    return () => {
      window.removeEventListener('toggleMobileNav', handleToggleMobileNav);
    };
  }, []);

  return (
    <>
      {children}
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </>
  );
}
