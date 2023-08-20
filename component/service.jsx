"use client"
import Navbar from './navBar';
import Footer from './footer';
import CardService from './cardService';
import Search from './search';
import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Service = () => {

  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/product.json')
      .then(res => setProduct(res.data))
  }, [])

  return (
    <div>
      <Navbar />
      <Search searchTerm={searchTerm} product={product} setSearchTerm={setSearchTerm} />
      {/* Card start */}
      <div className='mb-5'>
        <div className="container">
          <div className="row">
            <CardService searchTerm={searchTerm} setSearchTerm={setSearchTerm} product={product} setProduct={setProduct} />
            <CardService searchTerm={searchTerm} setSearchTerm={setSearchTerm} product={product} setProduct={setProduct} />
            <CardService searchTerm={searchTerm} setSearchTerm={setSearchTerm} product={product} setProduct={setProduct}/>
            <CardService searchTerm={searchTerm} setSearchTerm={setSearchTerm} product={product} setProduct={setProduct}/>
            <CardService searchTerm={searchTerm} setSearchTerm={setSearchTerm} product={product} setProduct={setProduct}/>
          </div>
        </div>
      </div>
      {/* Card end */}
      <Footer />
    </div>
  )
}

export default Service;