import React from "react";
import { Project } from "../../base/Project";

export const CrossoverBandcampProject = () => {
  return (
    <Project
      name="crossover-bandcamp"
      title="Crossover.com"
      showOnResume={true}
      order={1}
      skillsUsed="Java, Spring boot, Mysql, Activiti"
      content={<h1>Skills used: Java, Spring boot, Mysql, Activiti</h1>}
      description={<span>Skills used: Java, Spring boot, Mysql, Activiti</span>}
    />
  );
};
