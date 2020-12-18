import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography : {
    fontFamily : [
      '"Noto Sans KR"',
      'sans-serif'
    ].join(',')
  },
  palette : {
    primary : {
      main : '#212121'
    },
    secondary : {
      main : '#29b6f6'
    }
  }
});
export default theme;
