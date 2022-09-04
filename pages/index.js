import Head from "next/head";
import HomaPageModule from "@modules/HomePage/HomaPageModule";
import { myProjectData } from "../styles/data/myproject-data";
import MyModal from "@components/modal";
import { useState } from "react";

export default function Home() {
  const projectData = myProjectData.filter((i) => i.principal === true);

  return (
    <>
      <Head>
        <title>Napat Jaiyim</title>
        <meta
          name="description"
          content="There are my information, my projects and my skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomaPageModule projectData={projectData} />
    </>
  );
}
