export interface ColorsType {
  [index: string]: string;
}

export interface ThemeType {
  colors: ColorsType;
}

const theme: ThemeType = {
  colors: {
    black: "#1F2028",
    white: "##FFFFFF",
    grey: "#A9ADC1",
    blue: "#36A3FF",
    blackGrey: "#2E3039",
  },
};

export default theme;
