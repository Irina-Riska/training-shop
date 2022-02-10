import React from 'react';



const AIcon =({
    propSrc,
    styling,
    width,
    height,
    propAlt

})=>{
   const styleIcon={
       styling,
       width:width,
       height:height,
    
          }


return (
    <img style={styleIcon} src={propSrc} alt={propAlt}/>
)

}


export default AIcon;