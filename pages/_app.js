import React, { useEffect } from "react";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import "../styles/globals.css";
import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
