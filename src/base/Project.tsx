import React from "react";
import { DynamicComponent } from "./dynamic-component";

export interface ProjectParams extends DynamicComponent {
  description: React.ComponentElement<any, any>;
  name: string;
  title: string;
  content?: React.ComponentElement<any, any>;
  link?: string;
  showOnResume?: boolean;
  skillsUsed?: string;
  period?: string;
  order: number;
  shortDeskForResume?: string;
}

export function Project(props: ProjectParams) {
    return <></>;
}
