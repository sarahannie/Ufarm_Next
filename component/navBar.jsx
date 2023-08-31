"use client"
import '../public/css/index.css';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBars, faCartShopping, faCancel, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Button from './button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

    return (
        <nav className="navbar navbar-expand-lg  fixed-top">
          <div className="container-fluid">
            <button type="button" style={{ border: 'none', color: 'white', backgroundColor: 'transparent' }} className="navbar-toggle d-lg-none collapsed" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-expanded="false" aria-controls="navbarTogglerDemo03" onClick={toggleMenu} aria-label="Toggle navigation" id="menu-toggle">
              <span className="sr-only">Toggle navigation</span>
              <FontAwesomeIcon style={{ fontSize: '20px', width:'40px', color: 'none', border: 'none' }}  icon={isOpen?faTimes:faBars} />
            </button>
            <a className="navbar-brand" href="/">
              <Image src="/images/icons8-r-100.png" width={25} height={25} className="wt" alt="" />Farms</a>
            <div className="collapse navbar-collapse sidebar-wrapper" id="navbarTogglerDemo03">
              <ul className="navbar-nav  mb-2 mb-lg-0 navsb sidebar-nav">
                <li className="nav-item">
                  <a className="nav-link active mt-1" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active  mt-1" aria-current="page" href="/service">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active mt-1" aria-current="page" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active mt-2" aria-current="page" href="/cart"><FontAwesomeIcon style={{ fontSize: '20px', width:'40px' }}  icon={faCartShopping} /></a>
                </li>
                <li className="nav-item" >
                  <a className="nav-link active" aria-current="page" href="/signin" ><Button name="Sign Out" size={"12px"} padding={"6px"} borderRadius={"13px"} borderColor={"white"} /></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      );
}

export default Navbar