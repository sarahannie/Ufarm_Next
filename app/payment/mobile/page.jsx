import React from 'react';
import '../../../public/css/payment.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCalendarAlt, faClose, faCommentAlt, faDollarSign, faFileAlt, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const page = () => {

    return(
    <div className="container  d-md-flex align-items-center">
    <div className="card box1 shadow-sm p-md-5 p-md-5 p-4 content-to-hide">
      <div className="fw-bolder mb-4">
        <FontAwesomeIcon  style={{ fontSize: '15px', width:'40px' }}  icon={faDollarSign} /><span className="ps-1">599,00</span>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between text">
          <span className>Commission</span>
          <span className="ps-2"><FontAwesomeIcon  style={{ fontSize: '15px', width:'40px' }}  icon={faDollarSign} /><span className="ps-1">1.99</span></span>
        </div>
        <div className="d-flex align-items-center justify-content-between text mb-4">
          <span>Total</span>
          <span className="ps-2"><FontAwesomeIcon  style={{ fontSize: '15px', width:'40px' }}  icon={faDollarSign} /><span className="ps-1">600.99</span></span>
        </div>
        <div className="border-bottom mb-4" />
        <div className="d-flex flex-column mb-4">
          <span className="ps-2 text"><FontAwesomeIcon style={{ fontSize: '15px', width:'40px' }}  icon={faFileAlt} /><span className="ps-2">Invoice ID:</span></span>
          <span className="ps-3">SN8478042099</span>
        </div>
        <div className="d-flex flex-column mb-5">
          <span className="ps-2"><FontAwesomeIcon  style={{ fontSize: '15px', width:'40px' }}  icon={faCalendarAlt} />Next payment:</span>
          <span className="ps-3">22 march,2023</span>
        </div>
        <div className="d-flex align-items-center justify-content-between text mt-5">
          <div className="d-flex flex-column text">
            <span>Customer Support:</span> <span>online chat 24/7</span>
          </div>
          <div className="btn btn-primary rounded-circle">
            <FontAwesomeIcon style={{ fontSize: '15px', width:'40px' }}  icon={faCommentAlt} />
          </div>
        </div>
      </div>
    </div>
    <div className="card box2 shadow-sm">
      <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
        <span className="h5 fw-bold m-0">Payment methods</span>
        <div className="btn btn-primary bar">
        <a href='/service' className='close'>
          <FontAwesomeIcon  style={{ fontSize: '15px', width:'40px' }}  icon={faClose} />
        </a>
        </div>
      </div>
      <ul className="nav nav-tabs mb-3 px-md-4 px-2">
        <li className="nav-item">
          <a className="nav-link px-2 " aria-current="page" href="/payment">Credit Card</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-2 active"  href="/payment/mobile">Mobile Money</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-2 " href="/payment/bank">Bank Transfer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-2" href="#">PayStack</a>
        </li>
        
      </ul>
      <div className="px-md-5 px-4 mb-4 d-flex align-items-center">
        <div className="btn btn-success me-4">
          <FontAwesomeIcon  style={{ fontSize: '15px', width:'40px' }}  icon={faPlus} />
        </div>
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
          <label className="btn btn-outline-primary" htmlFor="btnradio1"><span className="pe-1">+</span>5949</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
          <label className="btn btn-outline-primary" htmlFor="btnradio2"><span className="lpe-1">+</span>3894</label>
        </div>
      </div>
      <form action>
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column px-md-5 px-4 mb-4">
              <span>Bank Name</span>
              <div className="inputWithIcon">
                <input className="form-control" type="text" defaultValue="MOMO" readOnly />
                <span className>
                  <Image src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" width={40} height={40} alt="master_card" /></span>
              </div>
            </div>
          </div>
          <div className="col-md-12 d-flex ">
            <div className="d-flex flex-column px-md-5  px-4 mb-4">
              <span>Account Number</span>
              <div className="inputWithIcon">
                <input type="text" className="form-control" defaultValue="000984567" readOnly/>
                <span className="fas fa-calendar-alt" />
              </div>
            </div>
            <div>
                <FontAwesomeIcon  style={{ fontSize: '15px', marginTop:'10px' }}  icon={faCalendarAlt} />
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-column px-md-5 px-4 mb-4">
              <span>Name</span>
              <div className="inputWithIcon d-flex">
                <input className="form-control text-uppercase" type="text" defaultValue="valdimir berezovkiy" />
               <FontAwesomeIcon className='fas'  style={{ fontSize: '15px', marginTop:'10px' }}  icon={faUser} />
              </div>
            </div>
          </div>
          <div className="col-12 px-md-5 px-4 mt-3">
            <div className="btn btn-primary w-100">Pay $599.00</div>
          </div>
        </div>
      </form>
    </div>
  </div>
);
}

export default page