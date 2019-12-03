import { useState, useEffect } from 'react';

// pass a query like `(min-width: 768px)`
export function useMatchMedia(query) {
  const [matches, setMatches] = useState(() => matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = matchMedia(query);
    const onChange = event => setMatches(event.matches);

    mediaQueryList.addListener(onChange);
    return () => mediaQueryList.removeListener(onChange);
  }, [query]);

  return matches;
}
