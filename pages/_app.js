import React, { useEffect } from "react";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import "../styles/globals.css";
import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga";
const TRACKING_ID = "G-FNH90DK17T";
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="font-kRegular" style={{ marginBottom: "40px" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
