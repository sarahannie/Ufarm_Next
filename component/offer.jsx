import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import style from './offer.module.css';
import { faHeadset, faLock,  faRotate, faShippingFast, faTags } from '@fortawesome/free-solid-svg-icons';

const Offer = () => {
  return (
  
    
    <div className={` container-fluid     ${style.container}`}>
      <div className={` container column d-flex ${style.container1}`}> 
        <div className={` d-flex mr-5`}>
          <div className={`px-4`}>
            <a className={style.icon} role="button"><FontAwesomeIcon style={{fontSize:'30px'}} icon={faShippingFast} /></a>
          </div>
          <div >
            <h3 className={` ${style.txt}`}>Free Shipping</h3>
            <h4 className={` ${style.txt2}`}> For all orders over $200</h4>
          </div>
        </div>
        <div className={` d-flex `}>
          <div className={`px-4`}>
            <a className={style.icon} role="button"><FontAwesomeIcon style={{fontSize:'30px'}} icon={faRotate} /></a>
          </div>
          <div>
            <h3 className={` ${style.txt}`}>1 & 1 Returns</h3>
            <h4 className={` ${style.txt2}`}>Cancellation after 1 day</h4>
          </div>
        </div>
        <div className={` d-flex `}>
          <div className={`px-4`}>
            <a className={style.icon} role="button"><FontAwesomeIcon style={{fontSize:'30px'}} icon={faLock} /></a>
          </div>
          <div>
            <h3 className={` ${style.txt}`}>100% Secure Payments</h3>
            <h4 className={` ${style.txt2}`}>Guaranteed secure payments</h4>
          </div>
        </div>
        <div className={` d-flex `}>
          <div className={`px-4`}>
            <a className={style.icon} role="button"><FontAwesomeIcon style={{fontSize:'30px'}} icon={faHeadset} /></a>
          </div>
          <div>
            <h3 className={` ${style.txt}`}>24/7 Dedicated Support</h3>
            <h4 className={` ${style.txt2}`}>Anywhere & anytime</h4>
          </div>
        </div>
        <div className={` d-flex `}>
          <div className={`px-4`}>
            <a className={style.icon} role="button"><FontAwesomeIcon style={{fontSize:'30px'}} icon={faTags} /></a>
          </div>
          <div>
            <h3 className={` ${style.txt}`}>Daily Offers</h3>
            <h4 className={` ${style.txt2}`}>Discount up to 70% OFF</h4>
          </div>
        </div>
        </div>
    </div>
    
  )
}

export default Offer