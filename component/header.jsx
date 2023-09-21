"use client";
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style from './header.module.css';

const Banner = () => {
  return (
    <div className={`containerfluid ${style.container}`}>
        <div className={`container ${style.banner}`}>
            <div className={`row `}>
            <div className="col-lg-9 col-md-4 col-sm-6 ">
            <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                    <Image width={970} height={500} src="/images/bg2.png" alt='banner_logo' className={style.img} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image width={970} height={500} className={style.img} src="/images/banner1.png" alt='banner_log' />
                </Carousel.Item>
            </Carousel>
            </div>
            <div className={`col-lg-3 col-md-4 col-sm-6 ${style.ban} `}>
            <Carousel controls={false}>
                <Carousel.Item>
                <Image width={300} height={500} src="/images/banner4.png" className={[style.img, style.header]} alt='banner_logo' />
                </Carousel.Item>
                <Carousel.Item>
                    <Image width={300} height={500} className={style.img} src="/images/ban2.png"  alt='banner_logo' />
                </Carousel.Item>
            </Carousel>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner