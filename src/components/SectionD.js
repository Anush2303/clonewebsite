import React from 'react';
import '../css/SectionD.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const SectionD = () => {
    return (
        <div>
            <h3 className='dhead'>Thoughtful Offerings</h3>
            <Carousel dynamicHeight={true} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/5f6C19Q6xLutRoJ1tvEYDF/c3632e644b1ce72b71b70d8d34abe57f/Aesop-Skin-Fabulous-Face-Cleanser-100mL-large.png" className='oimg' alt="img"/>
                     <div className='legend'>
                         <h5>Fabulous Face Cleanser</h5>
                         <h6>For skin requiring gentle cleansing</h6>
                     </div>
                </div>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/LL8pUKUiuq1n8mKKpLdbb/b41e1d77b6dfeca7632d6677ee232fcb/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png" className='oimg'alt="img"/>
                    <div className='legend'>
                         <h5>Parsley Seed facial Cleanser</h5>
                         <h6>Ideal for city dwellers</h6>
                     </div>
                </div>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/1D8SZ3pwiWAd4iHgyaLwUK/58cab4eb3026ea8c0a48760a52830b85/Aesop-Body-Geranium-Leaf-Body-Cleanser-100mL-Hybris-Large-835x962px.png" className='oimg'alt="img"/>
                    <div className='legend'>
                         <h5>Geranium leaf body cleanser</h5>
                         <h6>A gentle,ivigorating gel cleanser</h6>
                     </div>
                </div>
                <div>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/3Anppvln8ifrtIrGGmYnnN/f3a9d64dd310ad72608cf566ff28b2b2/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png" className='oimg'alt="img"/>
                    <div className='legend'>
                         <h5>Resurrection Aromatique Hand wash</h5>
                         <h6>Gentle cleansing for hard working hands</h6>
                     </div>
                </div>
            </Carousel> 
        </div>
    )
}
export default SectionD;
