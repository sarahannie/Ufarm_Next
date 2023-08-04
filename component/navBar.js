"use client"
import React from 'react'

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg  fixed-top">
          <div className="container-fluid">
            <button type="button" className="navbar-toggle d-lg-none collapsed" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-expanded="false" aria-controls="navbarTogglerDemo03" aria-label="Toggle navigation" id="menu-toggle">
              <span className="sr-only">Toggle navigation</span>
              <i className="ic fa fa-bars" />
            </button>
            <a className="navbar-brand" href="/"><img src="../images/icons8-r-100.png" width="25%" className="wt" alt="" />Farms</a>
            <div className="collapse navbar-collapse sidebar-wrapper" id="navbarTogglerDemo03">
              <ul className="navbar-nav  mb-2 mb-lg-0 navsb sidebar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/service">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active mt-1" aria-current="page" href="/cart"><i className="fa-solid fa-cart-shopping" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/logout">Signout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      );
}

export default Navbar