import React from 'react';
import {ProjectParams} from '../../base/Project';
import {Link} from 'react-router-dom';

export function PortfolioItem(props: ProjectParams) {
    return <>
        <div>
            <h2 id={props.name}>{props.title}</h2>
            <p>
                {props.description}
            </p>
            <Link to={'/portfolio/' + props.name}>Details</Link>
        </div>
    </>;
}
