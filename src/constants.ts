export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

export const mediaQueries = {
  mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
};

export const LINKS = {
  documentation: "https://docs.overlay.market/",
  governance: "https://common.xyz/overlay",
  whitepaper: "https://redrct.overlay.market/whitepaper",
  trade: "https://app.overlay.market",
  markets: "https://app.overlay.market",
  spearbitAudit: "https://github.com/overlay-market/v1-core/blob/main/audits/spearbit/audit.pdf",
  leastAuthorityAudit: "https://github.com/overlay-market/v1-core/blob/main/audits/leastauthority/audit.pdf",
  trailOfBitsAudit: "https://github.com/overlay-market/v1-core/blob/main/audits/trailofbits/audit.pdf",
  github: "https://github.com/overlay-market",
  discord: "https://redrct.overlay.market/discord",
  twitter: "https://x.com/OverlayProtocol",
  telegram: "https://t.me/overlay_protocol",
  mirror: "https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e",
  termsOfService: "https://overlay.market/tos",
};