import React from 'react';

const Highlight2 = (
    {children, color}) => (  
    <span    style={{backgroundColor: color,borderRadius: '2px', color: '#fff', padding: '0.2rem',    }}>    
        Hello {children}  
    </span>
    );

    export default Highlight2


