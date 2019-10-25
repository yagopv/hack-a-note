import { useEffect } from 'react';

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      console.log(event, ref);
      const header = document.getElementsByTagName('header')[0];
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        header.contains(event.target)
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
