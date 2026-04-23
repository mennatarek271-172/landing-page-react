export const theme = {
  colors: {
    primary: "#0A0A23",
    secondary: "#6C63FF",
    accent: "#00D4AA",
    text: "#1A1A2E",
    lightBg: "#F4F4FB",
    white: "#FFFFFF",
    muted: "#6D6D85",
    border: "#E8E8F5"
  },
  shadows: {
    sm: "0 8px 20px rgba(10, 10, 35, 0.08)",
    md: "0 12px 30px rgba(10, 10, 35, 0.12)",
    lg: "0 20px 45px rgba(10, 10, 35, 0.18)"
  },
  radius: {
    sm: "8px",
    md: "14px",
    lg: "20px",
    pill: "999px"
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px"
  },
  typography: {
    heading: "'Inter', 'Segoe UI', sans-serif",
    body: "'Inter', 'Segoe UI', sans-serif"
  }
};

export type AppTheme = typeof theme;
