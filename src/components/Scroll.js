import React from 'react';

// It's a Wrap Components, it can use children
const Scroll = (props) => { 
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;