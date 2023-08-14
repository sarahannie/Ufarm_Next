"use client";
import React from 'react';
import '../public/css/testimonal.css';
import Image from 'next/image';
import { useEffect, useState} from 'react';
import axios from 'axios';

const Testimonal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get('./testmonial.json')
      .then(res =>  setData(res.data ))
      .catch(err => {console.log(err) })
  })
  return (
    <div className="container pb-5">
      <div className='text-center front-face py-2 mb-5 tet'>
      <h1 className='py-3'>Success Stories</h1>
      <h4 className=' pb-5'>Read inspiring stories about how our users first started their journey</h4>
      </div>
      
    <div className="row">
      
        {
          data.map((item) =>(
            <div className="col-lg-4" key={item.id}>
               <div className="card" key={item.id}>
          <div className="face front-face">
            <Image src={item.img} width={250} height={250} alt="testimonal_image" className="profile" />
            <div className="pt-3 text-uppercase name">
             {item.name}
            </div>
            <div className="designation">{item.occupation}</div>
          </div>
          <div className="face back-face">
            <span className="fas fa-quote-left" />
            <div className="testimonial">
              {item.testimonal}
            </div>
            <span className="fas fa-quote-right" />
          </div>
        </div>
            </div>
          ))
         
        }
        
      
  
      
    </div>
  </div>
  )
}

export default Testimonal