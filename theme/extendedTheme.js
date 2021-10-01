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
  components: {
    Text: {
      baseStyle: {
        color: "#797D7D",
      },
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
