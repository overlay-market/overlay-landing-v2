export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

export const mediaQueries = {
  mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
};

export const LINKS = {
  documentation: "https://example.com/documentation",
  governance: "https://example.com/governance",
  whitepaper: "https://example.com/whitepaper",
  trade: "https://app.overlay.market",
  markets: "https://example.com/markets",
};