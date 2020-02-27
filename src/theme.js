import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Barlow",
      "Leckerli"
    ] 
  }
});
theme = responsiveFontSizes(theme);

export default theme;
