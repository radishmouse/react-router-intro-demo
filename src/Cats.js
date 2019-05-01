import React from 'react';

import { Link } from 'react-router-dom';

const arrayOfCats = [
    'oakley',
    'milla',
    'angela',
    'chris'
];

function Cats({match, history}) {

    const catLinks = arrayOfCats.map(catName => (
        <li>
            <Link to={`${match.path}/${catName}`}>{catName}</Link>
        </li>        
    ));

    return (
        <div>
            <h1>🐈</h1>
            <ul>                
                {catLinks}
            </ul>
            <button onClick={() => {
                // history.push lets us programmatically go to 
                // a different route.
                // You can use this instead of a <Link> component.
                // You will use this instead of <Link> if you need to
                // trigger some other custom code, like a setState.
                history.push('/');
                // `history` is not an array, but you can imagine
                // that it manages the paths you've been to as an array.
            }}>Go home</button>
        </div>
    );
}

export default Cats;