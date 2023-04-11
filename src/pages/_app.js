import AuthContext from "../Context/AuthContext";
import "@/styles/globals.css";
import "../Components/Authentication/style.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthContext>
      <Component {...pageProps} />;
    </AuthContext>
  );
}
