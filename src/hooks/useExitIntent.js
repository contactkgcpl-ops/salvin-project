import { useEffect, useState } from 'react';

export const useExitIntent = (onExitIntent) => {
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        if (!hasTriggered) {
          onExitIntent();
          setHasTriggered(true);
        }
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered, onExitIntent]);
};
