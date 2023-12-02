import Head from "next/head";
import HomaPageModule from "@modules/HomePage/HomaPageModule";
import { myProjectData } from "../styles/data/myproject-data";

export default function Home() {
  const projectData = myProjectData.filter((i) => i.principal === true);

  return (
    <>
      <Head>
        <title>Napat Jaiyim</title>
        <meta
          name="description"
          content="Discover more about me, explore my portfolio, and don't hesitate to reach out."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomaPageModule projectData={projectData} />
    </>
  );
}
