import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    theme: string;
    colors: {
      background: string;
      shape: string;
      text: string;
      red: string;
      green: string;
      blue: string;
      gray: string;
      white: string;
    };
    waves: string;
  }
}
