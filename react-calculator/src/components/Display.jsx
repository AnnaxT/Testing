import React from 'react';
import '../Display.scss';

export default function Display({ topValues, bottomValue }) {
    
    return(
<div className="Display">
    <div className="topValues"> {topValues} </div>
    <div className="bottomValue"> {bottomValue} </div>
</div>
    )
}