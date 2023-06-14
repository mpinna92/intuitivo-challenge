export const theming = {
  colors: {
    primary: "#FF4069",
    background: "#171717",
    grayLight: "#CBCBCB",
    grayMedium: "#6B6B6B",
    grayDark: "#242424",
    purple: "#3c175e",
    red: "#c71347",
    black: "#000000",
    white: "#ffffff",
  },

  transitions: {
    "0.3s": "all 0.3s cubic-bezier(.51,.92,.24,1.15);",
  },

  fonts: {
    Rubik: "'Rubik', sans-serif",
  },
};

export const theme = {
  ...theming,
};

export type MainTheme = typeof theme;
