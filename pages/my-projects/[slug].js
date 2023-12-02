import { useRouter } from "next/router";
import React from "react";
import ProjectModule from "@modules/MyProject/ProjectModule";
import { myProjectData } from "../../styles/data/myproject-data";
import Head from "next/head";

export default function Project() {
  const router = useRouter();
  const { slug } = router.query;
  const filteredData = myProjectData.filter((i) => i.slug === slug);

  return (
    <>
      <Head>
        <title>{filteredData[0].title}</title>
        <meta name="description" content="Here are my projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectModule data={filteredData[0]} />
    </>
  );
}
