import {
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
     main: '#429ecd'
    },
    background: {
      default: '#429ecd'
    }
  },
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
