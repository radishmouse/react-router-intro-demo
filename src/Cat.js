import React from 'react';

function Cat({match}) {
    return (
        <div>        
        Hello, {match.params.cat}!
        </div>
    );
}

export default Cat;