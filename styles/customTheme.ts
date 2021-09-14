import { theme, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"


// This is the default breakpoint
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

const styles = {
  global: {
    h1: {
      fontSize: "20px"
    }
  }
}

// Internally, we transform to this
const customTheme = extendTheme({
  breakpoints,
  fonts: {
    ...theme.fonts,
    body: "Poppins, sans-serif",
    heading: "Poppins, serif",
  },
  colors: {
    ...theme.colors
  },
  components: {
    Button: {
      variants: {
        "ghost" : {
          _focus: {
            boxShadow: "none"
          }
        }
      }
    }
  },
});

export default customTheme;
