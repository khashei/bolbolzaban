import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import '../../resources/fonts.css';

const primaryFontFamily = '"Samim", "Tahoma", "Helvetica", "Arial", sans-serif';

const primaryColor = '#615136';
const primaryColorAlternative = '#FF6D00';
const secondaryColor = '#fff';
const secondaryColorAlternative = '#82B1FF';

// const noSokhanPrimaryGradient = '#FF6D00';
// // export const noSokhanPrimaryGradient = 'linear-gradient(to right, #FF6000, #FD395F)';

const lightBackground = '#f0eee7';
const darkBackground = '#e5e0d7';

// const green = '#00C853';
const white = '#FFFFFF';
// const red = '#F44336';
// const black = '#000000';

const darkColor = '#555555';
const mediumColor = '#826a4a';
// const lightColor = green;
const verylightColor = '#ffffff';

// const tagsBackgroundColor = '#EAF2FF';
// const textBackgroundColor = '#F5F9FF';
// const iconColor = '#53698D';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: primaryFontFamily,
    h2: {
      color: verylightColor,
    },
    // h3: {
    //   color: lightColor,
    // },
    // h4: {
    //   color: darkColor,
    //   backgroundHover: lightColor,
    // },
    h5: {
      color: mediumColor,
      fontWeight: 600,
      fontSize: '1.125rem',
    },
    h6: {
      color: darkColor,
      fontSize: '1rem',
    },
    body1: {
      color: darkColor,
      fontSize: '1rem',
    },
    body2: {
      color: mediumColor,
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    // subtitle1: {
    //   color: darkColor,
    //   fontSize: '1rem',
    // },
    // caption: {
    //   fontSize: '.75rem',
    //   fontWeight: 300,
    //   letterSpacing: '-.04em',
    //   lineHeight: '1.14286em',
    //   marginLeft: '-.04em',
    //   color: 'rgba(0, 0, 0, 0.54)',
    // },
  },
  palette: {
    primary: {
      main: primaryColor,
      alternative: primaryColorAlternative,
      contrastText: white,
    },
    secondary: {
      main: secondaryColor,
      alternative: secondaryColorAlternative,
      contrastText: white,
    },
    common: {
      //       lightPistachioGreen: { bg: '#CEFFDB', border: null },
      //       lightBlue: { bg: '#CEF6FF', border: null },
      //       lighterYellow: { bg: '#FFFFCE', border: null },
      //       lightPink: { bg: '#FFCFDF', border: null },
      //       lightPurple: { bg: '#CED4FF', border: null },
      //       lightRed: { bg: '#FFD7D2', border: null },
      //       lightGreen: { bg: '#f1f7ef', border: '#aed581' },
      //       lightNavyBlue: { bg: '#D2D4FF', border: null },
      //       lighterPurple: { bg: '#E9D2FF', border: null },
      //       lighterPistachioGreen: { bg: '#D2FFF1', border: null },
      //       lighterBlue: { bg: '#D2ECFF', border: null },
      //       lightOrange: { bg: '#FFE5D2', border: null },
      //       lightestPurple: { bg: '#F8D2FF', border: null },
      //       lightGrey: { bg: '#EDEDED', border: null },
      //       lightYellow: { bg: '#FFF3D2', border: null },
      //       eventTextColor: '#6b7a88',
      //       iconColor,
      //       tagsBackgroundColor,
      //       textBackgroundColor,
      //       darkColor,
      //       mediumColor,
      //       lightColor,
      //       verylightColor,
      lightBackground,
      darkBackground,
      white,
      //       red,
      //       green,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  //  spacing: [0, 8, 16, 24, 32, 40]
  //  spacing: [0, 2, 3, 4, 32, 40]
});

// // overrides
// import MuiInput from './overrides/MuiInput';
// import MuiIconButton from './overrides/MuiIconButton';
// import MuiButton from './overrides/MuiButton';
// import MuiSvgIcon from './overrides/MuiSvgIcon';
// import MuiButtonBase from './overrides/MuiButtonBase';
// const theme = createMuiTheme({
//   palette: {

//     hexToRGBA,
//   },
//
//   overrides: {
//     // MuiInput,

//     // MuiIconButton,
//     // MuiButton,

//     // MuiSvgIcon,
//     // MuiButtonBase,
//   },
//   animations: {
//     transitions: {
//       slow: '500ms cubic-bezier(0.4, 0.0, 0.6, 1);',
//       fast: '200ms cubic-bezier(0.4, 0.0, 0.6, 1);',
//     },
//   },
//   shape: {
//     borderRadius: 3,
//   },
//   action,
// });
// theme.shadows[1] = '0px 1px 3px 0px rgba(0, 0, 0, 0.12),0px 1px 1px 0px rgba(0, 0, 0, 0.06),0px 2px 1px -1px rgba(0, 0, 0, 0.04)';
// theme.shadows[2] = '0px 1px 5px 0px rgba(0, 0, 0, 0.12),0px 2px 2px 0px rgba(0, 0, 0, 0.06),0px 3px 1px -2px rgba(0, 0, 0, 0.04)';
// theme.shadows[3] = '0px 1px 8px 0px rgba(0, 0, 0, 0.12),0px 3px 4px 0px rgba(0, 0, 0, 0.06),0px 3px 3px -2px rgba(0, 0, 0, 0.04)';
// theme.shadows[5] = '0px 3px 5px -1px rgba(0, 0, 0, 0.12),0px 5px 8px 0px rgba(0, 0, 0, 0.06),0px 1px 14px 0px rgba(0, 0, 0, 0.04)';
// theme.shadows[8] = '0px 5px 5px -3px rgba(0, 0, 0, 0.12),0px 8px 10px 1px rgba(0, 0, 0, 0.08),0px 3px 14px 2px rgba(0, 0, 0, 0.04)';

theme.direction = 'rtl';

export default theme;
