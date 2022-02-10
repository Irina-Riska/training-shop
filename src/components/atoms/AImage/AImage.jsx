import React from 'react';



const AImage=({
    propSrc,
    styling,
    width,
    height,
    propAlt

})=>{
    const styleImg={
        styling,
        width:width,
        height:height
    }

    return (
        <img
         style={styleImg}
         src={propSrc}
         alt={propAlt}
         />     
        )
}


export default AImage;
