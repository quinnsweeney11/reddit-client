import React from 'react';


export function Filter(props) {
    return(
        <div className="filter">
            <button onClick={() => console.log('hot')}>Hot</button>
            <button onClick={() => console.log('new')}>New</button>
        </div>
    )
}