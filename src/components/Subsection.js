import React from 'react';
import '../css/Subsection.css';

const Subsection = (props) => {
    return (
        <div>
            <img src={props.link} alt="img" className='cimg'/>
            <div className='content_'>
            <h6>{props.title}</h6>
            <p>{props.subtitle}</p>
            </div>
        </div>
    )
}
export default Subsection;
