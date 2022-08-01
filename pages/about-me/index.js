import Head from "next/head";
import React from "react";
import AboutMeModule from "../../modules/AboutMe/AboutMeModule";

export default function AboutMePage() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutMeModule />
    </>
  );
}
