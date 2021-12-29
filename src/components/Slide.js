import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slide = () => {
    return (
        <div>
           <Carousel>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/2cACZYBRezEJSSkOnyHsNr/26ae5054fc9b0c24e9d230403e029b3b/Aesop_Kits_Gift_Kits_2021-22_The_Listener_Web_Large_1584x962px.png" alt="img"/>
                     <div className='legend'>
                         <h5>The Listener</h5>
                         <h6>Cleanser,Balm,Scrub</h6>
                     </div>
                </div>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/1M1ajBgz6IPtgvT6djQNWj/740332d61987548a3804ec43574bcf62/Aesop_Kits_Gift_Kits_2021-22_The_Forager_Web_Large_1584x962px.png" alt="img"/>
                    <div className='legend'>
                         <h5>The Forager</h5>
                         <h6>Two invigorating Body care staples</h6>
                     </div>
                </div>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/1lHhiEuUu6rCEFCCS4iuR6/6c2736de4daba4326e46957f1c062066/Aesop_Kits_Gift_Kits_2021-22_The_Advocate_Web_Large_1584x962px.png" alt="img"/>
                    <div className='legend'>
                         <h5>The Advocate</h5>
                         <h6>Four hand and body care staples</h6>
                     </div>
                </div>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/2KeBWwSkfytrOdyQANwZ4U/1ff0028aa530d8e94aabf9e8f8e51d96/Aesop_Kits_Gift_Kits_2021-22_The_Protector_Web_Large_1584x962px.png" alt="img"/>
                    <div className='legend'>
                         <h5>The Protector</h5>
                         <h6>For maintaining aromatic balance at home</h6>
                     </div>
                </div>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/21BZNMb2qajrxO3ymQ5Pmn/5db32b36ae37c16c9bda4aaad1136aa8/Aesop_Kits_Gift_Kits_2021-22_The_Mentor_Web_Large_1584x962px.png" alt="img"/>
                    <div className='legend'>
                         <h5>The Mentor</h5>
                         <h6>Cleanser,toner,hydrating serum</h6>
                     </div>
                </div>
            </Carousel> 
        </div>
    )
}
export default Slide;
