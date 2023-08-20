"use client"
import React from 'react';
import style from './cardService.module.css';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import axios from 'axios';

const CardService = ({ product, searchTerm }) => {

  const filteredProducts = product.filter((item) => 
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);
  
  
  return (
        <>
          {
            filteredProducts.map( (item) => (
              <div className={`card mx-auto col-md-3 col-lg-4 col-10 mt-5 ${style.card}`} key={item.id}>
                <Image className={`mx-auto  ${style.imgThumbnail}`} src={item.img} alt='products' width={120} height={150} />
              <div className={`card-body text-center mx-auto`}>
                <div className="cvp">
                  <h5 className="card-title font-weight-bold">{item.name}</h5>
                  <p className="card-text">{item.price}</p>
                  <div className={style.btnFlex}>
                    <a href="#" className={`btn details px-auto ${style.details}`}>AddCart</a>
                    <a href="#" className={`btn det px-4 ${style.det}`}>View</a>
                  </div>
                </div>
              </div>
              </div>
            ))
          }
      </> 
  )
}

export default CardService
