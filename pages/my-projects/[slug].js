import { useRouter } from "next/router";
import React from "react";
import ProjectModule from "@modules/MyProject/ProjectModule";
import { myProjectData } from "../../styles/data/myproject-data";

export default function Project() {
  const router = useRouter();
  const { slug } = router.query;
  const filteredData = myProjectData.filter((i) => i.slug === slug);

  return <ProjectModule data={filteredData[0]} />;
}
