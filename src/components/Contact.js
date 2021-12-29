import React from 'react';
import '../css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight,faCompressAlt} from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin,FaTwitterSquare,FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='contact'>
            <div className='row'>
                <div className='col-12 col-lg-3'>
                <button type="button" class="button button1" style={{width:"100%"}}>Email Address {<FontAwesomeIcon icon={faArrowRight}/>}</button>
                <p className='subhead'>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy {<FontAwesomeIcon icon={faCompressAlt}/>}</p>
                </div>
                <div className='col-3'>
                 <p className='head'>Orders and Support</p>
                 <p className='subhead'>Contact us</p>
                 <p className='subhead'>FAQs {<FontAwesomeIcon icon={faCompressAlt}/>}</p>
                 <p className='subhead'>Shipping {<FontAwesomeIcon icon={faCompressAlt}/>}</p>
                 <p className='subhead'>Returns {<FontAwesomeIcon icon={faCompressAlt}/>}</p>
                 <p className='subhead'>Order history</p>
                 <p className='subhead'>Terms and Conditions</p>
                </div>
                <div className='col-3'>
                 <p className='head'>Services</p>
                 <p className='subhead'>Live Assistance</p>
                 <p className='subhead'>Corporate gifts</p>
                 <p className='subhead'>Facial appointments</p>
                </div>
                <div className='col-3'>
                 <p className='head'>Location preferences</p>
                 <p className='subhead'>Shipping: <span className='high'>Hong Kong (S.A.R)</span></p>
                 <p className='subhead'>Language: <span className='high'>English</span></p>
                </div>
            </div>
            <div className='row'>
            <div className='col-12 col-lg-3'>
                 <p className='head'>Sustainability</p>
                 <p className='subhead'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                </div>
                <div className='col-3'>
                 <p className='head'>Services</p>
                 <p className='subhead'>Our story</p>
                 <p className='subhead'>Foundation {<FontAwesomeIcon icon={faCompressAlt}/>}</p>
                 <p className='subhead'>Carrers</p>
                 <p className='subhead'>Privacy policy</p>
                 <p className='subhead'>Accessibility</p>
                </div>
                <div className='col-3'>
                 <p className='head'>Social media</p>
                 <p className='subhead'>Instagram {<FontAwesomeIcon icon={faCompressAlt}/>}</p>
                 <p className='subhead'>Twitter {<FontAwesomeIcon icon={faCompressAlt}/>}</p>
                 <p className='subhead'>Linkedin {<FontAwesomeIcon icon={faCompressAlt}/>}</p>
                 <p className='subhead'>WeChat</p>
                 <p className='subhead'>Weibo {<FontAwesomeIcon icon={faCompressAlt}/>}</p>
                </div>
            </div>
            <div className='Border'>
            </div>
            <div className='footer'>
            <p className='subhead'>ⓒAesop</p>
            <div className='icons'>
               <FaInstagramSquare/>?
               <FaTwitterSquare/>?
               <FaLinkedin/>?
            </div>
            </div>
        </div>
    )
}
export default Contact;
