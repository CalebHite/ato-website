import { useState, useEffect } from 'react';

export function useClientSideOnly() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return isMounted;
} 