import {
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Barlow",
      "Leckerli"
    ]
  },
  spacing: 1
});
theme = responsiveFontSizes(theme);

export default theme;
