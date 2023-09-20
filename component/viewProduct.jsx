"use client"
import Image from 'next/image'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style from './viewproduct.module.css'

const ViewProduct = () => {
  return (
    <div className={style.container}>
      <div className={style.product}>
          <div>
              <Image src="/images/African Maize.jpg" alt='Product_img' width={100} height={100} />
          </div>
          <div>
            <Carousel className={style.car}>
              <Carousel.Item>
              <Image src="/images/African Maize.jpg" alt='Product_img' width={50} height={30} />
              <Image src="/images/African Maize.jpg" alt='Product_img' width={50} height={30} />
              <Image src="/images/African Maize.jpg" alt='Product_img' width={50} height={30} />
              <Image src="/images/African Maize.jpg" alt='Product_img' width={50} height={30} />
              <Image src="/images/African Maize.jpg" alt='Product_img' width={50} height={30} />
              <Image src="/images/African Maize.jpg" alt='Product_img' width={50} height={30} />
              </Carousel.Item>
              <a className={`${style.carouselControlPrev} carousel-control-prev`} role="button">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className={`${style.carouselControlNext} carousel-control-next`} role="button">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
            </Carousel>
          </div>
      </div>
      <div className={style.ship}></div>
    </div>
  )
}

export default ViewProduct