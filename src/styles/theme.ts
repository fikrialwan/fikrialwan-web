export interface ColorsType {
  black: string;
  white: string;
  grey: string;
  blue: string;
  blackGrey: string;
}

export interface FontsType {
  blinker: string;
  inter: string;
}

export interface ThemeType {
  colors: ColorsType;
  fonts: FontsType;
}

const theme: ThemeType = {
  colors: {
    black: "#1F2028",
    white: "#FFFFFF",
    grey: "#A9ADC1",
    blue: "#36A3FF",
    blackGrey: "#2E3039",
  },
  fonts: {
    blinker: "'Blinker', sans-serif",
    inter: "'Inter', sans-serif",
  },
};

export default theme;
