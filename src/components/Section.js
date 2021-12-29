import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import '../css/Section.css';

const Section = (props) => {
    return (
        <div className='section'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                <video className="sectionimg" controls>
                      <source src={props.link} type="video/mp4"/>
                </video>
                </div>
                <div className='contentsection col-12 col-lg-6'>
                   <p className='sheader'>{props.title}</p>
                   <p className='content'>{props.content}</p>
                   <button type="button" class="button button1">{props.btntitle} {<FontAwesomeIcon icon={faArrowRight}/>}</button>
                </div>
            </div> 
        </div>
    )
}
export default Section;
