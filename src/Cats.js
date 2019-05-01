import React from 'react';

import { Link } from 'react-router-dom';

const arrayOfCats = [
    'oakley',
    'milla',
    'angela',
    'chris'
];

function Cats(props) {

    const catLinks = arrayOfCats.map(catName => (
        <li>
            <Link to={`${props.match.path}/${catName}`}>{catName}</Link>
        </li>        
    ));

    return (
        <div>
            <h1>🐈</h1>
            <ul>                
                {catLinks}
            </ul>
        </div>
    );
}

export default Cats;