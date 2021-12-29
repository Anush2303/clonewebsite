import React from 'react';
import '../css/SectionA.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const SectionA = () => {
    return (
        <div>
            <div className='row'>
                 <div className='header col-6'>
                   <div className='row'>
                   <div className='col-4 he1'>
                     <img src="https://www.theintersectionpaddington.com.au/wp-content/uploads/2021/06/Aesop-logo.png" alt="img"/>
                   </div>
                   <div className='col-8 he2'>                 
                   <p className='sheader'>Gift Selection, Simplified</p>
                   <p className='content'>Bring joy to deserving recipients of all stripes with a carefully curated selection of formulations for the skin, body and home. </p>
                   <button type="button" class="button button1">Browse all gifts {<FontAwesomeIcon icon={faArrowRight}/>}</button>
                   </div>
                   </div>
                  </div>
                  <div className='imgbg col-6'>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/7FCpperJ9RxcwrxLV32w0K/2340610bf80421506883d758f777915e/Aesop_Gift_Kits_2021_Web_Homepage_2_Primary_Product_Overlay_Desktop_Tablet_800x640px.png" className="sprayimg"alt="img"/>
                  </div>
            </div>
        </div>
    )
}
export default SectionA;
