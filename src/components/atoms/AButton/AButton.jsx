import React from 'react';

const AButton = ({
    propType, 
    propText, 
    action, 
    styling
    }) => {

        const styleButton={
            styling,
            width:'200px',
            background:'red'
        }
        
    return(
        <button style={styleButton}
         type={propType} 
         onClick={action}
         >
             {propText}
             </button>
    )
}
export default AButton;


