import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const lightTheme = createTheme({
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {}
        }
    },
    palette: {
        background: {
            default: grey[300]
        },
        mode: 'light',
        primary: {
            main: '#4A148C'
        },
        secondary: {
            main: '#19857B'
        },
        error: {
            main: red.A400
        },
    },
});
  