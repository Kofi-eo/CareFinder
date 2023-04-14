import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/style.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import AuthContext from "../Context/AuthContext";
import { MapsContextProvider } from "@/Context/googleMapsContext";


export default function App({ Component, pageProps }) {
  
  return (
    // <AuthContext>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MapsContextProvider>  
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MapsContextProvider>
      </LocalizationProvider>
    // </AuthContext>
  );
}
