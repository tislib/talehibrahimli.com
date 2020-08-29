import React from "react";
import { Project } from "../../base/Project";

export const OnlineazProject = () => {
  return (
    <Project
      name="onlineaz"
      title="Online.az"
      content={<h1>asdsadsd</h1>}
      order={1}
      link="http://online.az"
      shortDeskForResume="local domain selling system for AZ tld"
      showOnResume={true}
      skillsUsed="PHP, Yii1 framework, EPP protocol, Postgresql, jQuery, DNS"
      description={
        <span>
          Skills: Java, J2EE, EJB, JMS, Wildfly, Websocket, JAX-RS, Vaadin,
          Vaadin-Push, Android Period: Dec 2016 - Feb 2017
        </span>
      }
    />
  );
};
