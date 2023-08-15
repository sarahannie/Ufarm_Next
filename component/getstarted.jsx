"use client";
import React from 'react'
import Button from './button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import style from './getStarted.module.css';
import {useState} from 'react'


const GetStarted = () => {
  const[ isHover, setIsHover] = useState(false);
   const handleOut = () =>{
     setIsHover(false);
   }
   const handleOver = () =>{
     setIsHover(true);
   }

   const boxStyle = {
    backgroundColor: isHover ?  '#10571b' : 'transparent',
    color: isHover ? 'white' : '#10571b',
 };

  return (
    <div className='container text-center items-center'>
        <div className='text-center front-face py-2 mb-5 tet'>
            <h1 className='py-3'> Get Started</h1>
            <h3 className=' pb-5'>The Exciting World of Over 1000+ Products Awaits You.</h3>
            <p className='my-5'>
                <a className="nav-link active" aria-current="page" href="/login" ><Button name="Sign Up" size={"30px"} padding={"20px"} borderRadius={"10px"} borderColor={"#10571b"}  onMouseEnter={handleOver} onMouseLeave={handleOut} boxStyle={boxStyle}  /></a>
            </p>
            
        </div>
        <div className={style.txt}> 
                {/* Twitter */}
                <a className={style.icon} role="button"><FontAwesomeIcon style={{fontSize:'30px'}} icon={faTwitter} /></a>
                {/* Google */}
                <a className={style.icon} role="button"><FontAwesomeIcon style={{fontSize:'30px'}} icon={faInstagram} /></a>
                {/* Instagram */}
                <a className={style.icon} role="button"><FontAwesomeIcon style={{fontSize:'30px'}} icon={faLinkedin} /></a>
              </div>
    </div>
  )
}

export default GetStarted