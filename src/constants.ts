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
  spearbitAudit: "https://example.com/spearbit-audit",
  leastAuthorityAudit: "https://example.com/least-authority-audit",
  trailOfBitsAudit: "https://example.com/trail-of-bits-audit",
  github: "https://github.com/overlay-market",
  discord: "https://discord.gg/overlay",
  twitter: "https://twitter.com/overlay_protocol",
  mirror: "https://mirror.xyz/0x8c9F87668E544D9A5cf4F29C54E2E5AC6CEcE72D",
  termsOfService: "https://example.com/terms-of-service",
};