import React from 'react';
import '../css/SectionB.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const SectionB = () => {
    return (
        <div className='section'>
            <div className='row'>
                <div className='contentsection col-12 col-lg-6'>                 
                   <p className='sheader'> Portable indispensables </p>
                   <p className='content'>These skin, hair and body care formulations are suitably sized to refresh frequent travellers en route and at destination. </p>
                   <button type="button" class="button button1">Browse gifts for travel {<FontAwesomeIcon icon={faArrowRight}/>}</button>
                </div>
                  <div className='sectionimgb col-12 col-lg-6'>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/77yoCImkQBFAwO9DNpfig1/b57b79cd4f1eb9ae8f944f6d7ca82834/Aesop_Gift_Kits_2021_Web_Homepage_Secondary_Product_Arrival_Kit_Mid_Desktop_2560x1440px.jpg" alt="img"/>
                  </div>
                </div>
        </div>
    )
}
export default SectionB;