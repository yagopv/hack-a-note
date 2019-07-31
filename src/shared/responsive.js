export const SCREEN_SIZES = {
  xs: '(max-width: 576px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1140px)'
};

export function screenIn(size) {
  return window.matchMedia(size).matches;
}
