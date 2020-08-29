import React from "react";
import { Project } from "../../base/Project";

export const KayakoProject = () => {
  return (
    <Project
      name="kayako"
      title="Kayako"
      content={<h1>asdsadsd</h1>}
      showOnResume={true}
      order={1}
      skillsUsed="Java, Spring boot, Mysql, Activiti"
      description={<span>Skills used: Java, Spring boot, Mysql, Activiti</span>}
    />
  );
};
