import React from 'react';
import '../css/SectionE.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';

const SectionE = () => {
    return (
        <div>
            <div className='row'>
                <div className='esection col-12 col-lg-6'>                 
                   <p className='eheader'>Store locator</p>
                   <p className='content'>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
                   <button type="button" class="button button1">Find a nearby store     {<FontAwesomeIcon icon={faArrowRight}/>}</button>
                </div>
                  <div className='col-12 col-lg-6'>
                  <Carousel variant="dark">
                  <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src="https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg"
                  alt="First slide"
                 />
                 </Carousel.Item>
                 <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg"
                alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg"
                alt="Third slide"
                />
               </Carousel.Item>
                </Carousel>
             </div>
             </div>
        </div>
    )
}
export default SectionE;
