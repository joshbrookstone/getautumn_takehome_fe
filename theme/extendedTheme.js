import "@fontsource/abel";
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    heading: "Abel",
    body: "Abel",
  },
  colors: {
    GAButtonGreen: {
      100: "#39e5ac",
      200: "#159e72",
      300: "#39e5ac",
      400: "#39e5ac",
      500: "#21cb92",
      600: "#159e72",
      700: "#097151",
      800: "#004530",
      900: "#00190e",
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: "#797D7D",
      },
    },
    Button: {
      colorScheme: {},
    },
  },

  config,
  styles: {
    global: {
      body: {
        bgGradient: ["linear(to-r, #EBECEC, #FAD77D , #FFE1AB , #70D6B6  )"],
      },
    },
  },
});
export default theme;
