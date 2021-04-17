import 'tailwindcss/tailwind.css';
import NavBar from "../components/NavBar";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {useEffect} from "react";

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#00563f'
        }
    }
})

export const apiUrl = 'http://localhost:5000';

function MyApp({Component, pageProps}) {

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={customTheme}>
            <div className="w-11/12 mx-auto max-w-screen-xl">
                <NavBar />
                <div className="mt-14">
                    <Component {...pageProps} />
                </div>
            </div>
        </ThemeProvider>

    );
}

export default MyApp
