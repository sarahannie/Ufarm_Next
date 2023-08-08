import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div>
         {/*footer start */}
      {/* Footer */}
      <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#10571b'}}>
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section className>
            {/*Grid row*/}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  <a className="navbar-brand" href="#"><img src="../images/icons8-r-100.png" width="25%" alt="" />Farms</a>
                </h6>
                <p>
                  We are here to provide you with the best agricultural products of all ranging from fruit, livestock, livestock feeds and fertilizer.
                  When it comes to agriculture products we got you covered.
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a className="text-white">Livestock</a>
                </p>
                <p>
                  <a className="text-white">Feeds</a>
                </p>
                <p>
                  <a className="text-white">Fruits</a>
                </p>
                <p>
                  <a className="text-white">Crops</a>
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Account
                </h6>
                <p>
                  <a className="text-white">Home</a>
                </p>
                <p>
                  <a className="text-white">Service</a>
                </p>
                <p>
                  <a className="text-white">Signup</a>
                </p>
                <p>
                  <a className="text-white">Cart</a>
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3" /> Uganda, Ug 11,</p>
                <p><i className="fas fa-envelope mr-3" /> u-farms@gmail.com</p>
                <p><i className="fas fa-phone mr-3" /> +255 234 567 88</p>
                <p><i className="fas fa-print mr-3" />+255 234 567 88</p>
              </div>
              {/* Grid column */}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
          <hr className="my-3" />
          {/* Section: Copyright */}
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                {/* Copyright */}
                <div className="p-3">
                  © 2023 Copyright
                  <a className="text-white" href="https://mdbootstrap.com/">U-farms</a>
                </div>
                {/* Copyright */}
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
               
                {/* Twitter */}
                <a className="btn btn-outline-light btn-floating m-1" role="button"><FontAwesomeIcon style={{fontSize:'30px'}} icon={faTwitter} /></a>
                {/* Google */}
                <a className="btn btn-outline-light btn-floating m-1" role="button"><FontAwesomeIcon style={{fontSize:'30px'}} icon={faInstagram} /></a>
                {/* Instagram */}
                <a className="btn btn-outline-light btn-floating m-1" role="button"><FontAwesomeIcon style={{fontSize:'30px'}} icon={faLinkedin} /></a>
              </div>
              {/* Grid column */}
            </div>
          </section>
          {/* Section: Copyright */}
        </div>
        {/* Grid container */}
      </footer>
      {/* Footer */}
      {/* End of .container */}
      {/*footer end */}
    </div>
    );
}

export default Footer