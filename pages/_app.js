import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
