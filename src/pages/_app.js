import 'tailwindcss/tailwind.css';
import NavBar from "../components/NavBar";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#00563f'
        }
    }
})

function MyApp({Component, pageProps}) {
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
