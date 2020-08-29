import React from "react";
import { Project } from "../../base/Project";

export const TaxiManagementSystemProject = () => {
  return (
    <Project
      name="taxi-management-system"
      title="Taxi Management System"
      content={<h1>asdsadsd</h1>}
      order={1}
      // link='http://www.accept360.com'
      showOnResume={true}
      skillsUsed="Java, J2EE, EJB, JMS, Wildfly, Websocket, JAX-RS, Vaadin, Vaadin-Push, Android"
      period="Dec 2016 - Feb 2017"
      description={
        <span>
          Skills: Java, J2EE, EJB, JMS, Wildfly, Websocket, JAX-RS, Vaadin,
          Vaadin-Push, Android Period: Dec 2016 - Feb 2017
        </span>
      }
    />
  );
};
