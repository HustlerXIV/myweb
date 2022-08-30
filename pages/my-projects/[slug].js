import { useRouter } from "next/router";
import React from "react";
import ProjectModule from "../../modules/MyProject/ProjectModule";

export default function Project() {
  const router = useRouter();
  const { slug } = router.query;
  return <ProjectModule />;
}
