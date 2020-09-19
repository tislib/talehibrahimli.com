import React from "react";
import { Project } from "../../base/Project";

export const EuniversityProject = () => {
  return (
    <Project
      name="electron-university"
      title="Electron University1"
      content={<h1>asdsadsd</h1>}
      order={1}
      skillsUsed="Java, Spring, Spring Security, GWT, GXT, EXTJS, IText, phantomjs, postgresql"
      showOnResume={true}
      period="March 2014 - Dec. 2014"
      shortDeskForResume="University Education Management system"
      description={
        <span>
          Electron University - (University Education Management system) Skills
          used: Java, Spring, Spring Security, GWT, GXT, EXTJS, IText,
          phantomjs, postgresql Period: March 2014 - Dec. 2014
        </span>
      }
    />
  );
};
