import React from "react";
import { ProjectParams } from "../../base/Project";
import { getResources } from "../../services/resources-service";
import * as resources from "../../resources";

const projects: ProjectParams[] = getResources(resources.projects);

export class PortfolioProjectPage extends React.Component<any, any> {
  render() {
    const projectName = this.props.match.params.name;
    const project: ProjectParams = projects.filter(
      (item) => item.name === projectName
    )[0];

    return (
      <>
        <div className="website-root">
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="content">
                    <h1>{project.name}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
