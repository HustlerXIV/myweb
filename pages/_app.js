import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/style.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="font-kRegular">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
