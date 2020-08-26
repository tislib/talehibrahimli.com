import React from 'react';

import * as resources from '../../resources';
import {getResources} from '../../services/resources-service';
import {PortfolioItem} from './PortfolioItem';
import {ProjectParams} from '../../base/Project';

const projects: ProjectParams[] = getResources(resources.projects);

// console.log(resources.projects);
console.log(projects.map(item => item));

export const Portfolio = () => {
    return (<>
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="content">
                            {projects.map(item => <PortfolioItem key={item.name} {...item}/>)}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>);
};
