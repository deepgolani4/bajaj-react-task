import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#22233B',
            contrastText: '#fff',
        },
        secondary: {
            main: '#8B8CF9',
            contrastText: '#fff',
        },
        error: {
            main: '#F6A48A',
            contrastText: '#fff',
        },
        grey: {
            main: '#3A3C63',
            contrastText: '#000',
        },
        warning: {
            main: '#FEB243',
            contrastText: '#fff',
        },
    },
    components: {
        // Name of the component
        MuiSwitch: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '1rem',
                },
                track: {
                    backgroundColor: '#ff7e7e',
                },
            },
        },
    },
});
export default theme;
