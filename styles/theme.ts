import { createTheme } from "@mui/material"
import { red,white,black } from "./colors"

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    // home: true;
    lg: true
    xl: true
    modal: true
    xxl: true
  }
}

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: red[100],
      light: white[100],
    },
    // grey: {
    //   900: grey[900],
    //   600: grey[600],
    //   500: grey[500],
    //   300: grey[300],
    //   200: grey[200],
    //   100: grey[100],
    //   50: grey[50],
    // },
    // info: {
    //   main: blue[600],
    // },
    // error: {
    //   main: red[600],
    // },
    // secondary: {
    //   main: grey[500],
    // },
  },
  mixins: {
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize:14,
    h1: {
      fontWeight: 700,
      fontSize: "3rem", // 48px
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem", // 40x
    },
    h3: {
      fontWeight: 700,
      fontSize: "2rem", // 32px
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem", // 28px
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.5rem", // 24px
    },
    h6: {
      fontWeight: 900,
      fontSize: "1.25rem", // 20px
      fontStyle: "normal",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1rem", // 16px
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: "0.875rem", // 14x
    },
    body1: {
      fontWeight: 400,
      fontSize: "1.25rem", //20px
    },
    body2: {
      fontSize: "1rem", //16px
    },
    caption: {
      fontSize: "0.8rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 940,
      // home: 960,
      lg: 1060,
      xl: 1280,
      modal: 1300,
      xxl: 1440,
    },
  },
  shape: {
    // borderRadius: 5,
  },
  components: {
    MuiTypography: {
      styleOverrides: {},
    },
    // MuiSvgIcon: {
    //   styleOverrides: {
    //     root: {
    //       fill: "red",
    //     },
    //     colorPrimary: {
    //       fill: grey[500],
    //     },
    //     colorAction: {
    //       fill: "white",
    //     },
    //   },
    // },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },

    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true
      },
    },
  },
})

// Responsive Typography
defaultTheme.typography.body1 = {
  ...defaultTheme.typography.body1,
  [defaultTheme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}

defaultTheme.typography.body2 = {
  ...defaultTheme.typography.body2,
  [defaultTheme.breakpoints.down("sm")]: {
    fontSize: "0.675rem",
  },
}

defaultTheme.typography.h3 = {
  ...defaultTheme.typography.h3,
  [defaultTheme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
}

defaultTheme.typography.h4 = {
  ...defaultTheme.typography.h4,
  [defaultTheme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}

defaultTheme.typography.h5 = {
  ...defaultTheme.typography.h5,
  [defaultTheme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
}

defaultTheme.typography.h6 = {
  ...defaultTheme.typography.h6,
  [defaultTheme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
}

defaultTheme.typography.h1 = {
  ...defaultTheme.typography.h1,
  [defaultTheme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
}

defaultTheme.typography.subtitle1 = {
  ...defaultTheme.typography.subtitle1,
  [defaultTheme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}



export { defaultTheme }
