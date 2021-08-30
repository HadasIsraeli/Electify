import React from 'react';

const Card = (props) => {
    const classes = props.className + " card";
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;