import React from 'react';



const AText = ({
    propText,
    sizeFont,
    color
}) => {
    const style={
        color:color,
        fontSize:sizeFont,
    }

    return (
        <p style={style}>{propText}</p>
    )
}

export default AText;


