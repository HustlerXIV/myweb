import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
