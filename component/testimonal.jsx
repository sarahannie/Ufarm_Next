"use client";
import React from 'react';
import style from './testimonal.module.css'
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
    <div className={`container pb-5 ${style.container}`}>
      <div className={`text-center py-2 mb-5  ${style.tet} ${style.frontFace}`}>
      <h1 className='py-3'>Success Stories</h1>
      <h4 className=' pb-5'>Read inspiring stories about how our users first started their journey</h4>
      </div>
      
    <div className="row">
      
        {
          data.map((item) =>(
            <div className={`col-lg-4 ${style.colLg4}`} key={item.id}>
               <div className={`card ${style.card}`} key={item.id}>
          <div className={`face front-face ${style.face} ${style.frontFace}`}>
            <Image src={item.img} width={250} height={250} alt="testimonal_image" className={style.profile}/>
            <div className={`pt-3 text-uppercase name ${name}`}>
             {item.name}
            </div>
            <div className={style.designation}>{item.occupation}</div>
          </div>
          <div className={`face back-face ${style.face} ${style.backFace}`}>
            <span className={`fas fa-quote-left ${style.fas} ${style.faQuoteLeft}`} />
            <div className={style.testimonial}>
              {item.testimonal}
            </div>
            <span className={`fas fa-quote-right ${style.fas} ${style.faQuoteRight}`} />
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