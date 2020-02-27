import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';
import { spacing } from '@material-ui/system'

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
