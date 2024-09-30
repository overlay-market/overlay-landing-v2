export const BREAKPOINTS = {
  mobile: 768,
} as const;

export const mediaQueries = {
  mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
};