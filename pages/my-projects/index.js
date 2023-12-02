import Head from "next/head";
import React from "react";
import MyProjectsModule from "@modules/MyProject/MyProjectsModule";
import { myProjectData } from "../../styles/data/myproject-data";

export default function MyProjectsPage() {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Here are my projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyProjectsModule data={myProjectData} />
    </>
  );
}
