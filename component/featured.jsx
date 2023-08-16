"use client"
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from './card';
import style from './featured.module.css'

const Featured = () => {
  return (
    <div>
         <div className={'container ' + style.container}>
      <h1 className={`${style.header}`}>Featured Products</h1>
      <Carousel>
        <Carousel.Item>
  
          <div className={'container my-0'}>
              <div className={"row"}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
          </div>
        
        </Carousel.Item>
        <Carousel.Item>
        <div className={'container my-0'}>
              <div className={"row"}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className={'container my-0'}>
              <div className={"row"}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  )
}

export default Featured